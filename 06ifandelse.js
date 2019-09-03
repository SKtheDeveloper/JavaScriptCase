/*
format :-

if (condition){
        place code here;
}else{
    place code here;
}
*/
//remember condition must be true or false ...nothing else
// example:- if age < 18 => he cannot vote  
// if age >18 => he can vote
//if age = 18 => decision pending

let age = 18

if (age > 18){
    console.log("He Can Vote")
}else if (age < 18){
    console.log("He Can't Vote")
}else{
    console.log("Decision Pending")
}

