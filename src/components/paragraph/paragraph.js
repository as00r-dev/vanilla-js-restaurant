import "./paragraph.css";
import "../global-styles/global.css";

export function createParagraph(text) {
	const p = document.createElement("p");
	p.textContent = text;
	return p;
}
