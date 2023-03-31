import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import PageMain  from "../components/containers/PageMain/PageMain";
import { wpPage } from "../shared/types";


export const query = graphql`
  query {
      wpPage(uri: {eq: "/"}) {
        id
        title
        content
        blockSkills {
          skills {
            title
            image {
              sourceUrl
              title
              altText
            }
          }
        }
        blockServices {
          service {
            title
            image {
              altText
              title
              sourceUrl
            }
          }
        }
        blockAdvantages {
          advantages {
            title
          }
        }
        blockProjects {
          projects {
            ... on WpProject {
              id
              uri
              title
              slug
              link
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
                }
                title
                task
                sitelink
                shortdescription
              }
            }
          }
        }
      }
    }
`;


const IndexPage: React.FC<PageProps> = (props) => {
  // console.log(props);
  const data: wpPage = props.data?.wpPage;
  return (
    <Layout>

      <SEO title="Iila Gromov" />
      <PageMain 
      wpPage={data}
      />
      {/* <Link to="/">Russian</Link>
      <Link to="/en">English</Link> */}
     
      {/* {data.wpPage.content} */}
    </Layout>
  )
}

export default IndexPage;

