document.getElementById("enterBtn").addEventListener("click", function() {
    let age, vip
    age = parseInt(document.getElementById("age").value)
    vip = document.getElementById("vip").checked

    if(age >=18){
        alert("Access granted")
        if(vip){
            alert("Welcome in my best VIP customer :")
        }
    }else{
        alert("Access denied")
    }

});