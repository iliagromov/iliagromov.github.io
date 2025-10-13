import React, { FC, useState } from "react";

import { ReactSVG } from "react-svg";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./SwiperToggles.sass";
import { useSwiper } from "swiper/react";

const SwiperToggles: FC = () => {
  const selfSwiper = useSwiper();
  const onPrev = () => selfSwiper.slidePrev();
  const onNext = () => selfSwiper.slideNext();

  const { iconArrow } = useStaticQuery(graphql`
    query {
      iconArrow: file(relativePath: { eq: "icon-arrow.svg" }) {
        publicURL
        name
      }
    }
  `);

  return (
    <div className="project-slider__toggles">
      <div className="project-slider__btn">
        <button
          onClick={onPrev}
          className="swiper-button-prev page-btn project-slider__btn-prev"
        >
          <ReactSVG className="page-svg" src={iconArrow.publicURL} />
        </button>
      </div>
      <div className="project-slider__btn">
        <div className="project-slider__btn-progress-bar"></div>
        <button
          onClick={onNext}
          className="swiper-button-next page-btn project-slider__btn-next"
        >
          <ReactSVG className="page-svg" src={iconArrow.publicURL} />
        </button>
      </div>
    </div>
  );
};

export { SwiperToggles };
