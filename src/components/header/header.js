import "./header.css";
import "../global-styles/global.css";

export function createHeader(text) {
	const header = document.createElement("header");
	const container = document.createElement("div");
	container.classList.add("container");
	container.classList.add("flex");
	const logo = document.createElement("div");
	logo.classList.add("logo");
	const logoSpan = document.createElement("span");
	logoSpan.textContent = text;
	logo.appendChild(logoSpan);
	const hamburger = document.createElement("button");
	hamburger.classList.add("hamburger");
	hamburger.setAttribute("aria-expanded", "false");
	hamburger.setAttribute("aria-controls", "primary-navigation");
	const hamburgerSpan = document.createElement("span");
	hamburgerSpan.classList.add("sr-only");
	hamburger.appendChild(hamburgerSpan);
	header.appendChild(container);
	const nav = document.createElement("nav");
	nav.setAttribute("data-visible", "false");
	const ul = document.createElement("ul");
	ul.id = "primary-navigation";
	ul.classList.add("primary-navigation");
	ul.classList.add("flex");
	const lItems = _createListElements(["Home", "Menu", "Contact"]);
	lItems.forEach((li) => {
		ul.appendChild(li);
	});
	nav.appendChild(ul);
	container.append(logo, hamburger, nav);
	header.appendChild(container);
	hamburger.addEventListener("click", () => {
		const isVisible = nav.getAttribute("data-visible");
		if (isVisible === "true") {
			nav.classList.add("transition");
			nav.setAttribute("data-visible", "false");
			hamburger.setAttribute("aria-expanded", "false");
		} else {
			nav.classList.add("transition");
			nav.setAttribute("data-visible", "true");
			hamburger.setAttribute("aria-expanded", "true");
		}
	});
	return header;
}

function _createListElements(names) {
	const liItems = [];
	names.forEach((name) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.textContent = name;
		li.appendChild(a);
		liItems.push(li);
	});
	return liItems;
}
