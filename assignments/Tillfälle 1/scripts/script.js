let foo = 0;
let bar = 0;

let divide =  foo / bar;
console.log(divide);

if (divide != Number) {
    alert("You can't divide us!");
};

const theButton = document.getElementbyId("theButton");

theButton.addEventListener("click", function(e) {
    console.log("divide")
})

