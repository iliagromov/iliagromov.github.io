import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
// import { StaticImage, GatsbyImage, getImage, withArtDirection  } from "gatsby-plugin-image";
import PageProjects from "../components/containers/PageProjects/PageProjects";
import { wpPage } from "../shared/types";


// export const query = graphql`
//   query {
//       wpPage(uri: {eq: "/projects-page/"}) {
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
//                 title
//                 task
//                 sitelink
//                 shortdescription
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




const ProjectsPage: React.FC<PageProps> = ({data}) => {
  // console.log(props);
  // const data: wpPage = props.data?.wpPage;

  return (
    <Layout>
      <SEO title="Projects" />
      <PageProjects pageData={data}/>
     
    </Layout>
  )
}

export default ProjectsPage;

