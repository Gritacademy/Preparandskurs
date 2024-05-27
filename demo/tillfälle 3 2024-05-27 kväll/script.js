//switch case, if sats

let age = 20
if (age == 15) {
    // byxmyndig
    console.log('byxmyndig')
} else if (age == 18) {
    // myndig
    console.log('myndig')
} else if (age == 20) {
    // systemet
    console.log('systemet')
} else if (age == 67) {
    // pension
    console.log('pension')
} else console.log('inget speciellt')



switch (age) {
    case 15:
        console.log('byxmyndig')
        break
    case 18:
        console.log('myndig')
        break
    case 20:
        console.log('systemet')
        break
    case 67:
        console.log('pension')
        break
    default:
        console.log('inget speciellt')
}


// 4) arrayer
// flera behållare


let foo = 5
foo = 10

// index      0      1         2     3
let lista = [ 5 , "hejsan" , true,"alrik"]
lista[0] = 10 
lista[4] = 5555
lista.push(5555) // lägger till på slutet
lista.unshift(5555) // lägger till på början

lista.pop() //tarbort från slutet
lista.shift() //tarbort från början

lista.sort() // alphabetisk ordning
lista.reverse() //bytar ordning
let queue = ["Caroline","Kevin","Alrik","Anna","Henrik","Ali","Elenora"]
let user1 = ["timearchitect","monkey123!","alrik_he@gmail.com"]

let username1 = "timearchitect"
let password1 = "monkey123"
let email1= "alrik_he@gmail.com"
console.log(queue);

//5) loopar

// while repeatera

// false så avslutas loopen
//sant fortsätter att loopa
let count = 0
while (count < 3){
    console.log("while loop "+count);
    count += 1 
}

count = 0
do{ // do while
    console.log("do while loop "+count);
    count += 1 
}
while (count  < 3)


//for loop


for ( let count = 0;   count < 3;   count += 1 ){
    console.log("for loop "+count);
}

for (let i = 0 ; i < queue.length ; i++) {
    document.write(queue[i]+" är på köplatsen: "+(i+1) +"<br>")
}
