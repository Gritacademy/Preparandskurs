//4  arrayer 

let foo = 123
foo = 888

//  index      0     1      2
let lista = [ 123, "hej" , true , 1,"Merlinda" ] // altGr + 8 = [
lista[0] = 8
lista[1] = "tjena"

lista.push(   "Alrik" ) // lägger in på slutet av arrayen
lista.pop() // tarbort från slutet av arrayen

lista.sort() // sorterar enligt alfabetisk ordning
lista.reverse() // tvärtom

console.log(lista)

let queue= [ "Alrik", "Linda","Melinda","Lauri"]
// 5) loopar

// när det är sant () repeterar
// när der är falskt så stoppar i ()
let count = 1

while ( count < 10 ) {
    console.log("WHILE LOOP " + count)

    count = count * 2 // multipliceras med 2
   // count *= 2      // multipliceras  med 2
} 

    /* 
    count = count + 1 // ökar med 1
    count += 1        // ökar med 1
    count ++          // ökar med 1
    */

for ( let count = 1;   count < 10;   count = count * 2 )
{
    console.log("FOR LOOP: " + count)
}
 
for ( let count = 0; count < queue.length; count++ )
    {
        document.write("köplats: " +(count+1) +" är "+ queue[count]+ "<br>")
    }

function add() {

    //queue.unshift("HASSAN")
    let namn = document.getElementsByTagName("input")[0].value
    queue.push(namn)

    for ( let count = 0; count < queue.length; count++ )
        {
            document.write("köplats: " +(count+1) +" är "+ queue[count]+ "<br>")
        }
}


    
    


