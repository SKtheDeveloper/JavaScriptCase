// && => And Operator => all the condition need to be true...to enter the block
// || => Or Operator => one conditon need to be true ....to enter in block

let condition1 = false
let condition2 = false
let condition3 = false

if(condition1 && condition2 && condition3){
    console.log("i m enter in if block : that mean all condition true")
}else if(condition1 || condition2 || condition3){
    console.log("i m enter in else if block : that mean atleast one condition true")
}else{
    console.log("all the condition false")
}