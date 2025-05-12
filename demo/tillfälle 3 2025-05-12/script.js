// Arrayer

let foo = 5
foo = 10
console.log("Variabel: ", foo);

// index     0    1     2      3        4
let list = [ 5 , "hej", true , "Alrik", 999]
list [0] = 10
//list[10] = "HEJSAN"  lägga in på index 10

//list = 10
// metoder( saker... )

list.push("Bianca")  // lagt in "bianca" på slutet av arrayn
list.unshift("Mohammed")// lagt in "Mohammed" på början av arrayn
list.pop() // tar bort en sak på slutet 
list.shift() // tar bort en sak på från början

queue = [ "Mohammed","Hanna","Oligerta","Anwer","Latif","Emmie","Josephine","Robin", "Alrik"]
queue.sort()
queue.reverse()
queue.join()

console.log("ARRAY: ", list);


// Loopar 5    
// while loop
// for loop 

if(true){
   console.log("YES");
} 

/*let count = 10
while (count > 0 ) {
    console.log("LOOP: " + count);
    count = count - 1 
}*/
let x = 0
while (x < 3) {
    console.log("x: " + x);
   // x = x + 1
   // x += 1
   x ++     // öka med 1
}


for (let x = 0; x < 3;   x++) {
        console.log("x: " + x);   
}


display();

console.log("VIDARE....");

function display() {
    document.getElementById("container").innerHTML= "" //rensar
    let count = 0;
    while (count < queue.length ) {
        // console.log(queue[count]);
        //document.write("köplats: " + count +  "<br>");
        document.getElementById("container").innerHTML
            += ("Köplats: " + (count + 1) + " sitter " + queue[count] + "<br>");

        console.log("LOOP: " + count);
        count = count + 1;
    }
}

function addPerson( ) {
    queue.push( document.getElementById('inputName').value)
    display()
}

