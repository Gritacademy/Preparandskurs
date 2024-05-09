

function checkAge()
{ 
    vip = document.getElementById("vip").checked   //Jävla piss checkbox ska vara .checked
    age = document.getElementById("age").value
    
    if(vip)alert("Welcome in my best VIP customer :)")   
    else if(age >= 18)alert("Access granted")   
    else alert("Access denied")

    /* Ville se hur mycket man kunde krympa koden. 

    Gammal kod:

    if (vip)
        {
            alert("Welcome in my best VIP customer :)")   
        } 

    else if (age >= 18)
        {
            alert("Access granted")
        }

    else 
        {
            alert("Access denied")
        }
    */
}