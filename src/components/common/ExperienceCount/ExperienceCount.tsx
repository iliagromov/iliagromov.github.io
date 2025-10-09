import React, { FC, useEffect, useState } from "react";

import "./ExperienceCount.sass";
import { textEnding } from "../../../shared/textEnding";
import { differenceInCalendarYears, differenceInHours } from "date-fns";
import { zeroPad } from "react-countdown";

type ExperienceCountProps = {};
/**
 * TODO:
 * большими цифрами сделать
 * сделать таймер вперед
 * показать сколько лет я разрабатываю
 * месяцев
 * дней
 * часов
 */
const ExperienceCount: FC<ExperienceCountProps> = (props) => {
  const START_EXP = "2017-05-01T10:00:00.000Z";
  const NOW = new Date();
  const years = differenceInCalendarYears(NOW, START_EXP);

  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  function countUpFromTime(dateFrom: string) {
    let date = new Date(dateFrom).getTime();
    let now = new Date();
    let countFrom = new Date(date);
    let timeDifference = now - countFrom;

    let secondsInADay = 60 * 60 * 1000 * 24;
    let secondsInAHour = 60 * 60 * 1000;

    let days = Math.floor((timeDifference / secondsInADay) * 1);
    let years = Math.floor(days / 365);
    if (years > 1) {
      days = days - years * 365;
    }

    let hours = Math.floor(
      ((timeDifference % secondsInADay) / secondsInAHour) * 1
    );
    let mins = Math.floor(
      (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
    );
    let secs = Math.floor(
      ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
        1000) *
        1
    );
    setDays(days);
    setHours(hours);
    setMinutes(mins);
    setSeconds(secs);

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () {
      countUpFromTime(dateFrom);
    }, 1000);
  }
  useEffect(() => {
    countUpFromTime(START_EXP);
  }, []);
  //  window.onload = function () {
  //    // Month Day, Year Hour:Minute:Second, id-of-element-container
  //    countUpFromTime("Jan 1, 2014 12:00:00", "countup1"); // ****** Change this line!
  //  };
  //   const dateToFormat = "2017-04-16T15:20:00.000Z";
  //   let today = moment().locale("ru");
  //   let birthday = moment("2019-12-26");
  //   let weeks = today.diff(birthday, "week");
  //   let format = "YYYY-MM-DD H:mm:ss";
  //   //let start = moment().subtract(3, "months").startOf("day");
  //   const date_limit = moment("2020-01-03T16:28:16.943+00:00").format(
  //     "YYYY-MM-DD H:mm:ss"
  //   );
  /*
     var start = new Date();
    start.setHours(0, 0, 0, 0);
    var end = new Date();
    end.setHours(23, 59, 59, 999);
    */

  //   var startTime = moment();
  //     //.subtract(1, "day")
  //     .startOf("day");
  //   var end = moment()
  //     //.subtract(1, "day")
  //     .endOf("day");

  //   let date = moment("2017-04-16T15:20:00.000Z");

  //   console.log("Es de Hoy?", date.isBetween(start, end));

  //   console.log(
  //     "Start: ",
  //     "HOY:",
  //     moment("2021-03-15T15:00:11.897Z").format("DD-MM-YYYY HH:mm:ss"),
  //     start.format("YYYY-MM-DDTHH:mm:ssZ"),
  //     "End:",
  //     end.format("YYYY-MM-DDTHH:mm:ssZ"),
  //     "--------------",
  //     start.format("DD-MM-YYYY HH:mm:ss"),
  //     end.format("DD-MM-YYYY HH:mm:ss")
  //   );

  // Function to update the timer display
  //   function updateCountUpTimer() {
  //     // let now = moment();

  //     let date = moment("2017-04-16T15:20:00.000Z");
  //     let duration = moment.duration(date.diff(startTime));

  //     // Format the duration as desired (e.g., HH:mm:ss)
  //     let hours = Math.floor(duration.asHours());
  //     let minutes = duration.minutes();
  //     let seconds = duration.seconds();

  //     // Pad with leading zeros if necessary
  //     hours = String(hours).padStart(2, "0");
  //     minutes = String(minutes).padStart(2, "0");
  //     seconds = String(seconds).padStart(2, "0");

  //     let timerDisplay = `${hours}:${minutes}:${seconds}`;
  //     console.log("🚀 ~ updateCountUpTimer ~ timerDisplay:", timerDisplay);
  //   }
  //   setInterval(updateCountUpTimer, 1000);

  return (
    <section>
      <section className="experience" id="experience">
        <div className="page__title page_transform-uppercase page_text-center">
          <div className="page__subtitle_big">Мой опыт</div>
          <h2 className="page__title_main page__title-h2 page_bold">
            Мой опыт
          </h2>
        </div>
        <div className="experience-count">
          <div className="experience-count__num">
            <span>{years}</span>
            <span>{textEnding(years, ["год", "года", "лет"])}</span>
          </div>

          <div className="experience-count__num">
            <span>{days}</span>
            <span>{textEnding(days, ["день", "дня", "дней"])}</span>
          </div>
          <div className="experience-count__num">
            <span>{hours}</span>
            <span>{textEnding(hours, ["час", "часа", "часов"])}</span>
          </div>
          <div className="experience-count__num">
            <span>{zeroPad(minutes)}</span>
            <span>{textEnding(minutes, ["минута", "минуты", "минут"])}</span>
          </div>
          <div className="experience-count__num">
            <span>{zeroPad(seconds)}</span>

            <span>{textEnding(seconds, ["секунда", "секунды", "секунд"])}</span>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-count _hours">
          <div className="experience-count__num">
            <span>~ 20 000</span>
          </div>
        </div>
        <div className="page__title page_transform-uppercase page_text-center">
          <h2 className=" page__title-h2 page_bold">
            <span className="color-violet">Часов</span> профессионализма
          </h2>
        </div>
      </section>
    </section>
  );
};

export { ExperienceCount };
