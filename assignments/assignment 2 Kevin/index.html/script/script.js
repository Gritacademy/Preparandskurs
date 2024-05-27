
function enterBtn() {
    let vip = document.getElementById('inputVip').checked
    let age = document.getElementById('inputAge').valueAsNumber
  /*  age = 17;
    vip = true; */
    if (vip) 
         alert ('Welcome to my best VIP costumer :)')
    else if (age >= 18) 
        alert('Access Granted')
    else 
        alert('Access Denied')
    
                        
}