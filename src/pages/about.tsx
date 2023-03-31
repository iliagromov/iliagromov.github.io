import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
import { StaticImage, GatsbyImage, getImage, withArtDirection  } from "gatsby-plugin-image";
import PageAbout from "../components/containers/PageAbout/PageAbout";


const AboutPage: React.FC<PageProps> = ({data}) => {

  return (
    <Layout>
      <SEO title="About" />
      <PageAbout />
     
    </Layout>
  )
}

export default AboutPage;
