let foo = 0 , bar = 0

document.getElementById('divideBtn').addEventListener('click',  ()=> {
    foo = parseFloat(document.getElementById('num1').value)
    bar = parseFloat(document.getElementById('num2').value)
/*     if (bar === 0) {
        alert("You can't divide us!")
        return
    } */
    let result = foo / bar
    if (isNaN(result)) {
        alert('You cant divide us!“')
        return
    }
    console.log('divide',result)
})
