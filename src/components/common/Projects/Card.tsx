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
    blockProject: any,
}

const Card: FC<CardProps> = (props) => {
    const {
        title,
        publicData,
        pagesCount,
        pages,
        link
    } = props.blockProject.frontmatter;

    // console.log(props.blockProject.frontmatter);

    const projectLink = link ? link : '/projects';

    const renderPages = pages && pages.map((item: any, idx: number) => {
       

        let img = item.page.map((img:any)=>img.image);
        let title = item.page.map((img:any)=>img.title);
        let childImageSharp =img[0].childImageSharp;
        let imgSrc = getImage(childImageSharp);
        let imgTitle = title[1];
        return (
            <SwiperSlide className="swiperCardPage" key={`page${idx+1}`}> {imgTitle} 
             
                <GatsbyImage
                    image={imgSrc}
                    alt={imgTitle}
                />
            </SwiperSlide>
        );
    });


    // const renderTechnology = technology && technology.map((item, i) => {
    //     return (<span key={`technology${i}`} >{item.name}</span>)
    // });

    return (
        <article className="card">
            <Link className="card-link" to={projectLink}>
                <div className="card-header">
                    <p>{publicData}</p>
                    <h2>
                        {title}
                    </h2>
                </div>

                <div className="card-days">
                    <div className="card-days__count">
                      <span className="card-days__count-number"> {pagesCount} </span> 
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
                    {/* {renderTechnology} */}
                </div>
            </Link>
        </article>
    );
}


export default Card;


