let age = 16 
let vip = true // går att ha utan semicolon

if(vip){ // vip == true är samma som bara vip
    console.log("Welcome in my best VIP customer :)")
    alert("Welcome in my best VIP customer :)")
}else{
    console.log("Not VIP")
    if (age >= 18){
        console.log("Access granted")
        alert("Access granted")
    }else{
        console.log("access denied")
        alert("Access denied")
    }
}
    