import { homePage } from "./homePage.js";
import { menuPage } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";

const buttons = document.querySelector("nav");
const content = document.querySelector("#content");

homePage();

buttons.addEventListener("click", (e) => {
  content.innerText = "";

  switch (e.target.id) {
    case "home-button":
      homePage();
      break;
    case "menu-button":
      menuPage();
      break;
    case "about-button":
      aboutPage();
      break;
    default:
  }
});
