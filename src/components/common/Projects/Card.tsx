import { Link } from 'gatsby';
import React, { FC } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { GatsbyImage, getImage, StaticImage, } from "gatsby-plugin-image";

import { blockProject, projectPage } from '../../../shared/types';

import "swiper/css";
import "swiper/css/effect-cards";
import './Card.sass';

type CardProps = {
    blockProject: blockProject,
    projectLink: string,
}

const Card: FC<CardProps> = (props) => {
    const {
        blockProject: {
            title,
            days,
            technology,
            pages
        },
        projectLink,
    } = props;

    const link = projectLink ? projectLink : '/projects';

    const renderPages = pages && pages.map((page: projectPage, idx: number) => {
        const selfLayout = page.pageLayouts ? page.pageLayouts : null;
		
		const image = selfLayout ? selfLayout[0].layout?.sourceUrl : '';

		const imageAlt = selfLayout ? selfLayout[0].layout?.altText : '';

        // console.log(img);
        return (
            <SwiperSlide className="swiperCardPage" key={`page${idx+1}`}> {page.pagetitle} {idx+1}
             
                <img src={image} alt={imageAlt}  />
            </SwiperSlide>
        );
    });


    const renderTechnology = technology && technology.map((item, i) => {
        return (<span key={`technology${i}`} >{item.name}</span>)
    });

    return (
        <article className="card">
            <Link className="card-link" to={link}>
                <div className="card-header">
                    <p>Sep 11th 2020</p>
                    <h2>
                        {title}
                    </h2>
                </div>

                <div className="card-days">
                    <div className="card-days__count">
                      <span className="card-days__count-number"> {pages.length} </span> 
                        <span className="card-days__count-text">
                        Страниц разработано
                        </span>
                        
                    </div>
                    <div className="card-days__svg">
                        <svg className="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                        </svg>
                    </div>
                </div>
                <div className="card-pages">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="swiperCardPages"
                    >
                        {renderPages}
                    </Swiper>
                </div>

                <div className="tags">
                    {renderTechnology}
                </div>
            </Link>
        </article>
    );
}


export default Card;


