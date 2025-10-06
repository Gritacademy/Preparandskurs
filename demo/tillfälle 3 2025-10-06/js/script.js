/* let age = 20;

if (age == 18) {
  console.log("exakt 18");
} else if (age == 20) {
  console.log("exakt 20 system");
} else {
  console.log("NEJ");
}

switch (age) {
  case 18:
    console.log("exakt 18 !!!!");
    break;
  case 20:
    console.log("exakt 20 system !!!!");
    break;
  default:
    console.log("NEJ!!!");
    break;
}
 */

//shift + alt + a   block comment

// arrayer
let foo = 123;
foo = 999;

//index       0      1      2
let lista = [123, "hej", true];
lista[0] = 999;

let queue = ["Alrik", "Bo", "Josefina", "Clara", "Mohammed"];
queue.sort(); //sorterar
queue.reverse();
queue.push("Mikaela"); // läggs in på slutet
queue.pop(); // tabort på slutet av arrayen
queue.unshift("Maria"); // läggs i början
queue.shift(); // tabort från början av arrayen

let newArray = queue.concat(lista); // sätter ihop arrayen
queue.fill("stuff", 0, 3); // fyller ut arrayen på ett visst område
queue.includes("Bo"); // ger ut true/false

let user = ["Timearchitect", "monkey123", "alrik.he@gritacademy.se"];

let username = "Timearchitect";
let password = "monkey123";

// loopar
//while loop

/* if (true) {
    console.log("JA");
} */

let i = 0;
while (i <= 10) {
    console.log("while loop: " + i);
    break
    i++
}

for (let i = 0; i <= 100; i++ ) {
  console.log("for loop: " + i)
  if(Math.random() < 0.5) 
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/330px-Siam_lilacpoint.jpg" alt="">');
  else
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/250px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg" alt="">');
}

