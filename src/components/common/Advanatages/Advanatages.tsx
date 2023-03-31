import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';
import { graphql, useStaticQuery } from 'gatsby';
import { wpPage } from '../../../shared/types';

type AdvanatagesProps = {
}

const Advanatages: FC<AdvanatagesProps> = (props) => {
    const { wpPage: { blockAdvantages } } : { wpPage : wpPage} = useStaticQuery(
        graphql` {
          wpPage(uri: {eq: "/"}) {
            id
            title   
            blockAdvantages {
                advantages {
                    title
                }
            }
          }
        }
    `);

    const advantages = blockAdvantages.advantages;
   
   
    const advanatagesRender =  advantages &&  advantages.map((advanatage: any, i: number) => {
        return (
            <li className="page__list-item" key={`skill${i}`}> <span className="page__line_before">{advanatage.title}</span></li>
        )
    });

    return (
        <section className="advantages isAnimate animated">
								<div className="page__title page_transform-uppercase page_text-center">
									<h2 className="page__subtitle_big">Преимущества</h2>
									<h2 className="page__title_main page__title-h2 page_bold">Преимущества</h2>
								</div>
				<div className="wrapper">
					<div className="advantages-content">
						<ol className="page__lists">
                                {advanatagesRender}
						</ol>
					</div>
				</div>
			</section>
    );
}


export default Advanatages;


