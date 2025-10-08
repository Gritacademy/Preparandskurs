function btnOnClick() {
  alert(12345678);
  let age = document.getElementsByTagName("input")[1].valueAsNumber;
  if (age >= 18) {
    console.log(age + " är vuxen ålder");
  } else {
    console.log(age + " är mindreårig ");
  }

  console.log(
    document.getElementsByTagName("input")[0].checked + " är checkboxen just nu"
  );
  //document.write(tal)
  document.getElementsByTagName("div")[0].innerHTML = "hello";
}

// 0 false, true 1 > 999
// ""  ,  "h" ,
if (-1) console.log("YES");
else console.log("NO");

//

/* {
    let tal3 = 999
    alert(tal3)
} */

//alrik()   // kalla/anropa/invokera funktionen alrik

/* let tal2 = 5

function alrik (){   // definera en funktion som heter alrik
    alert(tal2)
    let tal = 5
} */

{
  var z = "WHATT!!!!!!";
  var z = 888888888;
}
console.warn(z);

addition(8, 8); // hoistas

//  tal1 & tal2 är parametrar vid anropning så kan ni tilldela värdet
//  exampel addition(1,2)  tal1 blir 1 & tal2 blir 2

function addition(tal1, tal2) {
  if (typeof tal1 == "number" && typeof tal2 == "number")
    console.log(tal1 + tal2);
  else
    console.error(
      "the parameter is not a number, please input an valid number!!"
    );

  // retunerings värde
  return tal1 + tal2; // avslutar också funktionen

  alert(123);
  console.log(1234567);
}

// Object
let x = 1000000
x = 2000000

//index       0          1           2     3      4
let array = [1000000, "yxgatan 5b", true, true, "Clara", "Josefina"];
array[0] = 2000000 

// har property (key:value)
let house = {
  price: 1000000,
  address: "yxgatan 5b",
  sold: true,
  hasGarage: true,
  Owner: "Clara",
  nextOnQueue: "Josefina",
  lista: ["Matmut","Alrik"] ,
  selling:  function () {
    console.log("sold to somebody");
  }
};




house.price = 2000000
//house["price"] = 5000000

console.log(x);
console.log(array);
console.log(house);

Math.random()

let d= new Date()
d.getDay()

addition(1,1)


function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});