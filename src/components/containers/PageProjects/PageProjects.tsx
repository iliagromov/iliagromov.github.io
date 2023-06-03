import * as React from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

import Projects from "../../common/Projects/Projects";

type PageProjectsProps = {
  pageData?:  any
}

const PageProjects: React.FC<PageProjectsProps> = ({pageData}) => {

  const projects = pageData.allMdx.nodes;
 
  return (
    <>
      <Projects projectsArray={projects}/>
    </>
  )
}
export default PageProjects;
