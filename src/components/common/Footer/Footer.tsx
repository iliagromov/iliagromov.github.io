import React, { FC } from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


import './Footer.sass';

type FooterProps = {
}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="footer">
			<div className="wrapper">
				<div className="footer-content">
					<div className="footer-content__item">
						<h2 className="page__title-h2 page_bold page_transform-uppercase">Контакты</h2>
						<div className="page__copyright">Москва, <span className="year" >  © {new Date().getFullYear()}</span></div>
					</div>
					<div className="footer-content__item">
						<div className="page__subtitle page_padding-bottom-25">телефон</div><a className="page__subtitle page__link page_bold" href="tel:+7 (977) 775-82-88">+7 (977) 775-82-88</a>
					</div>
					<div className="footer-content__item">
						<div className="page__subtitle page_padding-bottom-25">почта</div><a className="page__subtitle page__link page_bold" href="mailto:i@gromov-studio.ru">i@gromov-studio.ru</a>
					</div>
					<div className="footer-content__item">
						<div className="page__subtitle page_padding-bottom-25">социальные сети</div>
						<div className="social">
                            
                            <a className="social__item-link social__item-icon" href="https://vk.com/gromov.ilia" target="_blank">
                                {/* <StaticImage className="page__img" src={'../../../assets/img/social/icon-social-vk.svg'} alt="social" title="social"/> */}
                            </a>
                                
                            <a className="social__item-link social__item-icon" href="https://join.skype.com/invite/fcSLPdcmNNcH" target="_blank">
                                {/* <StaticImage className="page__img" src={'../../../assets/img/social/icon-social-skype.svg'} alt="social" title="social"/> */}
                            </a>

                            <a className="social__item-link social__item-icon" href="https://t.me/gromov_ilia_web" target="_blank">
                                {/* <StaticImage className="page__img" src={'../../../assets/img/social/icon-social-telegram.svg'} alt="social" title="social"/> */}
                            </a>
						</div>
					</div>
				</div>
			</div>
		</footer>
    );
}


export default Footer;

