import * as React from "react";
import { Link, PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { Banner } from "../../common/Banner/Banner";
import Skills from "../../common/Skills/Skills";
import Services from "../../common/Services/Services";
import Advanatages from "../../common/Advanatages/Advanatages";
import Projects from "../../common/Projects/Projects";
import About from "../../common/About/About";
import { wpPage } from "../../../shared/types";

type PageMainProps = {
  pageData?:  any
}




const PageMain: React.FC<PageMainProps> = ({pageData}) => {
  
   const projects = pageData.allMdx.nodes;
 
  return (
    <>
      <Banner />
      <Skills />
      <Services />
      <Advanatages/>
      <Projects projectsArray={projects}/>
      
      <About />  
    </>
  )
}
export default PageMain;
