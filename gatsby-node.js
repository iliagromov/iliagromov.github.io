/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs');

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetAllProjects {
      allMdx(
        filter: {frontmatter: {category: {eq: "projects"}}}
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `projects/${node.frontmatter.slug}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // component: node.internal.contentFilePath,
      component: path.resolve(`./src/templates/project.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

// exports.createResolvers = ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   getNode,
//   store,
//   reporter
// }) => {
//   const { createNode, touchNode } = actions;

//   // Add all media libary images so they can be queried by
//   // childImageSharp
//   createResolvers({
//     WPGraphQL_MediaItem: {
//       imageFile: {
//         type: `File`,
//         async resolve(source, args, context, info) {
//           if (source.sourceUrl) {
//             let fileNodeID;
//             let fileNode;
//             let sourceModified;

//             // Set the file cacheID, get it (if it has already been set)
//             const mediaDataCacheKey = `wordpress-media-${source.mediaItemId}`;
//             const cacheMediaData = await cache.get(mediaDataCacheKey);

//             if (source.modified) {
//               sourceModified = source.modified;
//             }

//             // If we have cached media data and it wasn't modified, reuse
//             // previously created file node to not try to redownload
//             if (cacheMediaData && sourceModified === cacheMediaData.modified) {
//               fileNode = getNode(cacheMediaData.fileNodeID);

//               // check if node still exists in cache
//               // it could be removed if image was made private
//               if (fileNode) {
//                 fileNodeID = cacheMediaData.fileNodeID;
//                 // https://www.gatsbyjs.org/docs/node-creation/#freshstale-nodes
//                 touchNode({
//                   nodeId: fileNodeID
//                 });
//               }
//             }

//             // If we don't have cached data, download the file
//             if (!fileNodeID) {
//               try {
//                 // Get the filenode
//                 fileNode = await createRemoteFileNode({
//                   url: source.sourceUrl,
//                   store,
//                   cache,
//                   createNode,
//                   createNodeId,
//                   reporter
//                 });

//                 if (fileNode) {
//                   fileNodeID = fileNode.id;

//                   await cache.set(mediaDataCacheKey, {
//                     fileNodeID,
//                     modified: sourceModified
//                   });
//                 }
//               } catch (e) {
//                 // Ignore
//                 console.log(e);
//                 return null;
//               }
//             }

//             if (fileNode) {
//               return fileNode;
//             }
//           }
//           return null;
//         }
//       }
//     }
//   });
// }

// exports.createPages = async ({ graphql, actions: { createPage }  }) => {

 
//   await graphql(`
//      {
//       allWpProject {
//         nodes {
//           uri
//           title
//           slug
//           link
//           blockProject{
//             title
//             pages {
//               pagetitle
//               image {
//                 altText
//                 title
//                 sourceUrl
//               }
//               pageLayouts {
//                 layout {
//                   altText
//                   title
//                   sourceUrl
//                 }
//               }
//             }
//           }
//         }
//       }
//      }
//    `).then(result => {
    
   
//     result.data.allWpProject.nodes.forEach((node, i) => {
//       let pagesTitle = node.blockProject.pages.map((page)=>page.title);
//       console.log(pagesTitle);

      
//       let content = `---
// slug: ${node.slug}
// link: ${node.link}
// category: 'projects'
// title: ${node.blockProject.title}
// publicData: Sep 11th 2020
// pagesCount: ${node.blockProject.pages.length}
// pages: ${pagesTitle}
// images: ''
// sortIdx: ${i}
// ---`
//         fs.writeFileSync(`/home/user/Projects/iliagromov.github.io/src/posts/projects/project-${i}-${node.slug}.md`, content);
//       createPage({
//         path: `projects/${node.slug}`,
//         component: path.resolve(`./src/templates/project.tsx`),
//         context: {
//           // This is the $slug variable passed to blog-post.js
//           slug: node.slug,
//         },
//       });
//     });
//   });
// }





// exports.createPages = async ({ graphql, actions: { createPage }  }) => {

//     const { data } =  await graphql(`
//        {
//         allMarkdownRemark(
//           filter: {frontmatter: {category: {eq: "projects"}}}
//         ) {
//             nodes {
//               frontmatter {
//                   category
//                   slug
//                   pages
//               }
//             }
//         }
//        }
//      `);
    
//     data.allMarkdownRemark.nodes.forEach(node => {
//         const { slug, category} = node.frontmatter;
//         createPage({
//           path: `${category}/${slug}`,
//           component: path.resolve(`./src/templates/project.tsx`),
//           context: {
//             // This is the $slug variable passed to blog-post.js
//             slug: slug,
//             category: category,
//           },
//         });
//     });

// }