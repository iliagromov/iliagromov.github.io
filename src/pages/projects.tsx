import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import PageProjects from "../components/containers/PageProjects/PageProjects";
import { wpPage } from "../shared/types";

export const query = graphql`
  query GetAllProjects {
    allMdx(
      filter: { frontmatter: { category: { eq: "projects" } } }
      sort: { frontmatter: { sortIdx: ASC } }
    ) {
      nodes {
        frontmatter {
          link
          title
          publicData
          pagesCount
          pages {
            page {
              title
              image {
                id
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    formats: [WEBP]
                    transformOptions: { fit: COVER, cropFocus: CENTER }
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectsPage: React.FC<PageProps> = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <PageProjects pageData={data} location={location} />
    </Layout>
  );
};

export default ProjectsPage;
