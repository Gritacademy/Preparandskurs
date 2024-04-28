// 4 ) ifsatser , switch


let height = 140

if(height== 140)
    console.log("high! 1 ");
else if(height== 150)
    console.log("higher!! 1 ");
else if(height== 170)
    console.log("highest!!! 1 ");
else
    console.log("error!!! 1 ");


    
 switch (height) { // bara == jämnföra exakt värde
    case 140:
        console.log("high! 2");
    break

    case 150:
        console.log("higher!! 2");
    break

    case 170:
        console.log("highest!!! 2");
    break

    default:
        console.log("error!!! 2");
}
 
// 3) Arrayer

let foo = 5
foo = 888

// deklaration av en array
// värde är t.ex: 2 "hej", true ovs, varje värde är ett element
// index      0          1   2     3     4
let lista = ['Alrik HE', 'benny', 10, 'hej', true, 'hejsan']
lista[0] = 888
lista[6] = false // lägga in mer element ,måste ha index nummer

lista.push(NaN) //lägga in värden på slutet
lista.unshift('emma') // tarbort från slutet

lista.pop() // tarbort från slutet
lista.shift() //tarbort från början av arrayn

lista.reverse() // tvärtom ordning
// arrayer har en ordning
lista.sort() // sorterar i alfabetisk ordning
// om ni tilldelar utan [index] som : lista = 1000 så blir den till en vanlig variabel
// man kan tilldela andra variabler med [] så blir den till en array

//
let queue = ['Valentin', 'Emelie', 'Alma', 'Alrik']
document.write(queue)

document.body.innerHTML = '' //rensar bodys inner html
queue.shift() //tarbort från början
document.write(queue) // skriver ut det på html body

//5) loopar
//repeterar koder
// !!! OBS kan repetera förevigt om det är sant permanent
// false avslutas
let count = 0
while (count <3) {
    /* count = count + 1  // öka med 1
    count += 1 // öka med 1*/
    console.log('while loop: ' + count)
    count++ // öka bara med 1
}

/* count = 0
while (count <= 10) {
    console.log('while loop: ' + count)
    count+=2 // öka bara med 1
} */
// varannan jämnt?  0 2 4 6 8 10    (medium)

/* count = 10
while (count > 0) {
    console.log('while loop: ' + count)
    count-- // öka bara med 1
} */
// räkna neråt ?? 9 8 7 6 5 4 3 2 1 0 (svår)


//do while 
count = 0
do {
    console.log('do while loop: ' + count)
    count++ // öka bara med 1
}
while (count <3) 


//for 

//   startkod   condition  repeterande kod
for (count = 0;  count <3; count+=2  ) {
    console.log('for loop: ' + count)
}



console.log('vidare . . . ')

// do while
