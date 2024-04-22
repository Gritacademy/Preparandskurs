function charRemove(char, text) {
    console.log(char, text)
    let result = ""
    for (let i = 0; i < text.length; i++) 
        //console.log(text[i], i)
        if (char !== text[i]) 
            result += text[i] // lägger in bokstaven pga att den inte ska filteras
    console.log(result);
}

charRemove('o', 'otto är cool')
charRemove('h', 'hello')
