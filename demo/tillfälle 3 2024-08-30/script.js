// 4 arrayer 

let foo = 5 //skapa/ deklarerar en variabel som heter foo med 5
foo = 10   //lägga in/ tilldela foo med nummer 10  
//foo = [1,2,3,"Alrik"]

//index      0    1     2
let billy = [5 , "hej" , true ] // array
billy[0] = 10
//billy = 10

billy[3]  = 88
billy[10]  = 88


//console.log(billy);

let text = "hejsan"
//console.log(text.length); //visa antal bokstäver

text = ['h','e','j','s','a','n']

let queue = ["Elina","Albin","Rabia","Reebar","Alrik","henrik","Gustav"]
//queue.reverse()
//queue.sort()
//queue.push("Anna") // lägg till på slutet
//queue.pop() //tar bort från slutet
//queue.unshift("Anna") //lägg till i början
//queue.shift()//tar bort från början

//alert(123) // pausar programmet

//console.log(queue.length); //visar antal element



/* 
let first = "Elina"
let second ="Albin"
let third = "Rabia" 
*/



// 5 loopar 

//live server auto updaterar och uppdaterar ibland med oklar kod
// loopen kan gå för evigt

//while

if( true ){ // true kör den koden under
    console.log("hej")
} else  { // false kör else kod under
    console.log("YO")
}



//while
let count = 0
while (count < 10 ) { //repeterar om det är true i parentessen
    console.log("while: "+ count)
    count = count+ 1 // ökar med 1 / lägger till
} // false så stoppar den och går vidare


//while
count = 1
while (count < 10 ) { //repeterar om det är true i parentessen
    console.log("while: "+ count)
    count = count * 2 // ökar med 1 / lägger till
} // false så stoppar den och går vidare


console.log("vidare...")

count = count + 1 // manual öka med 1
count += 1  // förkortning öka med 1
count ++  // only + 1 
 //for

/* // ( variabel ;  condition ; ändring kod )
for (let count = 0; count < 10 ; count = count + 1 )  //repeterar om det är true i parentessen
    console.log("for: "+ count) // display
 */

 for(  let i = 0 ;  i < queue.length ; i++  )
    document.write("köplats: " + i + "  är " + queue[i] + "<br>")
 

// samma nedan

document.write("köplats: " + 0 + "  är " + queue[0] + "<br>")
document.write("köplats: " + 1 + "  är " + queue[1] + "<br>")
document.write("köplats: " + 2 + "  är " + queue[2] + "<br>")
document.write("köplats: " + 3 + "  är " + queue[3] + "<br>")
document.write("köplats: " + 4 + "  är " + queue[4] + "<br>")



