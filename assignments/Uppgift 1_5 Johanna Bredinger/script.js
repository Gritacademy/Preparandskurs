
let vip = false;

const myAge = document.getElementById("myAge")
const enterBtn = document.getElementById("enterBtn")
const ageElement = document.getElementById("ageElement")
const myVIP = document.getElementById("myVIP")


enterBtn.onclick = function(){
    age = myAge.value;
    age = Number(age);
    console.log(age,myVIP.checked);
    if(myVIP.checked){
        ageElement.numberContent = alert("Welcome in my best VIP custoner :)");
    }
    else if (age >= 18){
        ageElement.numberContent = alert("Acess granted");
    }
    else{
        ageElement.numberContent = alert("Acess denied");
    }
}