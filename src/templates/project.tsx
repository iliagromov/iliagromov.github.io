import React from "react";
import Layout from "../layouts/Default";
import SEO from "../components/seo";
import { PageProps, graphql } from "gatsby";
import PageProject, {
  PageProjectProps,
} from "../components/containers/PageProject/PageProject";
// import { MDXProvider } from "@mdx-js/react";

export const query = graphql`
  query GetCurrentProject($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        description
        task
        publicData
        pagesCount
        siteLink
        skills {
          image {
            publicURL
            name
          }
        }
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
  console.log("🚀 ~ BlogPost ~ props:", props);
  const dataMd = props.data.mdx.frontmatter;

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
    slug: dataMd.slug,
    title: dataMd.title,
    description: dataMd.description,
    task: dataMd.task,
    publicData: dataMd.publicData,
    pagesCount: dataMd.pagesCount,
    siteLink: dataMd.siteLink,
    pages: pages,
    skills: dataMd.skills,
  };

  return (
    <Layout>
      <PageProject pageData={SelfProject} />
    </Layout>
  );
};
export default BlogPost;

export const Head = (props: PageProps) => {
  const dataMd = props.data.mdx.frontmatter;
  const title = `${dataMd?.title ? dataMd?.title : ""}`;
  const task = `${dataMd?.task ? dataMd?.task : ""}`;
  const skills = dataMd?.skills
    ?.map((item) => item.image?.name || "")
    .toString();

  const description = `${task} ${title} с использованием технологий ${skills}`;

  return (
    <SEO
      title={`Проект ${title}`}
      description={description}
      pathname={props.location.pathname}
    />
  );
};
