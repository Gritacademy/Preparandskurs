// 3 ) array
// 3 element i arrayen
// index       0     1      2
let array = [10, 'hej', true]
array[0] = 888
//array = 888
array[3] = 'tjena' // lägga in ett extar element på slutet

array.push(12345)
array.pop()

let queue = ['Mathinee', 'Hampus', 'Andreas', 'Anton', 'Alrik']
queue.sort()

let container = document.getElementById("container")
displayQueue() 
// exemple
function displayQueue () {
    container.innerHTML=""
    for ( let i = 0;   i < queue.length;  i++  )
        container.innerHTML+= queue[i]+" är på köplats " + (i+1) + "<br>"
}

function addQueueBtn(){
    let inputName = document.getElementById('input').value // läser från input
    queue.push(inputName) // lägger in i arrayen input 
    displayQueue() // displayer  arrayens/kö info
}
function nextBtn(){
    queue.shift() // tarbport den första personen i kön
    displayQueue() // displayer  arrayens/kö info
}





console.log(array)

// 5) loopar
// koderna måste köras klart innan den laddar in ny koder/uppdateringar

let count = 0 , bar = 5 , x = 10

while (count < 3) {
    console.log('while ' + count)
    count = count + 1
}

count = 0
do {
    console.log('do while ' + count)
    count = count + 1
   // count += 1  //ökar med 1
   // count ++  //ökar bara med 1 
} while (count < 3)



for (count = 0; count < 3; count = count + 1) {
    console.log('for ' + count)
}

console.log('vidare....')

