/* var foo = 'You cant'
var bar = 'Divide us!'
// foo = 0 ; bar = 0   ska det vara
console.log(foo)
console.log(bar) */

function btnPressed() {
    let foo = 0, bar = 0
    let produkt = foo/bar
    // foo = 0 ; bar = 0   ska det vara
    if( isNaN(produkt))
        console.log("you cant divide us!!!")
    else 
        console.log(produkt);
}
