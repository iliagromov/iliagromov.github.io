import React from "react";

import { Link, graphql, navigate, useStaticQuery } from "gatsby";
import "./PageProject.sass";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { ReactSVG } from "react-svg";
import { SwiperToggles } from "../../common/Projects/SwiperToggles";

//FIXME: описать тип проекта
type PageDataProjectProps = {
  pageData: {
    slug: string;
    title: string;
    task: string;
    description: string;
    skills: {
      image: {
        publicURL: string;
        name: string;
      };
    }[];
    publicData: string;
    siteLink: string;
    pagesCount: number;
    pages: PageProjectProps[];
  };
};

export type PageProjectProps = {
  title: string;
  image: {
    id?: string;
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
  layout: {
    id?: string;
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
};

const PageProject: React.FC<PageDataProjectProps> = ({ pageData }) => {
  const format = "Site";
  const { iconArrow } = useStaticQuery(graphql`
    query {
      iconArrow: file(relativePath: { eq: "icon-arrow.svg" }) {
        publicURL
        name
      }
    }
  `);

  // useEffect(() => {
  // 	window.addEventListener('resize', function(){
  // 		directionMedia = window.innerWidth >=768 ? 'vertical' : 'horizontal';
  // 	});
  // });

  const { slug, title, pages, siteLink } = pageData;

  const task = `${pageData?.task ? pageData?.task : ""}`;
  const skills = pageData?.skills
    ?.map((item) => item.image?.name || "")
    .toString();

  const shortDescription = `${task} ${title} с использованием технологий ${skills}`;

  const renderPagesLink = pages?.map((page: PageProjectProps, idx: number) => {
    return (
      <div className="tab-link" key={`pagetitle${idx}`}>
        {page.title}
      </div>
    );
  });

  const renderPagesImage = pages.map((page: PageProjectProps, idx: number) => {
    const layout = getImage(page.layout);

    return (
      <SwiperSlide key={`page${idx + 1}`}>
        <div className="SwiperSlideProjectCardPage" key={`page${idx}`}>
          <h1>{page.title} </h1>
          {layout ? (
            <GatsbyImage image={layout} alt={"img"} />
          ) : (
            <StaticImage
              src="../../../assets/images/projects/project-0-openfactoring/1.png"
              alt={"img"}
            />
          )}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Link to={"/projects"} className="btn-back page__btn">
        <div className="page__btn_icon_arrow-left">
          <ReactSVG className="page-svg" src={iconArrow.publicURL} />
        </div>
        <span>назад</span>
      </Link>
      <section className="project-page">
        <div className="wrapper">
          <div className="project-page-content">
            <div className="page__title page_transform-uppercase">
              <h2 className="page__subtitle_big">{format}</h2>
              <h2 className="page__title_main page__title-h2 page_bold">
                {title}
              </h2>
            </div>
            <div className="project-page-content__description">
              <Swiper
                initialSlide={0}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Navigation, Pagination]}
                className="swiperProjectCardPages"
                direction={"horizontal"}
              >
                {renderPagesImage}
                {Boolean(renderPagesImage.length > 1) && <SwiperToggles />}
              </Swiper>
              <div>
                <p className="page__text">{shortDescription}</p>

                <div
                  className="page__text"
                  dangerouslySetInnerHTML={{
                    __html: `${pageData.description}`,
                  }}
                ></div>
              </div>
            </div>

            <div className="project-page-content__info">
              <aside className="project-info">
                <div className="project-info__element">
                  <h3 className="page__title-h3">Ссылка:</h3>
                  <a
                    className="page__link page__link_site"
                    href={siteLink}
                    target="_blank"
                  >{`${slug}.io`}</a>
                </div>
                <div className="project-info__element project-info__element_list">
                  <h3 className="page__title-h3">Список страниц:</h3>
                  <nav className="tab-nav">{renderPagesLink}</nav>
                </div>
                <div className="project-info__element project-info__task">
                  <h3 className="page__title-h3">Задача:</h3>
                  <p className="page__text">{pageData.task}</p>
                </div>
                <div className="project-info__element project-info__technology">
                  <h3 className="page__title-h3">Используемые технологии:</h3>
                  <ul className="page__ul">
                    {pageData.skills.map((item, idx) => {
                      if (!item.image?.name) {
                        return;
                      }
                      return (
                        <li
                          key={`icon${item.image.name}__${idx}`}
                          className="page__li"
                        >
                          <ReactSVG
                            className="page__list_icon page-svg"
                            src={item?.image.publicURL}
                            width={30}
                            title={item?.image?.name}
                            desc={`На проекте использовался ${item?.image?.name}`}
                            wrapper={"span"}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* <div className="project-info__element project-info__days">
                  <h3 className="page__title-h3">Сроки:</h3>
                  <p className="page__text">
                     <span className="page__number_days">{days} </span> 
                    &nbsp;<span className="page__number_days_text">дней.</span>
                  </p>
                </div> */}
                <div className="project-info__element project-info__date">
                  <h3 className="page__title-h3">Дата создания:</h3>
                  <p className="page__text">{pageData.publicData}</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageProject;
