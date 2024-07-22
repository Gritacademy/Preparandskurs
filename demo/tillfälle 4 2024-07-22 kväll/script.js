// 6 functions


//alert()
let lista = ["Altrik",2,true] //deklarerar en variabel som innehåller en array/ deklarerar en array
console.log(lista)

function addition( tal1 , tal2  ){ //definera en funktion som heter addition
    //let tal2 = 5
    //console.log(tal1 + tal2);
    return tal1 + tal2
}
//console.log(tal1);

addition() // anropa / kalla på funktionen , kör den

let btn1 = document.getElementsByTagName("button")[0]
//btn1.onclick = addition 
//btn1.addEventListener("click",addition)
/* btn1.addEventListener("click",()=> {
    let tal1 = 5
    console.log(tal1);
}) */



    // 7 object
let foo = 1000000
foo = 2000000

//element
//index       0           1        2                 3
let bar = [1000000 , "red", "stenyxegatan 5", true]
bar[0] = 2000000


// property    key : value  
let house1 = {
    price:1000000 ,
    color:"red",
    adress:"stenyxegatan 5",
    sold:true
} 


let user1= {

    password:"monkey123",
    username:"Timearchitect",
    email:"alrik.he@gritacademy.se",
    login:function (){
        console.warn("LOGIN!!")
    }
}

function login(){
    console.warn("LOGIN!!")
}


house1.price = 2000000

console.log(bar); //metod 
console.log(house1);






