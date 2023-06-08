import { twoCharacters } from "./utils";

export const countdown = (countdownFinish) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");
  const finishDate = new Date(countdownFinish).getTime();

  setInterval(() => {
    const nowDate = new Date().getTime();
    const distance = finishDate - nowDate;
    const daysValue = Math.floor(distance / day);
    const hoursValue = Math.floor((distance % day) / hour);
    const minutesValue = Math.floor((distance % hour) / minute);
    const secondsValue = Math.floor((distance % minute) / second);

    days.innerHTML = twoCharacters(daysValue);
    hours.innerHTML = twoCharacters(hoursValue);
    minutes.innerHTML = twoCharacters(minutesValue);
    seconds.innerHTML = twoCharacters(secondsValue);
  }, 1000);
};
