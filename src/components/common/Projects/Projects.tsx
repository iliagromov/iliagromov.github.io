import React, { Children, FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby-link';

import './Projects.sass';
import './Card.sass';
import Card from './Card';
import { blockProject, WpProjectPage } from '../../../shared/types';
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar, Navigation, Pagination  } from "swiper";
import { SwiperToggles } from './SwiperToggles';


import './SwiperCard.sass'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



type ProjectProps = {
    projectsArray?: any

}

const Projects: FC<ProjectProps> = (props) => {
   
    function sliceIntoChunks(arr: Object[], chunkSize: number) {
        const res = [];
        if(arr){
            for (let i = 0; i < arr.length; i += chunkSize) {
                const chunk = arr.slice(i, i + chunkSize);
                res.push(chunk);
            }
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
    const isDesktop = width >= 1024;
    const slideItemsMainPageMobile = !isDesktop ? 1 : 5;
    const spaceMobile = !isDesktop ? -70 : -100;

    const projectsGrouped = ( isDesktop &&  !isMainPage) ? projectsGroupedDesktop : projectsGroupedMobile;


    const projectRenderDesktop = props.projectsArray.map((project: WpProjectPage, idx: number) => {
        const keyGroup = `groupDesktop${idx}`;

     
        return <Card
                blockProject={project}
                key={keyGroup} />


    });

    const projectRenderMobileSlider = props.projectsArray && projectsGrouped.map((group: any, idx) => {
        const keyGroup = `groupMobile${idx}`;
        const spaceBetweenGutter = props.projectsArray.length >= 5 ? spaceMobile : 0 ; 
        const projectRowRender = group.map((project: WpProjectPage, idx: number) => {
            // console.log(project);
            const keyProject = `${keyGroup}__project${idx}`;
            return (
                <SwiperSlide key={keyProject} >
                    <Card
                        blockProject={project}
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
                  modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={spaceBetweenGutter}
                    slidesPerView={slideItemsMainPageMobile}
                    className="projectsSwiper"
                >

                    {projectRowRender}
                    <SwiperToggles />
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
                <div className={`inner ${(isDesktop && !isMainPage) ? 'projects-inner' :''}`}>
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


