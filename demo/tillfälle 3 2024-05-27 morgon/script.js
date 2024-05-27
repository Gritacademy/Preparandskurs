// flera varaibler i en rad
//4) arrayer
let foo = 123
foo = 555

// index       0    1     2    3
let lista  = [123,"hej",true, 888]
//length antal saker/element i arrayen
lista[0] = 555
//lista = 555
lista.length // ger ett nummer baserat på antal element
"hejsan".length  // funkar på strings också

lista[6] = true

lista.push(false) //lägger in på slutet av arrayen, behöver ej skriva vilken index siffra
lista.unshift(false) //lägger in  i av arrayen början

lista.pop() // tar bort från slutet
lista.shift() // tar bort från  början


lista = ["Rebecca","Lukas","Niklas","Ali"]
lista.sort()
lista.reverse()


lista.findIndex
const namelength = (element) => element.length <= 5;

console.log(foo);
console.log(lista);


let user1Password="monkey!2024"
let user1username="Timearchitect"
let user1email="alrik_he@hotmail.com"

let user1 = ["timearchitect","monkey!2024","alrik_he@hotmail.com"]


// 4) if satser, switch
let age = 63
if ( age == 63 ) // pension 
    console.log("pension");
else if( age == 20) // alkohol
    console.log("systemet");    
else if(age == 18) // myndig
    console.log("vuxen");
else if(age == 15)
    console.log("byxmyndig");
else 
    console.log("inget speciellt i denna åldern");


switch(age){
case 63:  // pension 
    console.log("pension");
break;
case 20: // alkohol
    console.log("systemet");    
break;
case 18: // myndig
    console.log("vuxen");
break;
case 15:
    console.log("byxmyndig");
break;
default: 
    console.log("inget speciellt i denna åldern");
}


// 6) loopar
// när den är sant så loopar den förevigt, ha ej liveserver på
// vid falsk så slutar den
/* 
let count = 10 // börjar
while ( count > 0) { // gränsen
    console.log("while loop "+ count);
    count--  // ändra
} */


let count = 0 // börjar
while ( count<3) { // gränsen
    console.log("while loop "+ count);
    count++ // ändra
}

// do while
count = 0
do{ // gränsen
    console.log("do while loop "+ count);
    count++ // ändra
}
while ( count<3) 



// for loop
 
for( let count = 0;   count<3;  count++  ){
    console.log("for loop "+ count);
}

let queue = ["Rebecca","Lukas","Niklas","Alrik"]


let i = 0
while ( i < queue.length) {
    document.getElementById('container').innerHTML +=
    queue[i]+ ' är på köplats: '+ (i+1) +' <br>'
    i++
}


function deleteFromQueue() {
    // rensa container med namnen
    document.getElementById('container').innerHTML = ''

    //tar bort första
    queue.shift( )

    //loopar igenom arrayen och displayar på innerhtml på containern
    for (let i = 0; i < queue.length; i++) 
        document.getElementById('container').innerHTML +=
        queue[i]+ ' är på köplats: '+ (i+1) +' <br>'
}