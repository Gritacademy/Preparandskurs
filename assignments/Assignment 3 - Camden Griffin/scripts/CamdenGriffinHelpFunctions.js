document.getElementById("resultBtn").addEventListener("click", () => {
    const character = document.getElementById("character").value;
    const text = document.getElementById("text").value;

    const result = charRemove(character, text);
    document.getElementById("result").textContent = "Result: " + result;
});

function charRemove(character, text) { // kollar string
    if (typeof character !== "string" || typeof text !== "string") {
        console.error("Wrong datatype");
        return;
    }
    const result = text.split(character).join("");
    return result;
}
