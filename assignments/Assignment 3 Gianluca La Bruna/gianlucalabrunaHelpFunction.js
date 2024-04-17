function charRemove(char, text) {
  if (typeof char !== "string" || typeof text !== "string") {
    console.error("Wrong datatype");
    return;
  }

  const newText = text.replace(new RegExp(char, "g"), "");
  return newText;
}

