// 3) arrayer
let foo = 'Alrik';
// en array med 3 element , length är 3
// index      0         1         2
let array = [5, 'yxgatan 5', true]; //
array[0] = 888; // glöm ej index siffran + [  ]
// annars skriver ni över så att den är en vanlig variabel

array[3] = 'Mitar'; // lägg in element
console.log(array);

array.push(123456); // lägg in element på slutet
console.log(array);

array.unshift('HEJSAN'); // lägg in element i början
console.log(array);

array.pop(); //tarbort på slutet
console.log(array);

array.shift(); //tarbort från början
console.log(array);

console.log(array); // få ut siffran för längden/antal element i arrayen

console.log(array.length); // få ut siffran för längden/antal element i arrayen

// 5) loopar
// disclaimer den kan loopa förevigt om ni laddar in koden oklar
// loppar vill ha conditions också
// vid sant så loopar den, ( webbläsaren kan ej ladda in ny kod förrens den nuvarandfe är kört )
// vid false så stoppar den
//let evenNumber = [0,2,4,6,8,10,12,14,16,18]
let count = 0;
while (count < 3) {
    // console.log("While "+ evenNumber[count]);
    console.log('While + ' + count);
    count = count + 1;
}

count = 3;
while (count > 0) {
    // console.log("While "+ evenNumber[count]);
    console.log('While - ' + count);
    count = count - 1;
}

count = 0;
do {
    // console.log("While "+ evenNumber[count]);
    console.log('do While + ' + count);
    count = count + 1;
} while (count < 3);


for (count = 0; count < 3; count = count + 1) {
    console.log('for + ' + count); // curlybrackets/crulparentess behövs ej vi 1 commando kod
}


console.log('vidare....');

// index      0             1        2      3         4 
let queue = ["Gianluca","Mitar","Mortaza","Andrei","Alrik"]

queue.shift() 

for (let i = 0;   i < 5;    i = i + 1 ) {
   document.write(queue[i] +' är på köplats ' + (1+i)+ "<br>" ); // curlybrackets/crulparentess behövs ej vi 1 commando kod
}
