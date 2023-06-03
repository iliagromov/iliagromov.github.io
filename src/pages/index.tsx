import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import PageMain  from "../components/containers/PageMain/PageMain";
import { wpPage } from "../shared/types";


// export const query = graphql`
//   query {
//       wpPage(uri: {eq: "/"}) {
//         id
//         title
//         content
//         blockProjects {
//           projects {
//             ... on WpProject {
//               id
//               uri
//               title
//               slug
//               link
//               blockProject {
//                 days
//                 description
//                 format
//                 pages {
//                   pagetitle
//                   image {
//                     altText
//                     title
//                     sourceUrl
//                   }
//                   pageLayouts {
//                     layout {
//                       altText
//                       title
//                       sourceUrl
//                     }
//                   }
//                 }
//                 title
//                 task
//                 sitelink
//                 shortdescription
//               }
//             }
//           }
//         }
//       }
//     }
// `;

export const query = graphql`
  query GetAllProjects {
        allMdx(
          filter: {frontmatter: {category: {eq: "projects"}}}
          sort: {frontmatter: {sortIdx: ASC}}
          limit: 10
        ) {
          nodes {
            frontmatter {
              link
              title
              publicData
              pagesCount
              pages{
                page{
                  title
                  image
                }
              }
            }
          }
        }
      }
  `

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <Layout>

      <SEO title="Iila Gromov" />
      <PageMain pageData={data}/>
      {/* <Link to="/">Russian</Link>
      <Link to="/en">English</Link> */}
     
      {/* {data.wpPage.content} */}
    </Layout>
  )
}

export default IndexPage;

