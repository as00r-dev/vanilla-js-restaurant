import "./button.css";
import "../global-styles/global.css";

export function createButton(buttonName) {
	const buttonElem = document.createElement("button");
	buttonElem.textContent = buttonName;
	buttonElem.classList.add("button");
	return buttonElem;
}
