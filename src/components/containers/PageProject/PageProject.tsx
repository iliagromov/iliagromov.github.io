import React, { FC, useEffect, useRef, useState } from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { Link, navigate } from "gatsby";
import './PageProject.sass';
import { projectPage, WpProjectPage } from "../../../shared/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

//FIXME: описать тип проекта
type PageProjectProps = {
	wpQueryData: {
		allWpProject: {
			nodes: WpProjectPage[]
		}
	}
}


const PageProject: React.FC<PageProjectProps> = (props) => {

	const wpFields = props.wpQueryData.allWpProject.nodes[0];
	//FIXME: поправить доступ к объекту

	

	// useEffect(() => {
	// 	window.addEventListener('resize', function(){
	// 		directionMedia = window.innerWidth >=768 ? 'vertical' : 'horizontal';
	// 	});
	// });

	const {
		title,
		format,
		description,
		shortdescription,
		days,
		pages
	} = wpFields.blockProject;
	const hasWindow = typeof window !== 'undefined';
	// let pagesArr; 

    const width = hasWindow ? window.innerWidth : 0;
	const numberInitPageMedia = width >=768 ? pages.reverse() : pages;
	// console.log(numberInitPageMedia);
	// const pageInit = pages.length;

	const renderPagesLink = pages?.map((page: projectPage, idx: number) => {
		return (
			<div className="tab-link" key={`pagetitle${idx}`}>{page.pagetitle}</div>
		)
	});

	const renderPagesImage = numberInitPageMedia.map((page: projectPage, idx: number) => {
		const selfLayout = page.pageLayouts ? page.pageLayouts : null;
		
		const image = selfLayout ? selfLayout[0].layout?.sourceUrl : '';

		const imageAlt = selfLayout ? selfLayout[0].layout?.altText : '';

		return (
			<SwiperSlide key={`page${idx+1}`}>
                <li className="SwiperSlideProjectCardPage" key={`page${idx}`}>
					<h1>{page.pagetitle} </h1>
					<img src={image} alt={imageAlt} />
				</li>
            </SwiperSlide>
			
		)
	});

	return (
		<>
			<button className="btn-scrollTop page__btn">
				<div className="page__btn_icon_arrow-top">
				</div>
				<span>наверх</span>
			</button>
			<Link to={'/projects'} className="btn-back page__btn">
				<div className="page__btn_icon_arrow-left"></div><span>назад</span>
			</Link>
			<section className="project-page">
				<div className="wrapper">
					<div className="project-page-content tab-contents" id="tabs">
						<div className="page__title page_transform-uppercase">
							<h2 className="page__subtitle_big">{format}</h2>
							<h2 className="page__title_main page__title-h2 page_bold">{title}</h2>
						</div>
						<div className="project-page-content__description">
							<Swiper
								initialSlide={0}
								effect={"cards"}
								grabCursor={true}
								modules={[EffectCards]}
								className="swiperProjectCardPages"
								direction={'vertical'}
							>
								{renderPagesImage}
							</Swiper>
						</div>

						<div className="project-page-content__info">
							<aside className="project-info">
								<div className="project-info__element">
									<h3 className="page__title-h3">Ссылка:</h3>
									<a className="page__link page__link_site" href="#" target="_blank">site.com</a>
								</div>
								<div className="project-info__element project-info__element_list">
									<h3 className="page__title-h3">Список страниц:</h3>
									<nav className="tab-nav">
										{renderPagesLink}
									</nav>
								</div>
								<div className="project-info__element project-info__task">
									<h3 className="page__title-h3">Задача:</h3>
									<p className="page__text">Разработка сайта для компании site.</p>
								</div>
								<div className="project-info__element project-info__technology">
									<h3 className="page__title-h3">Используемые технологии:</h3>
									<ul className="page__list"></ul>
								</div>
								<div className="project-info__element project-info__days">
									<h3 className="page__title-h3">Сроки:</h3>
									<p className="page__text">
										<span className="page__number_days">{days} </span>
										&nbsp;<span className="page__number_days_text">дней.</span></p>
								</div>
								<div className="project-info__element project-info__date">
									<h3 className="page__title-h3">Дата создания:</h3>
									<p className="page__text">9 февраля 2019</p>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default PageProject;
