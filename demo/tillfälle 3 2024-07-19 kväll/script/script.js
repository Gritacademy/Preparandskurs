
// 3 arrayer
let foo //deklarera en variabel

foo = 10 //tilldelar den nummer 5

let bar 


let lista 
// lista innehåller 3 element/ 3 i längd
//index   0    1    2       3 
lista = [5 , "yo", true, "ALRIK"] // tilldelar en array
//lista[0] = 10 

//index             0        1       2       3
let namnlista = ["Fadi" , "Alrik" , "Erik","Benny"]

//namnlista[10] = "Anna"

namnlista.push("Jakob") //lägger in på slutet av arrayen
namnlista.pop() //tar bort från slutet
namnlista.unshift("Jakob")// lägger in på början av arrayen
namnlista.shift() //tar bort från början

namnlista.sort()

//namnlista = 888

console.log(namnlista);



// 4 loopar
let count = 0
while (count < 4)  {
    document.write("köplats " + (count+1) +" " +namnlista[count]+"<br>")
    count = count + 1 //öka med 1
    console.log("LOOP: "+ count);
}

let i = 0
while (i < 10 ) {
    i = i + 1 //öka med 1
    console.log(i);
}


for (let i = 0;   i <= 10;   i = i + 1){
    console.log("FOR LOOP:"+ i);
}

