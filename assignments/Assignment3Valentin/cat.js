let cat = {
    alive: true,
    name: "Gustav"
}


function showCatStatus() {
    const randomNum = Math.random();
    cat.alive = randomNum < 0.5;
    let message
    if (cat.alive) {
        message = cat.name + " is alive!";
    } else {
        message = cat.name + " is not alive...";
    }
    alert(message)
}