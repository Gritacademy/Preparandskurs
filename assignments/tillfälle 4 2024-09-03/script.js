// 2a uppgift

for (let i = 0; i < 10; i++) {
    //console.log( i%2 );
    if(i%2 == 0)
        console.log("O");
    else
        console.log("X");
}

let array = ["O","X","O","X","O","X","O","X","O","X"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//2b
let resultat = ""
for (let i = 0; i < 20; i++) {
    resultat += "O"

    let randomTal = Math.random()*5
    let avrundadTal = Math.round(randomTal)
        console.log(avrundadTal);
        
/*     for (let j = 0; j < avrundadTal; j++) {
       resultat += " "
    } */
    
    resultat += " ".repeat(avrundadTal)
    //console.log("O")
}

console.log(resultat);

let cityNames= ["malmö","kiruna","lund"]


for (city of cityNames) { //foreach 
    console.log(city);
    for (bokstav of city) { //foreach 
        console.log(bokstav);
    }
}

console.log("-----");

for (let i = 0; i < cityNames.length; i++) {
    console.log( cityNames[i] );
    let city= cityNames[i] 
    //let city= ["m","a","l","m","ö"]
    for (let i = 0; i < city.length; i++) {
        console.log( city[i] );
    }
}




