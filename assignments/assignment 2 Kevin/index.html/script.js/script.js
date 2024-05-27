age = 17;
vip = Boolean;

let vip = document.getElementById('inputVip').checked
let age = document.getElementById('inputAge').valueAsNumber

if (vip) { alert ('Welcome to my best VIP costumer :)')
} else if (age >= 18) {
    alert('Access Granted')
} else {
    alert('Access Denied')
}
function enterBtn() {
    
}