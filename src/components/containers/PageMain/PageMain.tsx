import * as React from "react";
import { Banner } from "../../common/Banner/Banner";
import Skills from "../../common/Skills/Skills";
import Services from "../../common/Services/Services";
import Advanatages from "../../common/Advanatages/Advanatages";
import Projects from "../../common/Projects/Projects";
import About from "../../common/About/About";
import { ExperienceCount } from "../../common/ExperienceCount/ExperienceCount";

type PageMainProps = {
  pageData?: any;
  location?: any;
};

const PageMain: React.FC<PageMainProps> = ({ pageData, location }) => {
  const projects = pageData.allMdx.nodes;

  return (
    <>
      <Banner />
      <ExperienceCount />
      <Skills />
      <Services />
      <Advanatages />
      <Projects projectsArray={projects} location={location} />

      <About />
    </>
  );
};
export default PageMain;
