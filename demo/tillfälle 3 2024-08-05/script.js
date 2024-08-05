// 3 arrays

let x = 5
x = 10
x = 'hej'

//element
//index   0     1     2
let y = [5, true, 'hej']
y[0] = 10
y[3] = 88

console.log(y.length)
// !!!
y = false // dont forget to add index otherwise it overwrites the whole array as a variable

//
let queue = ['Emelie', 'Gustav', 'Anna', 'Leon', 'Sheroq', 'Fadi', 'Reeber']
queue.sort() // sorting based to aplhabetical order
queue.push('Bianca') // lägg till på slutet
queue.pop() // tabort från slutet

queue.unshift('Anna') // lägg till på början
queue.shift() // tabort från början


// 5 loopar
let age = 12
if (false) {
    console.log('VUXEN')
}

// (true) repeat
// (false) cancel & skip
let i = 0
while (i < queue.length) {
    console.log('LOOP ' + i)

    document.getElementById('list').innerHTML += queue[i] + '<br>'

    i = i + 1
}

let count = 0
while(count< 3){
    console.log('while LOOP ' + count)
    //count = count + 1
    count += 1
    // count ++ // only +1
}



for( let count = 0; count< 3;  count += 1){
    console.log('for LOOP ' + count)
}



count = 1000
do{ // always do 1 loop
    console.log('DO while LOOP ' + count)
    //count = count + 1
    count += 1
    // count ++ // only +1
}
while(count< 3)


function nameInput() {
    let name = document.getElementById('input').value
    queue.push(name)
    document.getElementById('input').value = ''
    document.getElementById('list').innerHTML = '' // clear

    let i = 0
    while (i < queue.length) {
        console.log('LOOP ' + i)
        document.getElementById('list').innerHTML += queue[i] + '<br>'
        i = i + 1
    }
}

console.log('vidare...')
