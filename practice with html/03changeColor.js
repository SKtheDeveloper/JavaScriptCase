// alert("connected")


// getElementsByClassName return a array so used index to change property
function thisFunction() {
    const colorChange = document.getElementsByClassName("para");
    console.log(colorChange);
    colorChange[0].style.color = "blue";
    
} 


//getElementByID returs a single value so directly used without index 
function thisFunction1() {
    const colorChange = document.getElementById("second");
    console.log(colorChange);
    colorChange.style.color = "green";
    
}

