import { createHomePage } from "./pages/home/home";
import { createHeader } from "./components/header/header";
import { createFooter } from "./components/footer/footer";

const content = document.querySelector(".content");

content.append(
	createHeader("Creamy Clouds"),
	createHomePage(),
	createFooter("Made with love by as00r for TOP")
);
