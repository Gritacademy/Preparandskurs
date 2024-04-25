document.getElementById("enterBtn").addEventListener("click",  ()=> {
    age = parseFloat(document.getElementById("age").value)
    VIP = document.getElementById("VIP").checked;

    if (age >= 18 && VIP) {
        alert("You are a very important person. Welcome in!");
    } else if (age <= 18 && VIP) {
        alert("I'll let you in. But keep it a secret, okay?");
    } else if (age >= 18) {
        alert("You are now VIP! Enjoy your stay.");
    } else {
        alert("You are not old enough to enter. Get outta here!");
    }
});