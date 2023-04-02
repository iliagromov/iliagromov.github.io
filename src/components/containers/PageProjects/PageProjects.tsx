import * as React from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

import Projects from "../../common/Projects/Projects";
import { wpPage } from "../../../shared/types";

type PageProjectsProps = {
  wpPage: wpPage
}


const PageProjects: React.FC<PageProjectsProps> = (props) => {

  // console.log(props);
  // const projects = props.wpQueryData.allWpProject.nodes;
  // const projects = [];
  const {projects} = props.wpPage.blockProjects;
  // console.log(projects);
  return (
    <>
      <Projects projectsArray={projects}/>
     

    </>
  )
}
export default PageProjects;
