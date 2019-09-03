/* format
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
let days = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

for(i = 0; i < days.length; i++) {
    const element = days[i];
    console.log(element);
}

console.log("** /n next part /n **");

// in other way

for(i = 0; i <= days.length - 1; i = i + 1) {
    console.log(days[i]);
}

console.log("** /n In reverse order /n **");

// in reverse order

for(i = days.length - 1; i >= 0; i--) {
    console.log(days[i]);
}
