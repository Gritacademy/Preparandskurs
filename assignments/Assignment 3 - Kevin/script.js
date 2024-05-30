// Assignment 3a

function charRemove(text = "This code sucks", character = "s") {
    newText = text.split(character).join("");
    console.log(newText)
}

charRemove();



// Assignement 3b

let array = ["Gustav", true];
let cat_info = {
  name: "Gustav",
  alive: true,
};

function catName() {
  alert(array[0]);
}
