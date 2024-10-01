for (let i = 0; i < 20; i++) {

    let spaces = Math.floor(Math.random() * 5) + 1;
    document.write("O".repeat(spaces));
    document.write("O");
}

let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];
for (let i = 0; i <cityNames.length; i++) {

console.log(cityNames[i][0].toUpperCase());
}


// Har nog fått något om bakfoten på .html-filen men har klyddat med
// såpass nu så den har gått från fungerande till ej fungerande...
// Hör gärna vad som blivit fel/för mycket, tror jag övertänker den i
// detta skedet redan hehe...