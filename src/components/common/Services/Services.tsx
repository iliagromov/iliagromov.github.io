import { graphql, useStaticQuery } from 'gatsby';
import React, { FC, useEffect, useRef } from 'react';
// import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

import { wpPage } from "../../../shared/types";
import { ReactSVG } from 'react-svg';


type ServicesProps = {
}



const Services: FC<ServicesProps> = (props) => {
    const { allMarkdownRemark: {nodes} } = useStaticQuery(
        graphql` 
          
          query GetAllSvgService {
            allMarkdownRemark(
                filter: {frontmatter: {category: {eq: "services"}}}
                sort: {frontmatter: {sortIdx: ASC}}
                ) {
              nodes {
                frontmatter {
                  title
                  description
                  image {
                    id
                    publicURL
                  }
                }
              }
            }
          }
        `);
    // console.log(nodes);
    const services = nodes;

    const serviceRender = services && services.map((service: any, i: number) => {
        let svgSrc = service.frontmatter.image.publicURL ? service.frontmatter.image.publicURL : '';
        let title = service.frontmatter.title;
        let description = service.frontmatter.description;
        
        return (
            <div className="service" key={`service${i}`}>
                <div className="page__img">
                <ReactSVG 
                src={svgSrc} 
                    title={title}
                    desc="Description"
                    className="wrapper-class-name"
                    useRequestCache={false}
                    wrapper="span"

                    beforeInjection={(svg) => {
                    svg.classList.add('svg-class-name')
                    }}
                />

                </div>
                <h4 className="page__subtitle">{title}</h4>
                <div className="page__description">
                    <h4 className="page__subtitle page_text-center">{title}</h4>
                    <p className="page__text">{description}</p>
                </div>
            </div>
        )
    });

    return (
        <div>
            <section className="services isAnimate animated">
                <div className="page__title page_transform-uppercase page_text-center">
                    <h2 className="page__subtitle_big">Услуги</h2>
                    <h2 className="page__title_main page__title-h2 page_bold">Услуги</h2>
                </div>
                <div className="wrapper">
                    <div className="services-content">
                        {serviceRender}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Services;