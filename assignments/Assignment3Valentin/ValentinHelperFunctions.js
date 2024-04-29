function charRemove(character, text) {
     if (typeof character !== 'string' || typeof text !== 'string') {
        console.error('Wrong datatype')
        return}
     let result = text.split(character).join('')
     console.log(result)
}