import "./heading.css";
import "../global-styles/global.css";

export function createHeading(text, type) {
	const h = document.createElement(`h${type}`);
	h.textContent = text;
	return h;
}
