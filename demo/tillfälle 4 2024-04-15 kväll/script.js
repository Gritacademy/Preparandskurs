// 6) funktioner

let foo = 5 // Deklarera

function addition(tal1, tal2) {
    //tal1 & tal2 är parametar
    //let tal1 = 2, tal2 = 3 // deklarera 2 variabler
    //Definera funktionen addition  måste ha curly brackets
    console.log(tal1 + tal2) // metod
    // alert(1234567) // funktion
}

addition(5, 5) // anropa funktionen addition

function subtraction(tal1, tal2, tal3) {
    console.log(tal1 - tal2)
}

;[].pop() // tarbort & returnerar den sista elementet från en array

// getlementbyid ger ett single objekt
// body måste ha skapats förre
document.getElementById('minusBtn').addEventListener('click', () => subtraction(parseInt(document.getElementById('tal1').value), parseInt(document.getElementById('tal2').value)))
document.getElementById('multiBtn').addEventListener('click', () => multiplication(parseInt(document.getElementById('tal1').value), parseInt(document.getElementById('tal2').value)))
document.getElementById('diviBtn').addEventListener('click', () => divition(parseInt(document.getElementById('tal1').value), parseInt(document.getElementById('tal2').value)))

// getElementsByTagName ger en array(collection)
// i htmlfilen , leta upp alla button taggar , arrayen ta index 1 , button leta upp 'onclick' tilldela funktionen addition
//document.getElementsByTagName('button')[1].onclick = addition
console.log(parseInt('22')) // parseInt tolkar string"22" som numret 22

multiplication(5, 5) // anropning

function multiplication(tal1, tal2) {
    //hojsting är före anropning altid
    console.log(tal1 * tal2)
    return [tal1, tal2] // return value,  retunerings värde
}
function divition(tal1, tal2) {
    //hojsting är före anropning altid
    console.log(tal1 / tal2)
    if (isNaN(tal1 / tal2)) console.log('its infinity!!!!') // return value,  retunerings värde
}

// 7) Objekt

//variabel
let x = 1000000
x = 2000000

//array med 5 element/length
//index        0      1     2         3      4
let array = [1000000, 60, 'yxgatan 5', true, 'red']
array[0] = 2000000
//array[5] = "Alrik He" //
array.push('Alrik He') // primärt använd denna

//object
//properties (key/value), fält
let house = {
    price: 1000000,
    address: 'yxgatan 5',
    sold: true,
    color: 'red',
    kvm: 60,
    apartmentShowingQueue: ['Julia', 'Andreas', 'Hampus', 'Hilding'],
    log: function (x) {
        console.log(x)
    },
}

house.price = 2000000 // primärt använd denna
//house["price"] = 5000000
house.owner = 'Alrik He'

function log(x) {
    console.log(x)
}
