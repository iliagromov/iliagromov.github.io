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
};

const PageMain: React.FC<PageMainProps> = ({ pageData }) => {
  const projects = pageData.allMdx.nodes;
  console.log("🚀 ~ projects:", projects);

  return (
    <>
      <Banner />
      {/* <ExperienceCount /> */}
      <Skills />
      <Services />
      <Advanatages />
      <Projects projectsArray={projects} />

      <About />
    </>
  );
};
export default PageMain;
