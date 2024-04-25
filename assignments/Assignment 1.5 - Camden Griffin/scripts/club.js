document.getElementById("enterBtn").addEventListener("click",  ()=> {
    age = parseFloat(document.getElementById("age").value)
    vip = document.getElementById("VIP").checked; // ej VIP små bokstäver enligt protocoll

    if (age >= 18 && vip) //man kan skkippa {  } för en kod
        alert("You are a very important person. Welcome in!");
    else if (age < 18 && vip) // inte age <= 18
        alert("I'll let you in. But keep it a secret, okay?");
    else if (age >= 18) 
        alert("You are now vip! Enjoy your stay.");
    else 
        alert("You are not old enough to enter. Get outta here!");
    
});