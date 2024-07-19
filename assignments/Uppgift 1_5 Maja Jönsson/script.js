const myAge = document.getElementById("myAge");
const enterBtn = document.getElementById("enterBtn");
const ageElement = document.getElementById("ageElement");
const myVip = document.getElementById("myVip");
const vipElement = document.getElementById("vipElement")


enterBtn.onclick = function(){

    age = myAge.value;
    age = Number(age);

    if(myVip.checked)
        vipElement.numberContent = alert("Welcome in my best VIP customer :)");
    else if (age >= 18)
            ageElement.numberContent = alert("Acess granted");
    else
        ageElement.numberContent = alert("Acess denied");
    
}


