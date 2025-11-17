/* 
let age = 18;
    
if( age == 18 )
    console.log("Vuxen")
else if( age == 20 )
    console.log("Systembolaget")
else if( age == 67 )
    console.log("Penssion")
else 
  console.log("ingen speciell ålder..")
//-------------------
age = 18;
    
switch( age ) {   //bra vid flera jämnförelser för exakta värden
  case 18:
    console.log("Vuxen")
break;
 case 20:
    console.log("Systembolaget")
break;
 case 67:
    console.log("Penssion")
break;
  default:
  console.log("ingen speciell ålder..")
} */

//4) arrayer
// en hylla med lådor, lådorna har nummer på sig för att veta vilken låda som är vilken

let foo = 5
foo = 10

// index      0    1        2         3 
let alrik = [5, true, undefined, "hejsan"]
alrik[0] = 10
alrik[2] = "tjenare"   // undefined till "tjenare"
alrik[4] = 88
alrik[10] = "zed"
alrik[11] = "Zed"   // stor bokstav kolla ordningen: https://ss64.com/ascii.html
//lista = 99 // blir till en vanlig variabel pga tilldelningen


let queue = ["Salle", "Hamdi", "Alice", "Teodor", "Isabelle"]
queue.sort()
queue.reverse()
queue.push("Olle") // lägger till slutet
queue.unshift("Farida") // lägger i början
queue.pop() // tabort på slutet
queue.shift() // tabort i början

queue.concat() // sätter ihop arrayer
queue = queue.concat(["jonathan", "Alrik"])  // ändrar arrayen till den ihopsatta
//queue.fill( true , 2 , 6) // * fyller i värden i arrayen

/* 
console.log(queue.includes("Hamdi")); // ger bara om det finns eller ej
console.log(queue.indexOf("Hamdi")); // get index när den matchar
 */

console.log("hejsan jag heter Alrik")

let nextBtn = document.getElementById("nextBtn")  //leta upp next knapp via id "nextBtn"
nextBtn.addEventListener('click', () => {
    queue.shift()
    updateScreen()
})

let addBtn = document.getElementById("addBtn")  //leta upp läggtill knapp via id "addBtn"
addBtn.addEventListener('click', () => {
    queue.push(document.getElementById('namn').value);
    updateScreen();
})


function updateScreen() {   // uppdatera skärmen genom att skriva upp raderna baserat på queue
    let pDOM = document.getElementById("platser")
    pDOM.innerHTML = "" // sätt innehållet till tom string /rensa content 
    let i = 0
    while (i < queue.length) {
        pDOM.innerHTML += "  köplats " + (i + 1) + "  " + queue[i] + "<br>"
        i += 1
    }
}

updateScreen() // first time
/* pDOM.innerHTML ="  köplats 1: " + queue[0] + "<br>"
pDOM.innerHTML +="  köplats 2: " + queue[1] + "<br>"
pDOM.innerHTML +="  köplats 3: " + queue[2] + "<br>"
pDOM.innerHTML +="  köplats 4: " + queue[3] + "<br>"
pDOM.innerHTML +="  köplats 5: " + queue[4] + "<br>"
pDOM.innerHTML +="  köplats 6: " + queue[5] + "<br>"
pDOM.innerHTML +="  köplats 7: " + queue[6] + "<br>"

 */
/* 6
let x = 0 
x = x + 1  // öka med 1 
x += 1     // öka med 1 förkortning
x ++       // öka x med bara 1

x += 2    // öka x ( addera med 2 & tilldela det tillbaka till x)
x -= 2    // redusera x ( subtrakera med 2 & tilldela det tillbaka till x)
x *= 2    // dubbla x ( multiplicera med 2 & tilldela det tillbaka till x)
x /= 2    // halvera x ( dividera med 2 & tilldela det tillbaka till x)
 */

/* Man kan ha variabler i arrayer , man tar alltid deras värden
let first = "Alrik"
let after = "He"

let human = [ first , after]  */

//5)  Loopar
//repeterar

/* if (true) {
   console.log("YES");
}*/

console.log(foo);
console.log(queue);


/* let count = 0  
while (count <= 100) {
    console.log("loop:  "+ count);
    //pDOM.innerHTML += " "+count+' <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/120px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg" alt="">'
    count += 1
}  */


/* count = 10  
while (count >= 0) {
    console.log("loop:  "+ count);
    count -= 1
}  */




// for 10 loopar
for (let count = 10; count <= 10; count++) {
    console.log("for loop:  " + count);
}

