/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);



exports.createPages = async ({ graphql, actions: { createPage }  }) => {

 
  await graphql(`
     {
      allWpProject {
        nodes {
          uri
          title
          slug
          link
        }
      }
     }
   `).then(result => {
    console.log(result);
    result.data.allWpProject.nodes.forEach(node => {
      createPage({
        path: `projects/${node.slug}`,
        component: path.resolve(`./src/templates/project.tsx`),
        context: {
          // This is the $slug variable passed to blog-post.js
          slug: node.slug,
        },
      });
    });
  });
}