let age;
let vip;

alertbox = "Access granted";
alertbox1 = "Access denied";
alertbox2 = "Welcome in my best VIP customer :)";

age = 17;
vip = true;
//checkbox = vip;

function checked() {
  if (age >= 18) {
    alert(alertbox);
  }
  if (age < 18 && vip == true) {
    alert(alertbox2);
  }
}
function enterBtn() {
    if (age >= 18) {
        alert(alertbox);
      } else if (age < 18) {
        alert(alertbox1);
      }

}


