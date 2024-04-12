/* let age = 17
let vip = true */

let age = 17,vip = true // ni kan stacka deklaration med tilldelning så här
/* 
alertbox = "Access granted"
alertbox1 = "Access denied"
alertbox2 = "Welcome in my best VIP customer :)"
 */


//checkbox = vip;

/* function checked() {
// flytta koden
} */
function enterBtn() {
   /*  if (age >= 18) {
        alert("Access granted")
      } else if (age < 18) {
        alert("Access denied")
      }

 */
      age = document.getElementById("age").value // läser från input sedan tilldelar
      vip = document.getElementById("checked").checked 
      console.log(age,vip)
      if (vip == true) 
        alert("Welcome in my best VIP customer :)")
      else if (age >= 18) 
        alert("Access granted")
      else  
        alert("Access denied")
      
}




