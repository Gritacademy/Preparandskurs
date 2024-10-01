const cat = {
    alive: true,
    name: "Gustav"
};

const button = document.createElement("button");
button.textContent = "Show Cat Info";
button.addEventListener("click", () => {
    const isAlive = Math.random() < 0.5;
    let message = "The cat's name is:" + cat.name + "and it is";
    message += isAlive ? "alive" : "not alive";
    alert(message);
});

document.body.appendChild(button);
