import "./card.css";
import "../global-styles/global.css";
import { createButton } from "../button/button";
import { createHeading } from "../heading/heading";
import { createParagraph } from "../paragraph/paragraph";
import { createImage } from "../image/image";

export function createCard(image, title, para, buttonTitle) {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	const cardImage = createImage(image);
	const cardTitle = createHeading(title, 3);
	const cardPara = createParagraph(para);
	const cardButton = createButton(buttonTitle);
	cardDiv.append(cardImage, cardTitle, cardPara, cardButton);
	return cardDiv;
}
