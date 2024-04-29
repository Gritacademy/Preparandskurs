//Assignment 2a : ODD LOOP
let result = ''

for (let i = 0; i <= 9; i++) //block alla lila keyword flow
    if (i === 4) 
        result += 'Q'
    else if (i % 2 === 0) 
        result += 'X'
    else 
        result += 'O'
    

console.log(result)
// Assignment 2b : ODDER LOOPS
let result2 = ''

for (i = 0; i <= 20; i++) {
    let amountOfSpaces = Math.floor(Math.random() * 5) + 1
    result2 += 'O'
    result2 += ' '.repeat(amountOfSpaces)
/*     for (let j = 0; j < amountOfSpaces; j++) {
        result2 += ' '
    } */
}
console.log(result2)

//Assignment 2c : LOOPDI-LOOP
let cityNames = ['kiruna', 'uppsala', 'Malmo', 'Gothenburg', 'Stockholm']

cityNames.forEach((city) => {
    let cityName = city.charAt(0).toUpperCase() + city.slice(1)

    for (let i = 0; i < cityName.length; i++) {
        console.log(cityName.charAt(i))
    }
})
cityNames.forEach(
    (x) => console.log(x)
)

for( let i = 0 ; i < cityNames.length ; i++)
    console.log( cityNames[i])
