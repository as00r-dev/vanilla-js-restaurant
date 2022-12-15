import "./home.css";
import "../../components/global-styles/global.css";
import { createHeading } from "../../components/heading/heading";
import { createParagraph } from "../../components/paragraph/paragraph";
import { createButton } from "../../components/button/button";
import { createCard } from "../../components/card/card";

export function createHomePage() {
	const main = document.createElement("main");
	const heroSection = _createHeroSection(
		"Lorem ipsum dolor sit.",
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde asperiores cum, saepe vitae nam omnis reiciendis dicta inventore",
		"Browse Menu"
	);
	const cardSection = _createCardSection("Lorem ipsum dolor sit");
	main.append(heroSection, cardSection);
	return main;
}

function _createHeroSection(headingText, paragraphText, buttonText) {
	const heroSection = document.createElement("section");
	heroSection.classList.add("hero");
	const container = document.createElement("div");
	container.classList.add("container");
	container.classList.add("flex");
	const colOne = document.createElement("div");
	colOne.classList.add("col");
	const colTwo = document.createElement("div");
	colTwo.classList.add("col");
	const heading = createHeading(headingText, 1);
	const para = createParagraph(paragraphText);
	const button = createButton(buttonText);
	colOne.append(heading, para, button);
	container.append(colOne, colTwo);
	heroSection.appendChild(container);
	return heroSection;
}

function _createCardSection(headingTitle) {
	const cardSection = document.createElement("section");
	cardSection.classList.add("cards");
	const container = document.createElement("div");
	container.classList.add("container");
	container.classList.add("flex");
	const heading = createHeading(headingTitle, 2);
	const flexContainer = document.createElement("div");
	flexContainer.classList.add("flex");
	const cardOne = createCard(
		"/src/assets/images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg",
		"Best Flavour",
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim officiis ipsam autem illum neque temporibus",
		"Know More"
	);
	const cardTwo = createCard(
		"/src/assets/images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg",
		"Best Color",
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim officiis ipsam autem illum neque temporibus",
		"Know More"
	);
	const cardThree = createCard(
		"/src/assets/images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg",
		"Best Flavour",
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim officiis ipsam autem illum neque temporibus",
		"Know More"
	);
	flexContainer.append(cardOne, cardTwo, cardThree);
	container.append(heading, flexContainer);
	cardSection.appendChild(container);
	return cardSection;
}
