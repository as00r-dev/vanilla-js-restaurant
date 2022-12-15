import "./contact.css";
import "../../components/card/card.css";
import "../../components/global-styles/global.css";
import { createHeading } from "../../components/heading/heading";
import { createParagraph } from "../../components/paragraph/paragraph";
import { createImage } from "../../components/image/image";

export function createContactPage() {
	const main = document.createElement("main");
	main.classList.add("menu-main");
	const contactSection = document.createElement("section");
	contactSection.classList.add("contact");
	main.append(contactSection);

	const container = document.createElement("div");
	container.classList.add("container");
	container.classList.add("flex");
	container.classList.add("card");
	contactSection.append(container);

	const colOne = document.createElement("div");
	colOne.classList.add("col");
	container.append(colOne);

	const heading = createHeading("Contact Us", 3);
	const flexContainerPhone = document.createElement("div");
	flexContainerPhone.classList.add("flex");
	const phoneLabel = document.createElement("div");
	phoneLabel.textContent = "Phone:";
	const phoneDiv = document.createElement("div");
	const number = createParagraph("");
	const a = document.createElement("a");
	a.href = "tel:1234567890";
	a.textContent = "1234567890";
	number.append(a);
	phoneDiv.append(number);
	flexContainerPhone.append(phoneLabel, phoneDiv);
	colOne.append(heading, flexContainerPhone);

	const flexContainerEmail = document.createElement("div");
	flexContainerEmail.classList.add("flex");
	const emailLabel = document.createElement("div");
	emailLabel.textContent = "Email:";
	const emailDiv = document.createElement("div");
	const email = createParagraph("");
	const a2 = document.createElement("a");
	a2.href = "mailto:xyz@company";
	a2.textContent = "xyz@company.com";
	email.append(a2);
	emailDiv.append(email);
	flexContainerEmail.append(emailLabel, emailDiv);
	colOne.append(flexContainerEmail);

	return main;
}
