import React, { Children, FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby-link";

import "./Projects.sass";
import "./Card.sass";
import Card from "./Card";
import { blockProject, WpProjectPage } from "../../../shared/types";
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar, Navigation, Pagination } from "swiper";
import { SwiperToggles } from "./SwiperToggles";

import "./SwiperCard.sass";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMobile, useTablet } from "../../../shared/media";
type TprojectsArray = {
  frontmatter: {
    pagesCount: number;
    publicData: string;
    title: string;
    link: string;
    pages: any[];
  };
};
type ProjectProps = {
  projectsArray: TprojectsArray[];
  location?: any;
};

const Projects: FC<ProjectProps> = (props) => {
  console.log("🚀 ~ Projects ~ props:", props);

  const projectsGroupedMobile = props.projectsArray.slice(0, 10);
  const projectsGroupedDesktop = props.projectsArray;

  const isProjectPage =
    typeof window !== undefined && props.location.pathname === "/projects/";
  const isMainPage =
    typeof window !== undefined && props.location.pathname === "/";
  const isDesk = useMobile();

  return (
    <section className="projects isAnimate animated">
      <div className="page__title page_transform-uppercase page_text-center">
        <h2 className="page__subtitle_big">Проекты</h2>
        <h2 className="page__title_main page__title-h2 page_bold">
          Проекты {50}+
        </h2>
      </div>
      <div className="wrapper">
        <div className={`inner`}>
          <div className="projects-content row">
            {!isMainPage && isDesk ? (
              <>
                {projectsGroupedDesktop.map((project, idx: number) => {
                  return (
                    <Card
                      key={idx}
                      pages={project.frontmatter.pages}
                      title={project.frontmatter.title}
                      link={project.frontmatter.link}
                      pagesCount={project.frontmatter.pagesCount}
                      publicData={project.frontmatter.publicData}
                    />
                  );
                })}
              </>
            ) : (
              <Swiper
                scrollbar={{
                  hide: true,
                }}
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 1.5,
                  },
                  600: {
                    slidesPerView: 2.5,
                  },
                  768: {
                    slidesPerView: 3.5,
                  },
                  1024: {
                    slidesPerView: 4.5,
                  },
                  1100: {
                    slidesPerView: 5,
                  },
                }}
                className="projectsSwiper"
              >
                {projectsGroupedMobile.map((project, idx: number) => {
                  return (
                    <SwiperSlide key={`${`groupMobile${idx}`}__project${idx}`}>
                      <Card
                        pages={project.frontmatter.pages}
                        title={project.frontmatter.title}
                        link={project.frontmatter.link}
                        pagesCount={project.frontmatter.pagesCount}
                        publicData={project.frontmatter.publicData}
                      />
                    </SwiperSlide>
                  );
                })}
                <SwiperToggles />
              </Swiper>
            )}
          </div>
        </div>
      </div>
      {!isProjectPage && (
        <Link className="page__btn " to={"/projects"}>
          Смотреть проекты
        </Link>
      )}
    </section>
  );
};

export default Projects;
