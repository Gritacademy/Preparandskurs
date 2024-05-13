
let age = 18

if(age == 18 ) 
    console.log("vuxen nu");
else if( age == 20)
    console.log("kan köpa alkohol");
else if( age == 63)
    console.log("tjänste pension");
else 
    console.log("ingen märkvärdig ålder");

   
/* //switch
switch (age) {

    case 18:
        console.log("vuxen nu");
    break;

    case 20:
        console.log("kan köpa alkohol");
    break;

    case 63:
        console.log("tjänste pension");
    break;

    default:
        console.log("ingen märkvärdig ålder");

} 
 */
let stars = 5
switch (stars) { // effektivare än else if men kan ej ha < > 

    case 5:
        document.write("⭐");
    case 4:
        document.write("⭐");
    case 3:
        document.write("⭐");
    case 2:
        document.write("⭐");
    case 1:
        document.write("⭐");
   
} 



let i = 10
while (i < 3)

{
    i++
    console.log("while "+i);
    break; // avslutar en loop
}


i = 10
do{
    i++
    console.log("do while: "+ i);
    break; // avslutar en loop
}

while (i < 3) 

console.log(i);



let queue = ["alrik","tom","Michaela"]
queue.pop()
//6) funktion / function

//hojstad (körs förre allt)
addition() // call, kalla/anropa på fuktionen addition kan vara en separat fil som är länkad och ändå är hojstad

function addition( ){ // define,definera en funktion/skapar en funktion
//return tal1 + tal2
    let tal1= document.getElementsByTagName('input')[0].valueAsNumber 
    let tal2= document.getElementsByTagName('input')[1].valueAsNumber 
    let sum =tal1+tal2
    console.log(sum)
    document.getElementById('summan').innerHTML=sum
}

document.getElementById("plusBtn").addEventListener("click", addition) // samma som onclick i html 

function subtracktion( tal1 , tal2) {
    return tal1 - tal2
}



//alert() // en funktion
//console.log(); // en metod (en funktion i ett object)



// 7) Objekt/ Object 

let foo = 1000000

//element 
// index       0         1       2          3
let array = [1000000 , "red", "yxgatan 5" , false]
// i ordning
array[0] = 2000000


// properties (namn/värde) (key/value) pair
// har förklarande beskrivning
let hus = { 
    sold:false,   
    color:"red",
    adress:"yxgatan 5",
    price:1000000 ,
    sell: function () {
        console.log("house is sold");
        hus.sold=true
    }
}
hus.price = 2000000
hus.sell()
console.log()

document.write("hejsan")
