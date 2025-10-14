import React from "react";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import { PageProps, graphql } from "gatsby";
import PageProject, {
  PageProjectProps,
} from "../components/containers/PageProject/PageProject";
import { MDXProvider } from "@mdx-js/react";

export const query = graphql`
  query GetCurrentProject($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        publicData
        pagesCount
        siteLink
        pages {
          page {
            title
            image {
              id
              childImageSharp {
                gatsbyImageData(
                  formats: [WEBP]
                  transformOptions: { fit: COVER, cropFocus: CENTER }
                  quality: 100
                )
              }
            }
            layout {
              id
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 900
                  formats: [WEBP]

                  transformOptions: { fit: COVER, cropFocus: NORTH }
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  }
`;

type TProject = {
  page: PageProjectProps[];
};

const BlogPost: React.FC<PageProps> = (props) => {
  const title = `Project ${
    props.data.mdx.frontmatter?.title ? props.data.mdx.frontmatter?.title : ""
  }`;

  const pages: PageProjectProps[] = props.data.mdx?.frontmatter?.pages?.map(
    (project: TProject) => {
      const merged = {
        title: "",
        image: {},
        layout: {},
      };
      project.page.forEach((item) => {
        if (item?.title?.length) {
          merged.title = item.title;
        }
        if (item?.image?.id?.length) {
          merged.image = item.image;
        }
        if (item?.layout?.id?.length) {
          merged.layout = item.layout;
        }
      });
      return merged;
    }
  );

  const SelfProject = {
    slug: props.data.mdx.frontmatter.slug,
    title: props.data.mdx.frontmatter.title,
    publicData: props.data.mdx.frontmatter.publicData,
    pagesCount: props.data.mdx.frontmatter.pagesCount,
    siteLink: props.data.mdx.frontmatter.siteLink,
    pages: pages,
  };

  return (
    <Layout>
      <SEO title={title} />
      <PageProject pageData={SelfProject} />
    </Layout>
  );
};
export default BlogPost;
