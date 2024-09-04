import home from "./home";
import menu from "./menu";
import about from "./about";
import "./style.css";

home()

const nav = document.querySelector(".nav");

nav.addEventListener("click", onClick)

function onClick(e) {
    const page = e.target.id

    switch (page) {
        case "home":
            home();
            break;
        case "menu":
            menu();
            break;
        case "about":
            about();
            break;
        default:
            break;
    } 
}