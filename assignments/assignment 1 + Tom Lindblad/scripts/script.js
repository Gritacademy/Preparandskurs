let foo = 0
let bar = 0 // assign till 0

/* let sum = null; */

let sum = foo / bar

function divide() { //formatera + flyttade koder in till funktionen för att knappen kör denna
    if (isNaN(sum) || sum <= -0.01) {
        // är sum Nan eller sum är mindre än -0.1
        alert('You cant divide us!')
    } else {
        console.log(sum)
    }
    console.log('divide')
}
