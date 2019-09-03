/* inheritance means simply use prewrite code with a method 
...so don't need to write whole code once again*/

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        
    }
    //now a function that join firstname and lastname
    createFullName(){  
        let fullName = `Your full name is ${this.firstName} ${this.lastName}`;
        return fullName;
    }

    updateName(newName){
        let newOne = newName.split(" ")
        this.firstName = newOne[0]
        this.lastName = newOne[1]

    }

}

// here we use Teacher as child class of parent class User
// Teacher can access all the method or functions of User

class Teacher extends User{

}

//here user defined in Teacher class w/o any constructor
let user1 = new Teacher('kabir', 'singh', 26)

//now we call from Teacher class
console.log(user1)  // result :- Teacher { firstName: 'kabir', lastName: 'singh', age: 26 }

// yeah we can access function also lets try
console.log(user1.createFullName())  //result:- Your full name is kabir singh

