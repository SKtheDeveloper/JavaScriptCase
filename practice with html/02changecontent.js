/*by ID*/
// document.getElementById("second").textContent = "I love whole world"

/*by QuerySelector :- it is select first tag that include */

// const changeVar = document.querySelector("p")

// changeVar.textContent = "this is another one"

/* to change all p tages */
/*by QuerySelectorAll :- it is select all tages that include */
const changeVar1 = document.querySelectorAll("p")

console.log(changeVar1)



changeVar1.forEach((p) => p.textContent = "Ram")



