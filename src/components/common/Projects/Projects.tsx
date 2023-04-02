import React, { Children, FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby-link';

import './Projects.sass';
import './Card.sass';
import Card from './Card';
import { blockProject, WpProjectPage } from '../../../shared/types';
import { Swiper, SwiperSlide } from "swiper/react";
import './SwiperCard.sass'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { Scrollbar } from "swiper";
import { graphql, useStaticQuery } from 'gatsby';


type ProjectProps = {
    projectsArray: WpProjectPage[],

}

const Projects: FC<ProjectProps> = (props) => {
   
   
    function sliceIntoChunks(arr: Object[], chunkSize: number) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    const projectsGroupedMobile = sliceIntoChunks(props.projectsArray, 100);
    const projectsGroupedDesktop = sliceIntoChunks(props.projectsArray, 5);


    const hasWindow = typeof window !== 'undefined';
    // let pagesArr; 

    const width = hasWindow ? window.innerWidth : 0;
    const locationPath = hasWindow ? window.location.pathname : '/';
    const isProjectPage = locationPath=== '/projects/';
    const isMainPage = locationPath === '/';
    const isDesktop = width >= 768;
    const slideItemsMainPageMobile = !isDesktop ? 1 : 5;
    const spaceMobile = !isDesktop ? -70 : -100;

    const projectsGrouped = ( isDesktop &&  !isMainPage) ? projectsGroupedDesktop : projectsGroupedMobile;


    const projectRenderDesktop = props.projectsArray && projectsGrouped.map((group: any, idx) => {
        const keyGroup = `groupDesktop${idx}`;

        const projectRowRender = group.map((project: WpProjectPage, idx: number) => {
            const projectLink = project.uri;
            // console.log(project);
            const keyProject = `${keyGroup}__project${idx}`;
            return (
                <Card
                    projectLink={projectLink}
                    blockProject={project.blockProject}
                    key={keyProject} />
            )
        });

        return (
            <div className='projects-content row' key={keyGroup} >
                {projectRowRender}
            </div>
        )

    });

    const projectRenderMobileSlider = props.projectsArray && projectsGrouped.map((group: any, idx) => {
        const keyGroup = `groupMobile${idx}`;
        const spaceBetweenGutter = props.projectsArray.length >= 5 ? spaceMobile : 0 ; 
        const projectRowRender = group.map((project: WpProjectPage, idx: number) => {
            const projectLink = project.uri;
            // console.log(project);
            const keyProject = `${keyGroup}__project${idx}`;
            return (
                <SwiperSlide key={keyProject} >
                    <Card
                        projectLink={projectLink}
                        blockProject={project.blockProject}
                    />
                </SwiperSlide>
            )
        });

        return (
            <div className='projects-content row' key={keyGroup} >
                <Swiper
                   scrollbar={{
                    hide: true,
                  }}
                  modules={[Scrollbar]}
                    spaceBetween={spaceBetweenGutter}
                    slidesPerView={slideItemsMainPageMobile}
                    className="projectsSwiper"
                >

                    {projectRowRender}
                </Swiper>

            </div>
        )

    });

    const projectsRender = (isDesktop && !isMainPage) ? projectRenderDesktop : projectRenderMobileSlider;


    return (
        <section className="projects isAnimate animated">
            <div className="page__title page_transform-uppercase page_text-center">
                <h2 className="page__subtitle_big">Проекты</h2>
                <h2 className="page__title_main page__title-h2 page_bold">Проекты {50}+</h2>
            </div>
            <div className="wrapper">
                <div className="inner">
                    {projectsRender}
                </div>
            </div>
            { !isProjectPage && (
                <Link className="page__btn " to={'/projects'}> 
                Смотреть проекты
                </Link>)
            }
            
        </section>
    );
}


export default Projects;


