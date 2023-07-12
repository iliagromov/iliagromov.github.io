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
							<p className="page__text page_padding-bottom-20"> Мой опыт - ваше перимущество. </p>
							<p className="page__text page_padding-bottom-20">6 лет разрабатываю с нуля сайты «под ключ».</p>
							<p className="page__text page_padding-bottom-20">Скорость разработки Лендинга = сутки</p>
							<p className="page__text"> <strong className="page_bold"> Скорость разработки Лендинга = сутки</strong></p>
							<p className="page__text"> <strong className="page_bold"> Краткая информация</strong></p>
							<ul className="page__lists">
								<li className="page__list page__list_text">6 лет разрабатываю с нуля сайты «под ключ»</li>
								<li className="page__list page__list_text">Делаю верстку, дизайн, маркетинг тоже</li>
								<li className="page__list page__list_text">Разрабатываю в ручную и на конструкторах Tilda, Webflow, Elementor</li>
								<li className="page__list page__list_text">Интегрирую с cms(админкой) Wordpress (wp), Modx, Joomla, CS Card, Drupal, 1c bitrix</li>
								<li className="page__list page__list_text">Дорабатываю “Скрипты и плагины”, javascript (js), php и другое см. в тегах</li>
								<li className="page__list page__list_text">Делаю Прототипирование на основе Маркетинга</li>
								<li className="page__list page__list_text">Разное. Выполняю всяческие доработки и правки</li>
							</ul>
							<p className="page__text"> <strong className="page_bold"> Цены</strong></p>
							<ul className="page__lists">
								<li className="page__list page__list_text">Поддержка = 455 руб / час</li>
								<li className="page__list page__list_text">Доработки = 813 руб / час</li>
								<li className="page__list page__list_text">Разработка = 1560 руб / час</li>
							</ul>	
							<p className="page__text"> Сделаю фиксированный расчёт задачи / проекта за 5 минут</p>				
							<p className="page__text">Иначе работаем по ставке в час</p>				
							<p className="page__text">* Подарок 1 час работы бесплатно.</p>		
							<p className="page__text"> <strong className="page_bold"> Frontend навыки</strong></p>
							<ul className="page__lists">
								<li className="page__list page__list_text">Языки: JavaScript | TypeScript</li>
								<li className="page__list page__list_text">Верстка: HTML | CSS | Tailwind | БЭМ | Less | Sass | Scss| Pug | Tilda | Webflow | Elementor</li>
								<li className="page__list page__list_text">Фреймворки: Vue.js | React.js | Angular</li>
								<li className="page__list page__list_text">Серверный рендеринг: Next.js | Nuxt.js | Universal</li>
								<li className="page__list page__list_text">Статическая генерация SSG: Gatsby.js | Vuepress</li>
								<li className="page__list page__list_text">Роутинг: Vue Router | React Router</li>
								<li className="page__list page__list_text">Стейт менеджмент: Redux | Redux Toolkit | Pinia | Vuex</li>
								<li className="page__list page__list_text">UI библиотеки: Ant Design | Vuetify | Chakra-ui | Material UI</li>
								<li className="page__list page__list_text">Сборщики: Webpack | Gulp | Grunt</li>
								<li className="page__list page__list_text">Прочее: Rest API | Axios | WebSocket | Git | PWA</li>
								
							</ul>			
							<p className="page__text"> <strong className="page_bold"> Backend навыки</strong></p>		
							<ul className="page__lists">
								<li className="page__list page__list_text">Языки: Node.js | PHP</li>
								<li className="page__list page__list_text">Фреймворки:  NestJS</li>
								<li className="page__list page__list_text">Базы данных: MySQL  | GraphQL</li>
								<li className="page__list page__list_text">CMS: Wordpress | Dupal | 1C Bitrix | Joomla | Modx</li>
							</ul>
							<p className="page__text"> <strong className="page_bold">Резюме с подробным описанием </strong></p>	
							<a className="page_padding-bottom-20" href="https://igromov.digital/CV-Gromov-ILIA-middle-middle+220.pdf" target='_blank'>Посмотреть резюме</a>	
							<p className="page__text "> <strong className="page_bold">Пишите в тг или whatsapp</strong></p>	
							<a href="https://wa.me/79777758288">+79777758288</a>
							<a href="https://t.me/igromov_digital">https://t.me/igromov_digital</a>


						</div>
					</div>
				</div>
			</section>
    );
}


export default About;


