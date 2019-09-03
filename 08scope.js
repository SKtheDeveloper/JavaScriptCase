// scopes - (in simple meaning area)  1. Global 2. Local
// here you find yhe difference b/w "let" and "var"

let iamGlobal = "Global"

if(true){
    let iamLocal = "Local" //inside the code block the variable defined by "let" is in local scope if it is defined by "var" then it can be in global scope
    iamGlobal = "Global Changed"
    newVar = "yes i am Global" // if we not defined by "let" or "var" then the variable will be global variable
    console.log(iamGlobal)
    console.log(iamLocal)
    console.log(newVar)
}
console.log(iamGlobal) // if condition is true result will "Global Changed" and if condition is false result will be "Global"

// that mean we can change value of global variable every where but not same for the local variable
// and for better practice must be use "let" for defined variables