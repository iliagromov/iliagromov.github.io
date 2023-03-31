import React from "react";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PageProject from "../components/containers/PageProject/PageProject";

export const query = graphql`
  query($slug: String!) {
    allWpProject(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
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
          shortdescription
          sitelink
          task
          title
        }
      }
    }
  }
`;

export default function BlogPost({data}) {
  const post = data.allWpProject.nodes[0];
  const title = `${post.title} | Project `;
  return (
    <Layout>
      <SEO title={title}  />
      <PageProject wpQueryData={data}/>

    </Layout>
  )
}
