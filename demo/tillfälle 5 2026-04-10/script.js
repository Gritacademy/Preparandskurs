let variable = "Alrik",
    key = "age",
    value = 3
variable = "Alicia"

//index        0       1     2
let array = ["Alrik", 34, "black"]
array[0] = "Alicia"
array.push(true) // lägger utan att du veta sista index
array[4] = false
array[10] = false

for (let i of array) console.log(i) // alla key
for (let i in array) console.log(i) // alla values

let house = {
    adress: "yxgatan 5b",
    owner: "Alrik",
}
// property     key:value
let object = {
    name: "Alrik",
    age: 34,
    hairColor: "black",
    addition: function (tal1, tal2) {
        return tal1 + tal2
    },
    lastname: "He",
    work: "Teacher",
    queue: ["Emma", "David", "Alrik", house],
}

object.name = "Alicia" // primärt
object[key] = "Alicia2" // secondärt kan ha variablar i []
object.körkort = true //skapar property
object.driversLicense = true

for (let i in object) console.log(i) // alla key
for (let i in object) console.log(object[i]) // alla values

console.log(variable)
console.log(array)
console.log(object) //metod
/* 
addEventListener(); // funktion
alert(123); // funktion är standalone
console.log(123); //metod  funktion inuti ett object
Math.random(); //metod
document.getElementById("age"); //metod
array.push(); //metod
array.sort(); //metod
 */

alrik() //kallar/anropar/invokera en custom funktion som jag kör

function alrik(tal1, tal2) {
    //hoistas
    //definera
    //definera
}

function log2(message) {
    console.log(message)
}

let alriksConsole = {
    log: log2,
    alrik: function (tal1, tal2) {
        //definera
        //definera
    },
}

let malmo = {
    coord: { lon: 55, lat: 11 },
    weather: [
        { id: 801, main: "Clouds", description: "lätt molnighet", icon: "02n" },
    ],
    base: "stations",
    main: {
        temp: 27.66,
        feels_like: 30.02,
        temp_min: 27.66,
        temp_max: 27.66,
        pressure: 1014,
        humidity: 70,
        sea_level: 1014,
        grnd_level: 1014,
    },
    visibility: 10000,
    wind: { speed: 4.06, deg: 121, gust: 4.21 },
    clouds: { all: 11 },
    dt: 1775842435,
    sys: { sunrise: 1775787096, sunset: 1775831445 },
    timezone: 10800,
    id: 0,
    name: "",
    cod: 200,
}

console.log(malmo.weather[0].main)
document.writeln("!!!!!!!!!")

function randomNumber() {
    document.getElementById("resultat").innerHTML =
        "<br>" + Math.round(Math.random() * 100)
}
