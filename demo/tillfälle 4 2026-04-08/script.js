/* const x = 5;
x = 10;
x = "hello";



x = [ "David","Stina","Patrik","Mohammed","Alicia"]


//  key : value
for (const name of x) { // value
    console.log(name);
}

for (const name in x) {   // key
    console.log(name);
}

const i = 0 
while (i<3) {
    console.log(i + " loop");
    i++
}


const i = 10 
do{
    console.log(i + " loop");
    i++
} while (i<3)  */

// sannings värden falsy values js
// if(999)  if(9) if(1)   YES
// if(["Alrik","Stina"])  YES
// if("hejsan") if("h")   YES

// if( "" )               NO
// if( 0 )                NO
// if( undefined )        NO
// if( null )             NO

/* var money = 1000
//const y = 0;  //konstant
{
  //let y = 40;
  {
    money = 100000
    var y = 80;
    console.log(y + " inne");
  }
   console.log(y + " yttre");
}
console.log(y + " längst ute");
 */

console.log(z); // hoisting deklaration - tilldelningen
var z = 10;
console.log(z);

function alrik() {
  //definera,define funktionen alrik
  console.log(z);
  console.log(z + " hejsan");
}

alrik(); // invokera/anropa/kalla , invoke/call

let tal1 = 6;
let tal2 = 8;

// ( parametrar )
function addition(tal1, tal2, tal3) {
  //definerar
  console.log(tal1 + tal2 + tal3);
  return tal1 - tal2 - tal3;
}

function multiply(...x) {
  //...spread, tolkar det som en array
  console.log(tal1);
}

function addPoints() {
  tal1++;
  console.log(tal1);
  document.getElementsByTagName("h1")[0].innerHTML = tal1;
}





console.log(document.getElementById("titel2"));
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("grupp1"));


let titelTagg = document.getElementById("titel2")
titelTagg.innerText=" hej <button> clickhere </button> hej"
titelTagg.classList.remove("grupp1")
titelTagg.style.color = "purple"
titelTagg.innerHTML=" hej <button> clickhere </button> hej"
