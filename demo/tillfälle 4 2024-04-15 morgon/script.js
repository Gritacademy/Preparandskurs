// 6) functions
// hojstad

let bar = 'Alrik' // deklaration av foo som är ''
addition() // anropa funktionen addition

let clickBtn= document.getElementById("clickBtn")
console.log(clickBtn); //logga ut så att ni kan dubbelkolla DOM objecktet
clickBtn.addEventListener('click',()=>addition(1,3))


function addition(tal1, tal2) {
    //alert(tal1+tal2)
    console.log(tal1 + tal2)
    return 'hejsan' // retunering
}


function multiplication (tal1,tal2) {
    console.log(tal1 * tal2)
}

function subtraction(tal1,tal2) {
    console.log(tal1 - tal2)
}





// 7 ) object
let foo= 5000000// variabel

let array= [5000000,"yxgatan 5","red", true]
array[0]= 8000000
array[4]="Alrik He"

let house1 = {price:5000000,adress:"yxgatan 5",color:"red", sold:true}
house1.price = 8000000
house1.owner ="Alrik He"


user1={
    password:"abc123!",
    username:"Timearchitect",
    lastLoggedIn: new Date(),
    profilePic:"https://avatars.githubusercontent.com/u/7331259?v=4",
    //metod
    logOut: function () { // byt plats på function & namn och lägg in :
        console.log("logOut!!!");    
    }
}


//funktion
function logOut() {
    console.log("logOut!!!");    
}










