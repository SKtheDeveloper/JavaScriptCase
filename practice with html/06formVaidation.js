
/*document.querySelector('#myForm').addEventListener('change', function (event) {
    console.log(event.target.value);
})*/ // by this event :- when you enter something in input box after that click outside the box ..you can see the value in console panel


/*document.querySelector('#myForm').addEventListener('input', function (event) {
    console.log(event.target.value);
})*/  // by this event :- when you enter something in input box ..you can see result ..at that time


/* now we do a assignment :- user can input only number between 5 to 30 */

function validation() {
    let myValue = document.querySelector('#myForm').value 

    if (isNaN(myValue) || myValue < 5 || myValue > 30) {
        alert("Plaese insert a numer between 5 to 30")
    }else{
        alert('value submitted')
    }

}

/*now for form validation :- 
Note :- when submit event occur page automatically load. 
        to stop this default setting we use prevent method  */

document.querySelector('.myClass').addEventListener('submit',(event) => {
    event.preventDefault();     //and from this function ..no url generate in the URL box 
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    event.target.firstname.value = ''; //to blank firstname input box 

})
