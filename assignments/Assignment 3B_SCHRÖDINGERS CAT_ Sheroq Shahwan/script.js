let cat = {
    alive: true,
    name: "Gustav"
}

function showCatName() {
    let isAlive = Math.random() < 0.5  // Random tal mellan 0 & 1, kollar om det är mindre än 0.5

    // skapar meddelandet baserat på isAlive 
    let message
    if (isAlive) {
        message = cat.name + "and it´s alive"
    } else {
        message = cat.name + "and it´s not alive"
    }

    alert(message)
}

const button = document.getElementById("catButton")
button.addEventListener("click", showCatName)
