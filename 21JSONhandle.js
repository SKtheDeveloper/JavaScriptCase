let obj = {
    name: 'SK',
    age: 20,
    isActive: true, 
}

console.log('the type of obj variable is : ' + typeof obj)

// to convert object(JSON) to string

let convertObjtoString = JSON.stringify(obj)

console.log('the type of variable after convertion : ' + typeof convertObjtoString)

//to store this string in local storage : uncomment to show

// localStorage.setItem('object', convertObjtoString) 

/*Note: Above code working when we attach this file to html file 
and check storage in browser
here first attribute is "key" and second one is "value(string)"*/

//To convert back string to object(JSON)

let convertStringtoObj = JSON.parse(convertObjtoString)
console.log('the type of variable after convert back : ' + typeof convertStringtoObj)

//now you can access the vlues under object once again

console.log(convertStringtoObj.age);

