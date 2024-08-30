document.getElementById('enterbtn').addEventListener('click', function() {
    const age = document.getElementById('age').value;
    const isVIP = document.getElementById('vip').checked;

    alert(`Age: {age}\nVIP: {isVIP ? 'Yes' : 'No'}`);
});


let age = 17;  // Initial value of age
let vip = false;  // Initial value of vip

document.getElementById('enterbtn').addEventListener('click', function() {
    // Reassign values from the input and checkbox to the variables
    age = parseInt(document.getElementById('age').value);
    vip = document.getElementById('vip').checked;

    // Check if the VIP checkbox is checked
    if (vip) {
        alert("Welcome in, my best VIP customer!");
    } else {
        // Check if the age is 18 or over
        if (age >= 18) {
            alert("Access granted");
        } else {
            alert("Access denied");
        }
    }
});


