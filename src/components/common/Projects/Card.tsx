import { Link } from "gatsby";
import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import { blockProject, projectPage } from "../../../shared/types";

import "swiper/css";
import "swiper/css/effect-cards";
import "./Card.sass";
import { PageProjectProps } from "../../containers/PageProject/PageProject";
import { createLabelEnding } from "../../../shared/createLabel";

type CardProps = {
  pagesCount: number;
  publicData: string;
  title: string;
  link: string;
  pages: any[];
};
type TProject = {
  page: PageProjectProps[];
};
const Card: FC<CardProps> = ({
  title,
  publicData,
  pagesCount,
  pages,
  link,
}) => {
  const projectLink = link ? link : "/projects";

  const pagesAr: PageProjectProps[] = pages.map((project: TProject) => {
    const merged = {
      title: "",
      image: {},
      layout: {},
    };
    project.page.forEach((item) => {
      if (item?.title?.length) {
        merged.title = item.title;
      }
      if (item?.image?.id?.length) {
        merged.image = item.image;
      }
      if (item?.layout?.id?.length) {
        merged.layout = item.layout;
      }
    });
    return merged;
  });
  const renderPages =
    pagesAr &&
    pagesAr.map((item: any, idx: number) => {
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
          <div className="card-days__count-text">
            {createLabelEnding(pagesCount, ["Страница", "Страницы", "Страниц"])}
            &nbsp;
            {createLabelEnding(pagesCount, [
              "разработана",
              "разработаны",
              "разработано",
            ])}
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
      </Link>
    </article>
  );
};

export default Card;
