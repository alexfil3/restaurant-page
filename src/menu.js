import burgerImg from "./images/burger.jpg";
import friesImg from "./images/fries.jpg";
import breadImg from "./images/bread.jpg";
import cocaColaImg from "./images/coca-cola.jpg";
import meatImg from "./images/meat.jpg";
import sushiImg from "./images/sushi.jpg";
import "./style.css";

const cards = [
    {
        name: "Burger",
        description: "A burger is a patty of ground beef grilled and placed between two halves of a bun.",
        img: burgerImg,
        price: "3$",
    },
    {
        name: "Fries",
        description: "French fries, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips.",
        img: friesImg,
        price: "1.50$",
    },
    {
        name: "Bread",
        description: "Bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented.",
        img: breadImg,
        price: "1$",
    },
    {
        name: "Coca-cola",
        description: "Coca-Cola, a sweetened carbonated beverage that is a cultural institution in the United States and a global symbol of American tastes.",
        img: cocaColaImg,
        price: "1$",
    },
    {
        name: "Meat",
        description: "Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments.",
        img: meatImg,
        price: "4$",
    },
    {
        name: "Sushi",
        description: "Sushi is a Japanese dish that features medium-grained rice cooked in vinegar, served with raw or cooked seafood and a variety of toppings or fillings.",
        img: sushiImg,
        price: "4$",
    },
]

function menu() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

    for (let menuItem of cards) {
        const div = document.createElement("div");
        div.classList.add("card")

        const imgWrapper = document.createElement("div")
        imgWrapper.classList.add("img-wrapper")
        const itemImg = document.createElement("img")
        itemImg.src = menuItem.img;
        imgWrapper.appendChild(itemImg)
        div.appendChild(imgWrapper);

        const itemName = document.createElement("h3");
        itemName.textContent = menuItem.name;
        itemName.classList.add("item-name")
        div.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = menuItem.description;
        itemDescription.classList.add("description")
        div.appendChild(itemDescription)

        const itemPrice = document.createElement("p");
        itemPrice.textContent = menuItem.price;
        div.appendChild(itemPrice)

        wrapper.appendChild(div)
    }

    content.appendChild(wrapper)
}

export default menu;