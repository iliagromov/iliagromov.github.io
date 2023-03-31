import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
// import { StaticImage, GatsbyImage, getImage, withArtDirection  } from "gatsby-plugin-image";
import PageProjects from "../components/containers/PageProjects/PageProjects";


export const query = graphql`
  query {
    allWpProject {
      nodes {
        slug
        title
        link
        uri
        blockProject {
          days
          description
          format
          pages {
            pagetitle
            image {
              altText
              title
              sourceUrl
            }
            pageLayouts {
              layout {
                altText
                title
                sourceUrl
              }
            }
          }
          title
          task
          sitelink
          shortdescription
        }
        
      }
    }
  }
`;

const ProjectsPage: React.FC<PageProps> = ({data}) => {
  // console.log(data);


  return (
    <Layout>
      <SEO title="Projects" />
      <PageProjects
        wpQueryData={data}
      />
     
    </Layout>
  )
}

export default ProjectsPage;

