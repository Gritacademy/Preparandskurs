// 3a) fastnade så hoppade över och gjorde 3b
function charRemove(char = 't', text="texter med texter") {
/*     let resultat = ""
    for (let i = 0; i < text.length; i++) 
        if(text.charAt(i) != char)
            resultat += text.charAt(i)
    console.log(resultat) */

  
    //console.log( hello.split(char).join("") )


   console.log( text.replaceAll(char,"") )
}