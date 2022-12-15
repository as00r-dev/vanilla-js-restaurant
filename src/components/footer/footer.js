// <!-- footer -->
// <footer class="flex">
//        <div class="container">Made with Love by as00r for TOP</div>
// </footer>

import "./card.css";
import "../global-styles/global.css";

export function createFooter(text) {
	const footer = document.createElement("footer");
	const container = document.createElement("div");
	container.classList.add("container");
	container.textContent = text;
	footer.appendChild(container);
	return footer;
}
