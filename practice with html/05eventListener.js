
//event listener  have may events that we can use .

document.querySelector('button').addEventListener('click', function (event) {
    console.log("It was pressed");
    
}) // this result will show in console panel in browser

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = "It was clicked"
    
})

document.querySelector('p').addEventListener("copy", (eve) => {
    eve.target.textContent = "paragraph Copied"
})

