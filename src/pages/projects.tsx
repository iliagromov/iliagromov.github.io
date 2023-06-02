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

const ProjectsPage: React.FC<PageProps> = (props) => {
  // console.log(data);
  const data: wpPage = props.data?.wpPage;

  return (
    <Layout>
      <SEO title="Projects" />
      <PageProjects
        wpPage={data}
      />
     
    </Layout>
  )
}

export default ProjectsPage;

