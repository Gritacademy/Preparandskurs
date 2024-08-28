//Create variables foo & bar both assigned to 0
let foo = 0
let bar = 0


// Perform division
let result = foo / bar

// Check if the result is not a number (NaN) or if bar is 0
if (isNaN(result) || bar == 0) {
    alert("You can't divide u")
} else {
    console.log("Result:", result)
}