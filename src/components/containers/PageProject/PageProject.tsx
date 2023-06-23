import React from "react";

import { Link, graphql, navigate, useStaticQuery } from "gatsby";
import './PageProject.sass';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination  } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ReactSVG } from "react-svg";
import { SwiperToggles } from "../../common/Projects/SwiperToggles";

//FIXME: описать тип проекта
type PageDataProjectProps = {
	pageData: {
		title: string,
		publicData: string,
		pagesCount: number,
		pages: [PageProjectProps]
	}
}

type PageProjectProps = {
	title: string,
	image: {
		childImageSharp: {
			gatsbyImageData: any
		}
	}
}


const PageProject: React.FC<PageDataProjectProps> = ({ pageData }) => {
	const format = 'Site';
	const {
		iconArrow
	} = useStaticQuery(graphql`
		query  {
			iconArrow: file(relativePath: { eq: "icon-arrow.svg" }) {
			  publicURL
			  name
		  	}
		}`);
		
	// useEffect(() => {
	// 	window.addEventListener('resize', function(){
	// 		directionMedia = window.innerWidth >=768 ? 'vertical' : 'horizontal';
	// 	});
	// });

	const {
		title,
		pages
	} = pageData;
	const pageInit = pages.length;

	const renderPagesLink = pages?.map((page: PageProjectProps, idx: number) => {
		return (
			<div className="tab-link" key={`pagetitle${idx}`}>{page.title}</div>
		)
	});

	const renderPagesImage = pages.map((page: PageProjectProps, idx: number) => {

		const image = getImage(page.image);

		return (
			<SwiperSlide key={`page${idx + 1}`}>
				<li className="SwiperSlideProjectCardPage" key={`page${idx}`}>
					<h1>{page.title} </h1>
					<GatsbyImage
						image={image}
						alt={'img'}
					/>
				</li>
			</SwiperSlide>

		)
	});

	return (
		<>
			
			<Link to={'/projects'} className="btn-back page__btn">
				<div className="page__btn_icon_arrow-left"> 
					<ReactSVG 
                        className="page-svg" 
                        src={iconArrow.publicURL} />
				</div>
				<span>назад</span>
			</Link>
			<section className="project-page">
				<div className="wrapper">
					<div className="project-page-content" >
						<div className="page__title page_transform-uppercase">
							<h2 className="page__subtitle_big">{format}</h2>
							<h2 className="page__title_main page__title-h2 page_bold">{title}</h2>
						</div>
						<div className="project-page-content__description">
							<Swiper
								initialSlide={0}
								effect={"cards"}
								grabCursor={true}
								modules={[EffectCards, Navigation, Pagination]}
								className="swiperProjectCardPages"
								direction={'horizontal'}
							>
								{renderPagesImage}

								<SwiperToggles />
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
										{/* <span className="page__number_days">{days} </span> */}
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
