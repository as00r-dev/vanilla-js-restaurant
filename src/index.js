import { createHomePage } from "./pages/home/home";
import { createMenuPage } from "./pages/menu/menu";
import { createContactPage } from "./pages/contact/contact";
import { createHeader } from "./components/header/header";
import { createFooter } from "./components/footer/footer";

const content = document.querySelector(".content");

content.append(
	createHeader("Creamy Clouds"),
	createContactPage(),
	createFooter("Made with love by as00r for TOP")
);
