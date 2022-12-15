import "./image.css";
import "../global-styles/global.css";

export function createImage(url) {
	const img = document.createElement("div");
	img.classList.add("card-image");
	return img;
}
