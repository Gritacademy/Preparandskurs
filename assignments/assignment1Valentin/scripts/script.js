let foo =0
let bar =0
document.getElementById('divideBtn').addEventListener('click', function() {
    foo = parseFloat(document.getElementById('num1').value);
   bar = parseFloat(document.getElementById('num2').value);
   if (bar === 0) {
    alert("You can't divide us!");
    return;

}
let result = foo / bar;
if (isNaN(result)) {
    alert("You cant divide us!“");
    return;
  }
  console.log("divide");
  console.log(result);

});