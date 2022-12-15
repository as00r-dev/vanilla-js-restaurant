import { createCard } from "./components/card/card";

const content = document.querySelector(".content");

content.appendChild(
	createCard(
		"/src/assets/images/pexels-jj-jordan-8380252.jpg",
		"Hello",
		"lorem ipsum afnal ",
		"click me"
	)
);
