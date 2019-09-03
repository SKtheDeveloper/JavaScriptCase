//foreach specially used fro arry for better practice
//foreach automatically count length of array

/*format
array.forEach(element => {
    
});
*/


const days = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

days.forEach(function(day) {
    console.log(day);
    
});             // "day" keyword is a variable ..u can change it to any word like "i" or "y"

console.log("** next Part **");


days.forEach(function(day, index) {
    console.log(`start with ${index + 1} ----- ${day}`);
    
});             //here "index" keyword use for index position..and u can also use keyword as your prefrence not neccessary "index" ,,but in function second position is for index
