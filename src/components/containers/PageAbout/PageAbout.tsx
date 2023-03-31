import * as React from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

import Projects from "../../common/Projects/Projects";
import About from "../../common/About/About";

type PageAboutProps = {
}


const PageAbout: React.FC<PageAboutProps> = (props) => {
  return (
    <>
      <About/>
     

    </>
  )
}
export default PageAbout;
