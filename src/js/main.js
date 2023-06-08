import { changeHeaderColor } from "./header";
import { countdown } from "./countdown";
import { scrollTo } from "./utils";

const countdownContainer = document.querySelector("#countdown");
const scrollButtons = document.querySelectorAll('.js-scroll')

const DOMLoaded = () => {
  changeHeaderColor();
  
  scrollButtons.forEach(button => button.addEventListener('click', scrollTo))

  if (countdownContainer) {
    const countdownFinish = countdownContainer.getAttribute(
      "data-countdown-finish"
    );

    countdown(countdownFinish);
  }
};

const onScroll = (event) => {
  changeHeaderColor();
};

document.addEventListener("DOMContentLoaded", DOMLoaded);
document.addEventListener("scroll", onScroll);
