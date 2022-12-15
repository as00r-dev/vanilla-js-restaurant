import "./footer.css";
import "../global-styles/global.css";

export function createFooter(text) {
	const footer = document.createElement("footer");
	footer.classList.add("flex");
	const container = document.createElement("div");
	container.classList.add("container");
	container.textContent = text;
	footer.appendChild(container);
	return footer;
}
