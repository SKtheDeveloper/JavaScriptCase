//method overriding :- is that we use same function in child class
//and also use constructor in child class
// parent class:- User ...and... Child class :- Teacher
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
    constructor(firstName, lastName, age, email){
        super(firstName, lastName, age); 
        //super method used as constructor of parent class 
        //..when we want to add more values in child class
        //if not defined super ..it will give error
        this.email = email;
    }
    // we create same function to understand that 
    //the function picked up by child class then parent class
    createFullName(){  
        let fullName = `Your full name is ${this.firstName} ${this.lastName} and your age is ${this.age}.You email id :- ${this.email}`;
        return fullName;

    }
}

const user1 = new Teacher('bahubali','saho', 28,'anything@gmail.com');

console.log(user1.createFullName())