var leo = window.document.getElementById("leo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna"); 
var rightArrow = window.document.getElementById("right-arrow"); 
var leftArrow = window.document.getElementById("left-arrow");

function NextCard(){
    leo.style = "display:none"; 
    bruna.style = "display:flex"; 
    leftArrow.style = "display:flex"; 
    rightArrow.style = "display:none"; 
}

function PreviousCard(){
    leo.style = "display:flex"; 
    bruna.style = "display:none"; 
    leftArrow.style = "display:none"; 
    rightArrow.style = "display:flex"; 
}