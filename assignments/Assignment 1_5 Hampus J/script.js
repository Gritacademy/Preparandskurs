let age = 17;
let vip = true;

if (vip ) { // tekniskt sätt funkar det utan vip == true
  alert("Welcome in my best VIP customer :)");
} // ni glömde else här

if (age >= 18) {
  alert("Access granted");
} else {
  alert("Access denied");
}







// Fick ingen ordning på det här tyvärr. Om du har tid så visa gärna hur det ska gå till.


let entrBtn = document.getElementById("entrBtn")
 age = document.getElementById("Age").value;
 vip = document.getElementById("ViP").checked;



entrBtn.addEventListener("click", ()=>{

  if (vip) {
    alert("Welcome in my best VIP customer :)");
  } else
  if (age >= 18) {
    alert("Access granted");
  } else {
    alert("Access denied");
  }
  
})




