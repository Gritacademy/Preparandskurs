// Assignment 3a

function charRemove(character = "s",text = "This code sucks"
) {

/* let resultat=""
for (let i = 0; i < text.length; i++)
  if(text[i]!=character)
      resultat+=text[i]
console.log(resultat); */

console.log(text.replaceAll(character,""))

 // console.log(text.split(character).toString());
 //   newText = text.split(character).join("");
 //   console.log(newText)
}

charRemove();



// Assignement 3b

//let array = ["Gustav", true];
let cat_info = {
  name: "Gustav",
  alive: true,
};

function catName() {
  //alert(array[0]);
/*  if( Math.random() < 0.5 ) 
   alert("the cats name is: "+ cat_info.name +" and its alive");
 else alert("the cats name is: "+ cat_info.name +" and its dead"); */

 catName.alive = Math.random() < 0.5
 alert("the cats name is: "+ cat_info.name 
 +( (catName.alive)? " and its alive" : " and its dead") );

}


