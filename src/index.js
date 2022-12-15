import { createHomePage } from "./pages/home/home";
import { createMenuPage } from "./pages/menu/menu";
import { createContactPage } from "./pages/contact/contact";
import { createHeader } from "./components/header/header";
import { createFooter } from "./components/footer/footer";

// content div
const content = document.querySelector(".content");

// header and footer
const header = createHeader("Creamy Clouds");
const footer = createFooter("Made with love by as00r for TOP");

// pages
const home = createHomePage();
const menu = createMenuPage("Our Selected Treats");
const contact = createContactPage();

// initial load
content.append(header, home, footer);

// tab navigation
const homeBtn = document.querySelector(".primary-navigation li:first-child a");
const menuBtn = document.querySelector(".primary-navigation li:nth-child(2) a");
const contactBtn = document.querySelector(
	".primary-navigation li:last-child a"
);

homeBtn.addEventListener("click", () => {
	content.innerHTML = "";
	content.append(header, home, footer);
});
menuBtn.addEventListener("click", () => {
	content.innerHTML = "";
	content.append(header, menu, footer);
});
contactBtn.addEventListener("click", () => {
	content.innerHTML = "";
	content.append(header, contact, footer);
});
