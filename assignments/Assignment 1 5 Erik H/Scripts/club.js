/*let vip = false;
let age = 15;*/

var ageInput = document.getElementById("age");
var vipCheckbox = document.getElementById("vip");
var enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function () {
  var age = parseInt(ageInput.value);
  var vip = vipCheckbox.checked;

  if (vip == true) {
    alert("Welcome my best VIP customer :) ");
  } else {
    if (age >= 18) {
      alert("Access granted");
    } else {
      alert("Access denied");
    }
  }
});

/*if ( true ) {

  alert("Access granted");

} else {

    alert("Access denied")

}*/
 /*   let count = 0
        while ( count < 20 ) {
        count = count + 1
        console.log("LOOP: " + count)
 

    }
*/
