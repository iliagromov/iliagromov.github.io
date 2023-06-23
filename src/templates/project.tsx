import React from "react";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import { PageProps, graphql } from "gatsby";
import PageProject from "../components/containers/PageProject/PageProject";
import { MDXProvider } from "@mdx-js/react"


export const query = graphql`
  query GetCurrentProject($id: String!) {
    mdx( id: { eq: $id } ) {
        frontmatter {
          title
          publicData
          pagesCount
          pages{
            page{
              title
              image{
                id
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
  }
`;

const BlogPost: React.FC<PageProps> = (props) => {

  
  const title = ` Project ${props.data.mdx.frontmatter.title}`;

  const pages = props.data.mdx.frontmatter.pages.map((project: any)=>{
    const obj1 = project.page[0];
    const obj2 = project.page[1];
    const merged = {};
    Object.keys(obj1).forEach((key) => merged[key] = obj1[key] ? obj1[key] : obj2[key]);
    return merged
  })
  
  const SelfProject = {
    title: props.data.mdx.frontmatter.title,
    publicData: props.data.mdx.frontmatter.publicData,
    pagesCount: props.data.mdx.frontmatter.pagesCount,
    pages: pages,
  }

  return (
    <Layout>
      <SEO title={title}  />
      <PageProject pageData={SelfProject}/>
    </Layout>
  )
}
export default BlogPost;