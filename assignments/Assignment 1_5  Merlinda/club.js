
let btn = document.createElement("button") // skapa btn tagg
btn.innerText="CLICK HERE!!!" // texten i btn
document.body.appendChild(btn) // lägg in till body

btn.style.backgroundColor="purple"

let vip = false
let age = 32


if (vip == true){
    alert("Welcome my best VIP customer :) ")
} else {
    if (   age >= 18  ) { //sant
        alert("Access granted")
     } else { // false koder
        alert("Access denied")
     }
}






