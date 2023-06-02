import React, { FC } from 'react';

import './style.sass';
type AdvanatagesProps = {
}

const Advanatages: FC<AdvanatagesProps> = (props) => {
   
    const advantages = [
        'Профессиональный подход',
            'Использование современных технологий',
            'Здравая оценка сроков',
            'Разработка по стандартам',
            'Большую часть дня Online',
            'Оптимизация процесса и кода',
            'Работаю исключительно по ТЗ',
            'Ответственное исполнение'
        ]
    const advanatagesRender =  advantages &&  advantages.map((advanatage: any, i: number) => {
        return (
            <li className="page__list-item" key={`skill${i}`}> <span className="page__line_before">{advanatage}</span></li>
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


