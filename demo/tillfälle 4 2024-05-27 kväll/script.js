//6)  funktioner
let foo = "hej" //deklarera 

function addition(tal1=5 , tal2=5 ){  // definerar funktionen addition
   // console.log("plus!!!! " + (tal1 + tal2) );
   console.log("hejsan")
    return tal1 + tal2 
    console.log("hej")
}
let queue = ["alrik","Kevin","Caroline"]

for (let count = 0; count < queue.length; count++) {
   console.log(queue[count]);
   break 
}

addition() //anropa/kalla funktionen addition

console.log()
document.write()



// 7) object

let x = 1000000
x = 2000000
//key : value pair
let house = { 
    price:1000000,
    sold:true ,
    adress:"yxgatan 5",
    queue: ["Henrik","Anna","Lina"],
    buyer:"Alrik",
    sell: function (newOwner) {
        house.owner = newOwner
    },
    
}

let array = [ ["Henrik","Anna","Lina",house],1000000,true,"yxgatan 5","Alrik"]
array[1] = x
array[5] = "Caroline"



house.price = x
house.owner = "Caroline"

console.log()


