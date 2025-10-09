/**
 *
 * @param number
 * @param titles ['ед.ч, мн.ч и.п., мн.ч']
 * @returns
 */
export function textEnding(number: number, titles = ["День", "Дня", "Дней"]) {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }`;
}
