// Deklarera en variabel som heter ålder och har värdet 17
// let age = 17 // Behöver inte det längre eftersom gjorde the optional 
let age 
let vip
//Funktion som körs som klickar på knappen 
function myFunction(){
    age = document.getElementById("numberInput").valueAsNumber // Det tar värdet på Element idet från numberInput 
    // console.log(age) // Hade det för att checka värdet 

    vip = document.getElementById("checkboxInput").checked // Det tar värdet på Element från checkboxInput
    // console.log(vip) // Hade det för att checka värdet 

    // If/else statment med alert
if (vip)
    {
        alert("Welcome in my best VIP customer :)")
    }
else 
    {
        if (age >= 18) {
            alert("Access granted")
        }
        else {
            alert("Access denied")
        }
    }
}