// break

for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i == 2) break
}

function alrik() {
    console.log('hejsan')
    return 111
    console.log('tjenare')
}

let x = 10

switch (x) {
    case 2:
        console.log('TVÅ')
        break
    case 5:
        console.log('FEM')
        break
    case 10:
        console.log('TIO')
        break
    default:
        console.log('???')
        break
}

if (x == 2) {
    console.log('TVÅ')
} else if (x == 5) {
    console.log('FEM')
} else if (x == 10) {
    console.log('TIO')
} else {
    console.log('???')
}

function alrik(...lista) {
    // blir till en array array ...
    console.log(lista)
}
function addition(tal1,tal2) {
    return tal1 + tal2
}
function subtracktion(tal1,tal2) {
    return tal1 - tal2
}



alrik()// anropa/calla / call funktionen alrik 

// 7) Objekt
let foo = 1000000
foo = 2000000

//i      0          1          2     3     4
let hus = [1000000, 'yxgatan 5', 'red', true, 'Lauri']
hus[0] = 2000000

let house = {
    // key : value  , pair
    price: 1000000,
    adress: 'yxgatan 5',
    color: 'red',
    sold: true,
    owner: 'Lauri',
    sell: function (newOwner){
        house.owner=newOwner
    },
    waitingList: ["Alrik","Merlinda","Erik"]
}

house.price = 2000000

alrik()
//alert()
document.write()
console.log()

//datatyper primitive

let y
//number
y = -3      // integer,long/ heltal
y = 5.5     // float,double/ decimaltal 

//string
y = '#'    // char  / character, karaktär
y = "hejsan"  // String, str /sträng

//boolean
y = true 

//undefined
y = undefined

//object
y = { price: 123 , namn:"Alrik" }


console.log(typeof house); // printar ut datatypen av värdet
//i = i + 1  
//i += 1
//i ++


/* function charRemove(c , text){
    result = ""
    for (let i = 0; i < text.length; i+=1) {
        if(c != text[i])
            //console.error("MATCHING")
        //else{
            //console.warn("NOT MATCHING")
            result += text[i]
        //}
        //console.log(text[i]);
        
    }

    console.log(result)
} */


function charRemove(c , text){

   return text.replaceAll(c,"")

/*  for (let i = 0; i < text.length; i++) 
        text =  text.replace(c,"")
    return text */

/*  result = ""
    for (let i = 0; i < text.length; i++) 
        if(c != text[i])
            result += text[i]
    return result */
}

let cat = { 
    name : "Gustav",
    alive : true
}

function catShow() {
    if(Math.random() < 0.5 )
        alert(cat.name+ " is DEAD")
    else   
        alert(cat.name+ " is ALIVE")
}




