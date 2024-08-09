function charRemove(char, text){
    if (char.length != 1 || typeof text != "string"){
        console.log("wrong datatype")
    } else {
    console.log("Character: ", char)
    console.log("Text: ", text)
}
    
}

charRemove("A", "123")