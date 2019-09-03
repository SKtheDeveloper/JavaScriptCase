let MyTodos = [{
    title : "Go to Gym",
    isDone : true,
},{
    title : "Go to Market",
    isDone : true,
},{
    title : "Take Breakfast",
    isDone : true,
}]

let findMe = function (anytodo, title) {
    const index = anytodo.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
        
    })
    return anytodo[index]
    
}

console.log(findMe(MyTodos, "Go to Gym"));
console.log(findMe(MyTodos, "Go to gym"));
