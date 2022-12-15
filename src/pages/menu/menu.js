import "./menu.css";
import "../../components/global-styles/global.css";
import { createHeading } from "../../components/heading/heading";
import { createImage } from "../../components/image/image";
import { createMenuItem } from "../../components/menu--item/menu-item";

export function createMenuPage(headingTitle) {
	const main = document.createElement("main");
	main.classList.add("menu-main");
	const menuSection = document.createElement("section");
	menuSection.classList.add("menu");
	const container = document.createElement("div");
	container.classList.add("container");
	const heading = createHeading(headingTitle, 2);
	const flexContainer = document.createElement("div");
	flexContainer.classList.add("flex");
	const colOne = document.createElement("div");
	colOne.classList.add("col");
	const image = createImage(
		"/src/assets/images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg"
	);
	colOne.appendChild(image);
	flexContainer.appendChild(colOne);
	const colTwo = document.createElement("div");
	colTwo.classList.add("col");
	colTwo.classList.add("flex");
	const menuItems = [
		"Ice Cream",
		"Sundae",
		"Popsicle",
		"Butterscotch",
		"Vanilla",
		"Lorem ipsum",
		"Lorem ipsum",
		"Lorem ipsum",
		"Lorem ipsum",
		"Lorem ipsum",
		"Lorem ipsum",
		"Lorem ipsum",
	];
	menuItems.forEach((item) => {
		colTwo.appendChild(createMenuItem(item));
	});
	flexContainer.appendChild(colTwo);
	container.append(heading, flexContainer);
	menuSection.appendChild(container);
	main.appendChild(menuSection);
	return main;
}
