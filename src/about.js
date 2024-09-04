import "./style.css";

const workers = [
    {
        post: "Chef",
        name: "Jhon",
        email: "jhon@mail.com",
    },
    {
        post: "Manager",
        name: "Liza",
        email: "liza@mail.com",
    },
    {
        post: "Waiter",
        name: "Mark",
        email: "mark@mail.com",
    },
]

function about() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const div = document.createElement("div");
    div.classList.add("about");

    for (let worker of workers) {
        const card = document.createElement("div");
        card.classList.add("worker-wrapper");

        const post = document.createElement("p");
        post.textContent = worker.post;
        card.appendChild(post);

        const name = document.createElement("p");
        name.textContent = worker.name;
        card.appendChild(name);

        const email = document.createElement("p");
        email.textContent = worker.email;
        card.appendChild(email);

        div.appendChild(card)
    }

    content.appendChild(div)
}

export default about;