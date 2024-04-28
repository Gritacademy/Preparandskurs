let vip = false; // jag ger inte vip något värde, säger bara att jag har deklarerat en variabel som heter vip
let age = 17;

if (vip == true) {
  //Du är en kändis, du får alltid komma in
  alert("Welcome in my best VIP customer");
} else {
  // Du är en vanlig människa
  if (age < 18) {
    alert("Access denied");
  }
  else {
    alert("Acess granted")
  }
}
