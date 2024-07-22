let count = 0

count = count + 1 // öka med 1
count += 1        // öka med 1
count ++          // öka bara med 1

count = count - 1 // minska med 1
count -= 1        // minska med 1
count --          // minska bara med 1

for (let i = 0; i < 5; i+=2 ) {
    console.log(i);
}

let lista = ["Alrik","Johanna"]

function addition() { //definera funktionen addition
    let tal1 = 1
    let tal2 = 1
    
    console.log(tal1 + tal2);
  //  alert(tal1 + tal2)
}

//addition() // anropa/kalla funktionen addition

function plus(tal1 , tal2) { //( parametrar )
    console.log("world" + "hello")
    return "tal1+tal2"  //retuneringsvärde
}

//alert("HEllo world")
//console.log([1,2,3,4])
//alert([1,2,3,4])



// 7 Object

let x = 1000000
let y = 1000000
x = 2000000
 
let cityNames= ["malmö","kiruna"]
// element index 0   1    2     3   
let hus = [1000000,"röd",true,"stenyxegatan 5"]
hus[0] = 2000000  


// properties key:value
let hus2 = {
    price:1000000,
    color:"red",
    sold:true,
    adress:"stenyxegatan 5"
}
hus2.price = 2000000
hus2.adress = "ystadsgatan 5"
hus2.color= "green"

/*
let index = {
    title: "alrik"
}
index.title = "Johanna"  
*/

document.title = "Johanna"

document.write("HEJSAN")




console.log(x);
console.log(hus);
console.log(hus2);