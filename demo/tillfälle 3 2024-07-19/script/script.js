//3 ARRAYER

let alrik;

alrik = 5;

let alrik2;
//alrik2 är en array nu, innehåller flera element
//index    0     1     2    3
alrik2 = [ 5 ,22, "hej", true, 111,"!"  ]  // altGr +8 eller  alt + ctrl + 8 [

alrik2[4] = false //lägga till 4
// sämre tekniker
alrik2[4] = undefined //lägga till undefined
// sämre tekniker
alrik2[19] = false //går att skippa , då skapas tomma index emellan


alrik2.push(5) // lägg till på slutet
alrik2.pop() // ta bort från slutet 
alrik2.unshift(111) // lägg till på början av arrayen
alrik2.shift() //tarbort på början av arrayen 
console.log(alrik2);

alrik2.sort()
alrik2.reverse()

console.log(alrik2);

let queue = ["Maja","Johanna","Alrik", "Hans"]
queue.sort()
queue.reverse()

//Konkatination för arrayer
//alrik2=alrik2.concat(  [1,2,3,true,"ALRIK"] )

console.log(queue[0])
console.log(queue[1])
console.log(queue[2])
console.log(queue[3])




// 5 Loopar
let count = 0
while (  count < 10 )
{
    console.log("whileloop "+ count);
    count = count + 1 // öka med 1
   // count += 1  // öka med 1
}


for ( let count = 0; count < 10;  count += 1  ) {
  console.log("forloop "+ count);
}


document.getElementById("queueDisplay")
.innerText = ""  // tilldelar text med tomt...tömmer p taggen

let i = 0
while (  i < 4 )
{
    document.getElementById("queueDisplay")
    .innerText += "köplats: "+ (i+1) + " " + queue[i]+"\n"

    console.log( i );
    console.log(queue[i]);
    i = i + 1
}



 






