"use strict";
// https://www.w3schools.com/js/js_strict.asp

let foo = "hejsan";
foo = "tjenare";

//index      0       1    2
let bar = ["hejsan", 123, true];
bar[3] = "tjenare"; bar[2] = "tjenare" 

let queue = ["Martina","Stina","Dzemila","Rayan", "Nils", "Susanne", "Elina", "Isa", "Bazola"];
queue.sort();
queue.push("Stina"); // lägger till på slutet
queue.pop(); // tarbort från slutet
queue.unshift("Linnea"); // lägger från början
queue.shift(); // tarbort från början
queue.reverse();
queue.push("Alrik");
let x;
x = queue.concat([9, 9, 9, 9, 9]);

console.log(bar);
console.log(queue);
console.log(queue.length); //antal element i arrayen

//switch case
let age = 20;

if (age == 18) {
  console.log("myndig");
} else if (age == 20) {
  console.log("systemet");
} else if (age == 67) {
  console.log("pensionsålder");
} else {
  console.log(" en normal ålder");
}

switch (age) {
  case 18:
    console.log("myndig");
    break;
  case 20:
    console.log("systemet");
    break;
  case 67:
    console.log("pensionsålder");
    break;
  default:
    console.log(" en normal ålder");
    break;
}

// let x = 0
x = x + 1  // ökar med 1 
x += 1     // ökar med 1
x ++       // ökar med bara 1

x = x - 1  // minskar med 1 
x -= x     // minskar med 1 
x --       // minskar med 1 


console.log("HEJSAN!!!!");
// 5) Loopar

if(true){
  console.log("if sats");
}

let i = 3
//   (condition)
while(i >= 0){  
    console.log("while loop:  " + i);
   // document.write("while loop:  " + i+ "<br>")
    i --
}

//  (deklareringen; condition; ökningen)
for (let i = 0; i < 3; i++) {
    console.log("for loop:  " + i);
   // document.write("for loop:  " + i+ "<br>")
}

// apotekets kölista 
for (let i = 0; i < queue.length; i++) {
    //document.write(' <img width="75px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/330px-Cat_August_2010-4.jpg" alt="">')
   document.write(queue[i]+" är på köplatsen:  " + (i+1) + "<br>")
}


console.log("vidare...");


