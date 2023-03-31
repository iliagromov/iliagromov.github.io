import * as React from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

import Projects from "../../common/Projects/Projects";

type PageProjectsProps = {
  wpQueryData: any
}


const PageProjects: React.FC<PageProjectsProps> = (props) => {


  const projects = props.wpQueryData.allWpProject.nodes
  return (
    <>
      <Projects projectsArray={projects}/>
     

    </>
  )
}
export default PageProjects;
