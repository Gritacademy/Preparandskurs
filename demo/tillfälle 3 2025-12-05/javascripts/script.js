let age = 20

// exakta värden
if(age == 18) 
    console.log("myndig");
else if(age == 20)
    console.log("systemet");
else if(age == 40) 
    console.log("halvägs där");
else if(age == 67)
    console.log("pension");
else 
    console.log("ingen speciell ålder");
    
// kan ej ha > 

switch (age){
    case 18:
        console.log("myndig SWITCH");
    break;
    case 20:
        console.log("systemet SWITCH");
    break;
    case 40:
        console.log("halvägs där SWITCH");
    break;
    case 67:
        console.log("pension SWITCH");
    break;
    default:
        console.log("ingen speciell ålder SWITCH");
}
    


// 3) ARRAYER

let foo = "Hejsan"
foo = "Tjenare"

// index      0        1      2      3      4      5
let lista = ["hejsan", true , 5 , "!HEJ",false, "telia",11,"01"]
lista[0] = "Tjenare"

//byta plats på true & false
let temp = lista[1]   // temporärt lagra true
lista[1] = lista[4]   // sätt false på index 1
lista[4] = temp       // sätt true på index 4 med temp

lista[10] = "Calle"

console.log(lista[9]); //skriver ut index 9  är undefined om den är tom

lista.push("Nathalie") // lägger till på slutet behöver ej veta längden
lista.unshift("Liam") // lägger till i början

lista.pop() //tarbort från slutet 
lista.shift() //tarbort från början 


lista.sort() //sorterar alphabetisk ordning
lista.reverse()


//* extra

lista.concat([1,2,3])


// längden är antal element/värden
// hovra över metoderna för att se beskrivningen på den



let queue = ["Liam","Albin","Linnea","Natalie","Ramab","Oscar","Eva","Martin"]

//document.writeln(queue[0])
let h3DOM = document.getElementById("plats")


let i = 0
while ( i < 7) {
    h3DOM.innerHTML += queue[i] +" är på köplats " + (i+1) + "<br>"
    i++
}

document.getElementsByTagName("button")[1].onclick = ()=>{  // next tarbort i början
    queue.shift()
    //alert("NEXT")
    h3DOM.innerHTML = ""
    let i = 0
    while ( i < queue.length) {
        h3DOM.innerHTML += queue[i] +" är på köplats " + (i+1) + "<br>"
        i++
    }

}

document.getElementsByTagName("button")[0].onclick = ()=>{  // add button
queue.push( document.getElementById("nameInput").value )

    h3DOM.innerHTML = ""
    let i = 0
    while ( i < queue.length) {
        h3DOM.innerHTML += queue[i] +" är på köplats " + (i+1) + "<br>"
        i++
    }

}

/*
h3DOM.innerHTML += queue[0] + "<br>"
h3DOM.innerHTML += queue[1] + "<br>"
h3DOM.innerHTML += queue[2] + "<br>"
h3DOM.innerHTML += queue[3] + "<br>"
h3DOM.innerHTML += queue[4] + "<br>"
h3DOM.innerHTML += queue[5] + "<br>"
h3DOM.innerHTML += queue[6] + "<br>"
h3DOM.innerHTML += queue[7] + "<br>"
*/
//plus
// x= x+1
// x += 1 
// x++

//minus
// x= x-1
// x -= 1 
// x--

//multi divi
// x *= 1
// x /= 1


console.log(lista);


if (true) {
    //körs en gång sant kod  
} 


let count = 20

while (count >= 10)
{   //repeterar den koden här
    console.log("While LOOP: " + count);  
    count -= 1 // ökar count med 1
}


/*
//for loop har samma saker
for( let count = 0;   count < 3;   count += 1 )
{
    console.log("fOr LOOP: " + count)
}
*/
