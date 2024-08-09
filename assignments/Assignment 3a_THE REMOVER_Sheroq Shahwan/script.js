function filterCharacter(){
    let text = document.getElementById("text-input").value
    let character = document.getElementById("character-input").value 
    let result = text.replace(character, "")
    document.getElementById("output").value = result
}
