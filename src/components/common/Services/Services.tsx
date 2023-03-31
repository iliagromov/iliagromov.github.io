import { graphql, useStaticQuery } from 'gatsby';
import React, { FC, useEffect, useRef } from 'react';
// import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

import { wpPage } from "../../../shared/types";


type ServicesProps = {
}



const Services: FC<ServicesProps> = (props) => {
    const { wpPage: { blockServices } }: { wpPage: wpPage } = useStaticQuery(
        graphql` {
          wpPage(uri: {eq: "/"}) {
            id
            title   
            blockServices {
                service {
                    title
                    image {
                        altText
                        title
                        sourceUrl
                    }
                }
            }
          }
        }
    `);

    const services = blockServices.service;

    const serviceRender = services && services.map((service: any, i: number) => {
        let imgSrc = service.image ? service.image.sourceUrl : '';
        return (
            <div className="service" key={`service${i}`}>
                <div className="page__img">
                    <img src={imgSrc} alt={service.title} title={service.title} />

                </div>
                <h4 className="page__subtitle">{service.title}</h4>
                <div className="page__description">
                    <h4 className="page__subtitle page_text-center">{service.title}</h4>
                    <p className="page__text">{service.description}</p>
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