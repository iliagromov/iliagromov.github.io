import React, { FC } from 'react';

import { StaticImage } from "gatsby-plugin-image"


import './style.sass';
type AboutProps = {
}

const About: FC<AboutProps> = (props) => {
	
    return (
        <section className="about isAnimate animated" id="about">
								<div className="page__title page_transform-uppercase page_text-center">
									<h2 className="page__subtitle_big">Обо мне</h2>
									<h2 className="page__title_main page__title-h2 page_bold">Обо мне</h2>
								</div>
				<div className="wrapper">
					<div className="about-content">
						<div className="page__img" >
							<StaticImage
							 src={'../../../assets/images/imgAbout.jpg'} 
							 alt={'img'} />
                        </div>
						<div className="page__content">
							<p className="page__text page_padding-bottom-20">Frontend developer профессионально создаю сайты и веб-приложения, также имею навыки в интернет-маркетинге(понимание того что необходимо для сайта с точки зрения бизнеса).</p>
							<p className="page__text page_padding-bottom-20">Считаю важным и правильным на этапе прототипирования, <strong className="page_bold">совещаться с разработчиком!</strong></p>
							<p className="page__text"> <strong className="page_bold">On default: </strong></p>
							<ul className="page__lists">
								<li className="page__list page__list_text">Адаптивная верстка, даже если не&nbsp;имеете макеты сделаю адаптив&nbsp;по <strong className="page_bold">методологии responsive;</strong></li>
								<li className="page__list page__list_text">Внедрю микроразметку <strong className="page_bold">schema.org и&nbsp;Open Graph, </strong>а&nbsp;также семантическую верстку;</li>
							</ul><a className="page__link page__link_active open-modal" href="" data-modal="modal-skills">Открыть полный список</a>
							<p className="page__text">В моей команде есть web-дизайнер, верстальщик, seo-специалист, маркетолог.</p>
							<p className="page__text page_padding-bottom-20">В веб-разработке более 5-ти лет.</p>
							<p className="page__text page_padding-bottom-20">Если вы из Москвы, то при сотрудничестве буду рад встретиться лично для обсуждения тонкостей работы!</p>
							<button className="page__btn js__create-modal open-modal" data-modal="modal-callback">Связаться со мной</button>
						</div>
					</div>
				</div>
			</section>
    );
}


export default About;


