// definera
 function charRemove (char , text) {
    console.log(char , text);
    return text.replace(char , "")
 }

// anrop
charRemove("&" , "Jag & Du");

// charRemove("D" , "Jag & Du"); // exempel för mig själv så det stämde 
