//basic way

let sayHello = function () {
    console.log("here we defined function in basic way")
}                                                       //defined function

sayHello()                                          //call the function

// next way => assign varaible in function

let say_Hello = function (name) {
    console.log('welcome '+ name + '! Our Site')
    console.log(`hello ${name}`) //this quatos on ~ button
}                                                       

say_Hello('SK')              //call function with a string that we want pass in function

// next way => function using two variables

let nameAdder = function (firstName, lastName) {
    console.log(`hey! your full name is ${firstName} ${lastName}`)
}     
let fName = "Surendra"
let lName = "Saini"                                               

nameAdder(fName,lName) 

//next way => using numbers

let adder = function (num1, num2) {
    console.log(`Sum of the numbers is ${num1 + num2}`)
}                                                    

adder(10, 50)

//another way of doing the same

let nextAdder = function (num1, num2) {
    let addThis = num1 + num2
    return addThis
}                                                    

console.log(nextAdder(40, 50))

//next way => override value to don't want undefined value 

let nameAdder1 = function (firstName, lastName) {
    console.log(`hey! your full name is ${firstName} ${lastName}`)
}     
                                               
nameAdder1 ()  // you got result "hey! your full name is undefined undefined"



let nameAdder2 = function (firstName="blank", lastName="missing") {
    console.log(`hey! your full name is ${firstName} ${lastName}`)
}     
                                               
nameAdder2 ()  //you got result "hey! your full name is blank missing"


let nameAdder3 = function (firstName="blank", lastName="missing") {
    console.log(`hey! your full name is ${firstName} ${lastName}`)
}     
                                               
nameAdder3 ("Surendra", "saini")  //you got result "hey! your full name is Surendra saini"


// next way 

function hello(name) {
    return `this is new for you dear ${name}!`
    
}

console.log(hello("sk"))

