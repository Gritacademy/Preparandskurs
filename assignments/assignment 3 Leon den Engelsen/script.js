let cat = {
    alive: true,
    name: 'Gustav',
}

function showCatName() {
    //alert("The cat's name: " + cat.name)
    console.log("The cat's name: " + cat.name)

    cat.alive = Math.random() > 0.5

    if (cat.alive)
       alert("The cat's name: " + cat.name + 'and its alive!!')
    else 
       alert("The cat's name: " + cat.name + 'and its dead!!')
}
