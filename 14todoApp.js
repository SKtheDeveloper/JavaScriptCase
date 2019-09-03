let todos = []
todos.push('make breakfast')
todos.push('iron clothes')
todos.push('call to mom')

todos.forEach(function(t, i) {
    console.log(`your work ${i + 1} is : ${t}`);
    
});

console.log("** next part **");


//other way from for loop and unshift method

let works = []
works.unshift('make breakfast')
works.unshift('iron clothes')
works.unshift('call to mom')

for (let index = works.length - 1; index >= 0; index--) {
    const element = works[index];
    console.log(`today ${works.length - index} work is : ${element}`)
    
}