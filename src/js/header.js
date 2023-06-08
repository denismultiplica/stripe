export const changeHeaderColor = () => {
  const header = document.querySelector("#header");
  const logo = header.querySelector(".js-logo");
  const nav = header.querySelector("nav > ul");
  const button = header.querySelector(".js-button");
  const { height } = header.getBoundingClientRect();
  
  if (window.scrollY > height) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-white");
    logo.classList.remove("bg-light");
    logo.classList.add("bg-transparent");
    nav.classList.remove("[&>li>a]:text-white");
    nav.classList.add("[&>li>a]:text-dark");
    button.classList.remove(
      "bg-transparent",
      "hover:bg-white",
      "[&>span]:text-transparent",
      "[&>span]:bg-clip-text",
      "[&>span]:[background-image:var(--button-gradient)]"
    );
    button.classList.add(
      "text-white",
      "[background-image:var(--button-gradient)]",
      "opacity-90",
      "hover:opacity-100"
    );
  } else {
    header.classList.remove("bg-white");
    header.classList.add("bg-transparent");
    logo.classList.remove("bg-transparent");
    logo.classList.add("bg-light");
    nav.classList.remove("[&>li>a]:text-dark");
    nav.classList.add("[&>li>a]:text-white");
    button.classList.remove(
      "text-white",
      "[background-image:var(--button-gradient)]",
      "opacity-90",
      "hover:opacity-100"
    );
    button.classList.add(
      "bg-transparent",
      "hover:bg-white",
      "[&>span]:text-transparent",
      "[&>span]:bg-clip-text",
      "[&>span]:[background-image:var(--button-gradient)]"
    );
  }
};
