import homeImg from "./images/home.jpg";
import "./style.css";

function home() {
    const content = document.querySelector("#content");
    content.textContent = "";
    
    const title = document.createElement("h1");
    title.textContent = "Restaurant Page";
    title.classList.add("title");
    content.appendChild(title);

    const img = document.createElement("img");
    img.src = homeImg;
    img.classList.add("img")
    content.appendChild(img);

    const subtitle = document.createElement("h2");
    subtitle.textContent = "People who love to eat are always the best people";
    subtitle.classList.add("subtitle")
    content.appendChild(subtitle)
}

export default home;