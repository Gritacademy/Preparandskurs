let vip = true;
let age = 18;

if (age >= 18 && vip == false) {
  console.log("vuxen");
  alert("Access granted");
} 

if (age < 18 && vip == false) {
  console.log('mindreårig');
  alert("Access denied");
}

if (age < 18 && vip == true) {
  console.log('mindreårig vip');
  alert("Welcome in my best VIP customer >:)");
}

if (age >= 18 && vip == true) {
  console.log('vuxen vip');
  alert("Welcome in my best VIP customer >:)");
}
