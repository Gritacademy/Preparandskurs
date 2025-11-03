let age = 18;

/*  shift + alt + a
 if (age == 18) {
    document.write("VUXEN");
} else if (age == 20) {
    document.write("SYSTEMBOLAGET!!!");
} else if (age == 67) {
    document.write("PENSION!!!");
} else {
    document.write("inget speciellt!!");
} 
    */

/* switch (age) {
    case 18:
        document.write("VUXEN");
        break;
    case 20:
        document.write("SYSTEMBOLAGET!!!");
        break;
    case 67:
        document.write("PENSION!!!");
        break;
    default:
        document.write("inget speciellt!!");
        break;
} */

// 4)  ARRAYER
let lista2 = 5;

//  index     0     1    2      3
let lista = [5, "hej", true, undefined];
lista[0] = 10;
lista[4] = false;
lista[10] = 999;

lista.push("tjenare"); //lägga till på slutet
lista.unshift("YO"); //lägga till i början
lista.pop(); //tabort element på slutet
lista.shift(); //tabort element i början

lista.push(11); //lägga till på slutet
lista.push("01"); //lägga till på slutet
lista.push("HEJ"); //lägga till på slutet
lista.push("FALSE"); //lägga till på slutet
lista.push("true"); //lägga till på slutet

lista.sort(); // sorterar lista efter alfabetisk ordning tecken för tecken
// alla element räknar sorterar den som om det va en string

lista.reverse(); // vänder ordningen på arrayen

let nyLista = lista.concat([1, 2, 3]); //* lägger ihop en array
let nyLista2 = lista.concat(1, 2, 3); //* pga ... spread: lägger ihop en array alternativ syntax

lista.fill("Alrik", 2, 6); //*
lista.includes(undefined); // känner av ett visst värde *

//example apotek  0    1        2          3       4      5      6     7
let queue = ["Elin", "Jonna", "Dennis", "Amer", "Ellen","Alrik", "Clara", "Anton"];

// visa kö på en p tagg med id "display"
let displayPTagg = document.getElementById("display");
for (let i = 0; i < queue.length; i++ ) {
    displayPTagg.innerHTML += "  Köplats " + (i+1) +" är " + queue[i] + " på <br>";
}

/* displayPTagg.innerHTML += "Köplats 1 är " + queue[0] + " på <br>";
displayPTagg.innerHTML += "Köplats 2 är " + queue[1] + " på <br>";
displayPTagg.innerHTML += "Köplats 3 är " + queue[2] + " på <br>";
displayPTagg.innerHTML += "Köplats 4 är " + queue[3] + " på <br>";
displayPTagg.innerHTML += "Köplats 5 är " + queue[4] + " på <br>";
displayPTagg.innerHTML += "Köplats 6 är " + queue[5] + " på <br>"; */

/* detta är att visa på body

document.write("Köplats 1 är "+queue[0] + " på <br>" )
document.write("Köplats 2 är "+queue[1] + " på <br>" )
document.write("Köplats 3 är "+queue[2] + " på <br>" )
  */
//console.log(lista);
//console.log(lista.length);

//5) loopar

let foo = 0;
foo = foo + 1;
foo += 1; // förkortning
foo++; //funkar ej på string//plusar med bara 1 // ++foo  är visar värdet före

// reverse minus

foo = foo - 1;
foo -= 1;
foo--;

// dubbla foo värde
foo *= 2;

// delat med & tilldela till foo igen
foo /= 2;

if (true) {
    console.log("YES");
}

let count = 3; //deklarera en variable
while (count >= 0) {
    //condition som stoppar
    //count = count + 1
    console.log("WHILELOOP: " + count);
    count--; //ändring av variabeln
}

//   start kod ; condtion kod ; update kod variabel
for (let count = 3; count > 0; count--) {
    console.log("FOR LOOP: " + count);
    //displayPTagg.innerHTML +="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/250px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg' >"
}

console.log("vidare...");
