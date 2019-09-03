/*class is siliar to fuction in defined but not exactly the same.
we can use many functions in it. */

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
/**constructor :-  is used to pass values in class */

//defined object for class

const user1 = new User('SK', 'Saini', 27);

//to access value from class
console.log(user1)   //result :- User { firstName: 'SK', lastName: 'Saini', age: 27 }

const user2 = new User();
console.log(user2)  //result :- User { firstName: undefined, lastName: undefined, age: undefined }

/* console not shown any error beacuse of constructor in above code*/

// to call function from class
console.log(user1.createFullName())

user1.updateName("surendra saini")

console.log(user1.createFullName())





