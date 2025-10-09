import { Link } from "gatsby";
import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import { blockProject, projectPage } from "../../../shared/types";

import "swiper/css";
import "swiper/css/effect-cards";
import "./Card.sass";

type CardProps = {
  blockProject: any;
};

const Card: FC<CardProps> = (props) => {
  const { title, publicData, pagesCount, pages, link } =
    props.blockProject.frontmatter;

  // console.log(props.blockProject.frontmatter);

  const projectLink = link ? link : "/projects";

  const pagesAr = pages.map((project: any) => {
    const obj1 = project.page[0];
    const obj2 = project.page[1];
    const merged = {};
    Object.keys(obj1).forEach(
      (key) => (merged[key] = obj1[key] ? obj1[key] : obj2[key])
    );
    return merged;
  });
  // console.log(pagesAr);

  const renderPages =
    pagesAr &&
    pagesAr.map((item: any, idx: number) => {
      console.log("🚀 ~ pagesAr.map ~ item:", item);
      let imgSrc = getImage(item.image);
      let imgTitle = item.title;
      return (
        <SwiperSlide className="swiperCardPage" key={`page${idx + 1}`}>
          <GatsbyImage image={imgSrc} alt={imgTitle} />
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
          <h2>{title}</h2>
        </div>

        <div className="card-days">
          <div className="card-days__count">
            <span className="card-days__count-number"> {pagesCount} </span>
          </div>
          <div className="card-days__count-text">Страниц разработано</div>
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

        <div className="tags">{/* {renderTechnology} */}</div>
      </Link>
    </article>
  );
};

export default Card;
