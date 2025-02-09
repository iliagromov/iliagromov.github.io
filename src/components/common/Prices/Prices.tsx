import React, { FC } from "react";

import "./Prices.sass";

type PricesProps = {};
/**
 * TODO:
 * Сделать таблицу цен и учет индексации
 */
const Prices: FC<PricesProps> = (props) => {
  return (
    <section className="prices" id="prices">
      <h1 className="page__title">Prices</h1>
    </section>
  );
};

export { Prices };
