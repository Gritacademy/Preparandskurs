let vip = true
let age = 17

/* if (age >= 17 && vip == true)
    {console.log('Access Granted')}

else {console.log('Access Denied')}


if (age >= 17) {
    console.log(true);
}
else {
    console.log(false);
}
 */
if (vip) {
    // denna funkar
    console.log('Welcome in my best VIP customer')
} else if (age >= 17) {
    console.log(true)
} else {
    console.log(false)
}

/* if (vip)  // utan curly brackets
    console.log('Welcome in my best VIP customer')
else if (age >= 17) 
    alert('Access Granted')
else 
    alert('Access Denied') */
