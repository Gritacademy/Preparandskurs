function divide1(){
    console.log("Booh");
    alert("Booh");
}


function divide(){
    let foo=document.getElementById("value1").value;
    let bar=document.getElementById("value2").value;
    let result=foo/bar;
    document.getElementById("result").innerHTML=result;
    if (isNaN(result)== true) {
        alert("You can't divide us!");
    }
}
