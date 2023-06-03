import React from "react";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import { PageProps, graphql } from "gatsby";
import PageProject from "../components/containers/PageProject/PageProject";
import { MDXProvider } from "@mdx-js/react"

// export const query = graphql`
//   query($slug: String!) {
//     allWpProject(filter: { slug: { eq: $slug } }) {
//       nodes {
//         title
//         content
//         blockProject {
//           days
//           description
//           format
//           pages {
//             pagetitle
//             image {
//               altText
//               title
//               sourceUrl
//             }
//             pageLayouts {
//               layout {
//                 altText
//                 title
//                 sourceUrl
//               }
//             }
//           }
//           shortdescription
//           sitelink
//           task
//           title
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query GetCurrentProject($id: String!) {
    mdx( id: { eq: $id } ) {
        frontmatter {
          title
          pages{
            page{
              image{
                id
                childImageSharp {
                  gatsbyImageData
                }
              }
              title
            }
          }
        }
      }
  }
`;

const BlogPost: React.FC<PageProps> = (props) => {
 
  const title = ` Project `;
  const SelfProject = props.data.mdx.frontmatter;
  console.log(SelfProject);
  return (
    <Layout>
      <SEO title={title}  />
      {/* <PageProject wpQueryData={data}/> */}
      {/* <h1>{SelfProject.title}</h1> */}
    </Layout>
  )
}
export default BlogPost;