/* alert(divide)
document.write('You cant divide us')
foo = 0
bar = 0
let sum = null
foo = 'You cant'
bar = 'divide us!'
 */
function btnPressed() {
    let foo = 0
    let bar = 0
    let sum = foo / bar
    if (isNaN(sum)) 
        console.log('You cant divide us!')
    else 
        console.log(sum)
}
