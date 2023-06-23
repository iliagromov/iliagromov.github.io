import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
import PageProjects from "../components/containers/PageProjects/PageProjects";
import { wpPage } from "../shared/types";




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
              image{
                id
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
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

