import "./style.css";

console.log("Hello");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
	const isVisible = nav.getAttribute("data-visible");
	if (isVisible === "true") {
		nav.classList.add("transition");
		nav.setAttribute("data-visible", "false");
		hamburger.setAttribute("aria-expanded", "false");
	} else {
		nav.classList.add("transition");
		nav.setAttribute("data-visible", "true");
		hamburger.setAttribute("aria-expanded", "true");
	}
});
