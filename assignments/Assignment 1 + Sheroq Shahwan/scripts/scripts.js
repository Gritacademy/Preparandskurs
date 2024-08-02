let foo = 0 // variabel
let bar = 0 // variabel
let result = foo / bar // variabel som innehåller matematisk ekvation

function myFunction(){ // funktion som körs när man trycker på knappen
    console.log("divide!") // vi skriver ett meddelande till konsollen
    if(isNaN(result)){ // här kontrollerar vi ifall result är en siffra, i det här fallet så är det bara 0 / 0 som kan vara NaN
       alert("You cant divide us!") // här skriver vi ut meddelandet i en pop-up 
    }
}
