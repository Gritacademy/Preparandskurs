function charRemove(char, text) {
   // let result = ''
    //for (let i = 0; i < text.length; i++) 
       // text= text.replace(char,"")
        //if (char != text.charAt(i)) 
         //   result += text.charAt(i)
    console.log(text.replaceAll(char,""))
}

function charRemoveSheroq(char, text) {
    if (typeof text != 'string') console.log('wrong datatype')
    else if (char.length < 1) console.log('no letters in the text')
    else {
        console.log('Character: ', char)
        console.log('Text: ', text)
    }
}

charRemove('A', '123')
