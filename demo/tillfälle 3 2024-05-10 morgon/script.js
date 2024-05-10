console.log( "separat js kod");

//3) arrayer

let foo
foo = 5
foo = 10
//arrayer har ordning
let queue
// index   0     1     2    3
queue = [ "Tom" , "ANNa", "henrik", "hussam", "nils"]  // square bracket, fyrkants parentess
queue[0] = 11
queue[5] = "Mihaela"
queue.push( "stuff","ALRIK") // lägger in på slutet
queue.unshift("Tom") // lägger till först

queue.splice(2,0,"tjenare") // insert saker i 
queue[2] = "YO" 
//length är hur många element det sitter i den

queue.sort()
queue.reverse()

let user120 = [ "Timearchitect", "123456!XD", "alrik_he@hotmail.com" ]

console.log( foo ) //data / info boolean number string
console.log( queue ) //data / info boolean number string



// 5) Loopar
// vid sant så loopar den en gång till
// vid false så avslutar den loopen


let i = 0
while ( i  < 3 ) {
    console.log("loop+: " + i)
    i = i + 1
   /*  i += 1
    i ++     // bara öka med 1 */
} 
// += "string" //heter append


i = 3
while ( i  > 0 ) {
    console.log("loop-: " + i)
    i = i - 1
} 

 
for ( i = 0;    i < 3;    i = i + 1 ) 
    console.log("for loop: " + i)


i = 0
while(  i <= 9 ) 
{
    document.write(queue[i]+ "<br>")
    i ++
}

console.log("vidare...")

