// mer on if satser
/* 
let driversLicense = document.getElementById("driversLicense").checked;

let alkoholHaltIBlodet = 5.99;

if (driversLicense) {
    console.log("jag har körkort :) ");
    if (alkoholHaltIBlodet > 0.2) {
        console.log("jag kör full ");
    } else {
        console.log("jag är nyckter");
    }
} else {
    console.log("jag har inte körkort");
}

let age = 18;
let vip = false;
if (age >= 18   &&   vip == false) {
    console.log("YEA");
} else {
    console.log("NAAA");
}


// && and och

// || eller or

if(age == 20){
    console.log("systembolaget");
} else if(age == 18) {
    console.log("myndig");
} else if(age == 15) {
    console.log("byxmyndig");
    console.log("myndig");
}else if(age == 63) {
    console.log("pensionsåldern");
}else{
    console.log("övrigt");
}


switch (age) {
    case 15:
        console.log("byxmyndig");
    break;
    case 18:
        console.log("myndig");
    break;
    case 20:
        console.log("systembolaget");
    break;
    case 63:
        console.log("pensionsåldern");
    break;
    default:
        console.log("övrigt");
    break;
}
*/

// 4 Arrayer

let alrik = 10;
alrik = 20.555;

// index      0     1     2      3
let Alicia = [10, "hej", true, undefined, 1, false, "aha", 111];
Alicia[0] = 20;

Alicia.push(999);    // lägger till slutet
Alicia.unshift(888); // lägger till början

Alicia.pop();     // tar bort från slutet
Alicia.shift();   // tar bort från början

Alicia.reverse(); // omvänd ordning

Alicia.sort();    // sortering på alfabetistordning

let queue = ["Stina", "Patrik", "Mohammed", "David", "Alicia", "Alrik", "Alice","Stefan"];

let container = document.getElementById("lista");
for (let i = 0; i < queue.length; i++) {
   container.innerHTML = container.innerHTML + queue[i] + "<br>";
}

for (let namn of queue) {   // olika sätt bara *
    console.log("for of: "+namn);
}

queue.forEach(namn => {     // olika sätt bara *
    console.log("foreach:"+namn);
});

/* 
container.innerHTML = container.innerHTML + queue[0] + "<br>";
container.innerHTML = container.innerHTML + queue[1] + "<br>";
container.innerHTML = container.innerHTML + queue[2] + "<br>";
container.innerHTML = container.innerHTML + queue[3] + "<br>";
container.innerHTML = container.innerHTML + queue[4] + "<br>";
container.innerHTML = container.innerHTML + queue[5] + "<br>"; 
*/

let x = 0;
x = x + 1; // ökar med 1
x += 1; // ökar med 1
x++; // ökar bara med 1

x = x - 1; // minskar med 1
x -= 1; // minskar med 1
x--; // minskar bara med 1

x = x * 2; // multiplicerat med 2
x *= 2; // multiplicerat med 2

x = x / 2; // multiplicerat med 2
x /= 2; // multiplicerat med 2

Math.pow(2, 2); // komplexta math metoder eponent
Math.sqrt(4); // komplexta math metoder roten

/* if (condition) {
    
} */

// refreash sidan manuellt istället för liveserver

// håll reda på antal loopar
// säg till att avsluta den
//skapar en variabel som håller koll på antalet

let count = 10;
while (count >= 1) {
    console.log("loop: " + count);
    count = count - 1;
}

let i = 0;
while (i < 3) {
    console.log("while: " + i);
    i++;
}

for (let i = 0; i < 3; i++) {
    console.log("for: " + i);
}

console.log(alrik);
console.log(Alicia);