const button = document.querySelector(".header__button");
const menu = document.querySelector(".menu");
const buttonRows = document.querySelectorAll(".header__button-row");

export const greeting = () => {
  button.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    buttonRows.forEach((i) => {
      i.classList.toggle("header__button-row--open");
    });
  });
};
