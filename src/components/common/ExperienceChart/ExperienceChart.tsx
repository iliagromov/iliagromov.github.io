import React, { FC } from "react";

import "./ExperienceChart.sass";

type ExperienceChartProps = {};
/**
 * TODO: Сделать соотношение опыта, навыков, проектов, и кол во на рынке типо как рост инвестиции
 */
const ExperienceChart: FC<ExperienceChartProps> = (props) => {
  return (
    <section className="experience" id="experience">
      <h1 className="page__title"></h1>
    </section>
  );
};

export { ExperienceChart };
