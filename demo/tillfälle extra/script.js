/* extern js */
function enter(){
    alert(1234567)
}

document.getElementById("secondBtn").addEventListener("click"
    ,   ()=>{ alert(88888)  }
)

document.getElementById("thirdBtn").addEventListener("click"
    ,   ()=> {enter()}  
)

document.getElementById("fourthBtn").onclick = function enter2() {
    alert("hejsan")
}

document.getElementById("fifthBtn").onclick = enter