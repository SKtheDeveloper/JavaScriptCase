let myTodo = {
    day : "monday",
    mettings : 0,
    meetDone : 0,
}

let addMetting = function (todo, meet = 0) {
    todo.mettings = todo.mettings + meet
}

let meetDone = function (todo, meet = 0) {
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function(todo){
    todo.mettings = 0
    todo.meetDone = 0
}

let summaryOfDay = function(todo){
    let meetLeft = todo.mettings - todo.meetDone
    return "Remain " + meetLeft + " mettings"
}

addMetting(myTodo, 9)

meetDone(myTodo, 6)

console.log(summaryOfDay(myTodo));
