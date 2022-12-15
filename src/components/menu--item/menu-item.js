// 				<div class="card flex">
// 					<div class="col">
// 						<div class="card-image"></div>
// 					</div>
// 					<div class="col">
// 						<h3>lorem ipsum</h3>
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 							Ipsum enim officiis ipsam autem illum neque temporibus
// 						</p>
// 						<button class="button">lorem ipsum</button>
// 					</div>
// 				</div>

import "./menu-item.css";
import "../global-styles/global.css";
import { createImage } from "../image/image";
import { createHeading } from "../heading/heading";
import { createParagraph } from "../paragraph/paragraph";
import { createButton } from "../button/button";

export function createMenuItem(headingText) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("flex");
	const colOne = document.createElement("div");
	colOne.classList.add("col");
	const image = createImage(
		"/src/assets/images/pexels-rakicevic-nenad-1262302.jpg"
	);
	colOne.appendChild(image);
	const colTwo = document.createElement("div");
	colTwo.classList.add("col");
	const heading = createHeading(headingText);
	const para = createParagraph(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum enim officiis ipsam autem illum neque temporibus"
	);
	const btn = createButton("Place Order");
	colTwo.append(heading, para, btn);
	card.append(colOne, colTwo);
	return card;
}
