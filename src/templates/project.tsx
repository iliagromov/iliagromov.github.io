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
          slug
          title
          publicData
          pagesCount
          siteLink
          pages{
            page{
              title
              image{
                id
                childImageSharp {
                  gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        quality: 90
                        formats: [WEBP, JPG]
                        jpgOptions: {progressive: true, quality: 90}
                        webpOptions: {quality: 90}
                        transformOptions: { 
                          fit: COVER,
                        }
                        outputPixelDensities: [0.25, 0.5, 1]
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
    slug: props.data.mdx.frontmatter.slug,
    title: props.data.mdx.frontmatter.title,
    publicData: props.data.mdx.frontmatter.publicData,
    pagesCount: props.data.mdx.frontmatter.pagesCount,
    siteLink: props.data.mdx.frontmatter.siteLink,
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