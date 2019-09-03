
/*by ID*/

const resultID = document.getElementById("second") /* it get whole p tag which have "second" ID */
console.log(resultID); 

/**by class */

const resultClass = document.getElementsByClassName("para")     /* it get whole p tag which have "para" class */

console.log(resultClass);       //it select as array
console.log(resultClass[0]);

/**by Name */
const resultName = document.getElementsByName("jhon")     /* it get whole p tag which have "jhon" Name */

console.log(resultName);       //it select as array

/**by Quesry selector: using tag */

const resultQuery = document.querySelector("p")  // it select first p tag in document
console.log(resultQuery);

/**by Quesry selector: using ID */

const resultQueryID = document.querySelector("#second")  // it select p tag ahich have ID "second"
console.log(resultQueryID);

/**by Quesry selector: using class */

const resultQueryClass = document.querySelector(".para")  // it select p tag which have Class "para"
console.log(resultQueryClass);

/**by Quesry selector All*/

const resultQueryAll = document.querySelectorAll("p")  // it select all p tag from document 
console.log(resultQueryAll);    //it select as array
console.log(resultQueryAll[2]); //to get p tag at index position 2







