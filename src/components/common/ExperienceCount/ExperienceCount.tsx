import React, { FC } from 'react';

import Moment from 'react-moment';
import 'moment-timezone';

import './ExperienceCount.sass';

type ExperienceCountProps = {
}
/**
 * TODO:
 * большими цифрами сделать 
 * сделать таймер вперед
 * показать сколько лет я разрабатываю
 * месяцев
 * дней * с учётом выходных
 * часов
 */
const ExperienceCount: FC<ExperienceCountProps> = (props) => {
	  const dateToFormat = '1976-04-19T12:59-0500';
    return (
        <section className="experience" id="experience">
            <h1 className="page__title">
                <div className="page__title_first" >5 лет</div>
                <div>10 мес</div>
                <Moment>{dateToFormat}</Moment>
            </h1>
		</section>
    );
}


export { ExperienceCount} ;


