import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import PageMain from "../components/containers/PageMain/PageMain";
import { wpPage } from "../shared/types";

export const query = graphql`
  query GetAllProjects {
    allMdx(
      filter: { frontmatter: { category: { eq: "projects" } } }
      sort: { frontmatter: { sortIdx: ASC } }
      limit: 10
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

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  return (
    <Layout>
      <PageMain pageData={data} location={location} />
      {/* <Link to="/">Russian</Link>
      <Link to="/en">English</Link> */}

      {/* {data.wpPage.content} */}
    </Layout>
  );
};

export default IndexPage;

export const Head = (props) => (
  <SEO title="Fullstack developer" pathname={props.location.pathname} />
);
