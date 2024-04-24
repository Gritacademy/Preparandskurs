let foo = 0;
let bar = 0;

function divideNumbers(a, b) {
    let input1 = parseInt(document.getElementById("number1").value);
    let input2 = parseInt(document.getElementById("number2").value);
    if (input1 === 0) {
        return NaN;
    } else {
        return input1 / input2;
    }

}

document.getElementById("divideButton").addEventListener("click", function() {
    console.log("Division");
    let result = divideNumbers(foo, bar);
    if (isNaN(result)) {
        alert("You can't divide us!");
    } else {
        console.log("Result:", result);
    }
});
