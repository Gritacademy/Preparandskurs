// Har samarbetat med Rebecca.

function charRemove (string, character) {
    let newString  = '';
    
    for (let x = 0; x<string.length; x++) 
    if (string[x] != character) 
    newString += string[x];
    
    return newString
    
    } 


    /*
function charRemove(params) {
   
}

*/

/*
let str1 = 'hello world'

str1 =str1.replace(/l/g, "")

String.replace('l', "") 
*/