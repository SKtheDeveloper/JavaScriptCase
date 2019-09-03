let jhon = {
    name : "I am Jhon",
    age : 24,
    isActive : true,
}

let don = {
    name : "I am Don",
    age : 29,
    isActive : true,
}

let kon = {
    name : "I am Kon",
    age : 27,
    isActive : false,
}

let users = new Map() // defined Map ....it is similar to object but not exactely same

users.set('JohnString', jhon)   //insert data to map
users.set('DonString', don)
users.set('KonString', kon)

console.log(users)
/*
map store object as :-  'JohnString' => { name: 'I am Jhon', age: 24, isActive: true },
*/
console.log(users.size) //result the total number of object in map

console.log(users.get('DonString')) //get the data by string or key

console.log(users.keys()) // result :- [Map Iterator] { 'JohnString', 'DonString', 'KonString' }

console.log(users.values())  /*result :- [Map Iterator] {
                                            { name: 'I am Jhon', age: 24, isActive: true },
                                            { name: 'I am Don', age: 29, isActive: true },
                                            { name: 'I am Kon', age: 27, isActive: false } 
                                } */

//another way to extract keys from map

for (const key of users.keys()) {
    console.log(key)
    
} /*result:-    JohnString
                DonString
                KonString
    */

for (const value of users.values()) {
    console.log(value)
    
}   /*result:-  { name: 'I am Jhon', age: 24, isActive: true }
                { name: 'I am Don', age: 29, isActive: true }
                { name: 'I am Kon', age: 27, isActive: false } 
    */

for (const value of users.values()) {
    console.log(value.name)
    
}   /*result:-  I am Jhon
                I am Don
                I am Kon 
    */

for (const [key, value] of users.entries()) {
    console.log(`kay name "${key}" and the saved string is:  ${value.name}`)
}