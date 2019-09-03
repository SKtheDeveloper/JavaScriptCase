var ul = document.getElementById("list")
var li
var data

document.getElementById("add").addEventListener('click', addToDo)


document.getElementById("remove").addEventListener('click', removeToDo)


function addToDo() {
    // get the value from input box
    data = document.getElementById('data')
    var item = data.value

    // insert value as textnode or create textnode
    var textNode = document.createTextNode(item)
    
    // create li tag
    li = document.createElement('li')

    //create input tag with type and id
    var checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    checkBox.setAttribute('id', 'check')

    //create label tag
    var label = document.createElement('label')
    
    //check that value is not empty
    if(item ==""){
        alert('Paese write your todo in box')
    }else{
        ul.appendChild(li)
        li.appendChild(checkBox)
        li.appendChild(label)
        label.appendChild(textNode)
        ul.insertBefore(li, ul.childNodes[0])
        data.value = '';
    }
}

function removeToDo() {
    li = ul.children  //children used to access inner tags
    console.log(li)
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        console.log(element)
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
        
    }

}
/* this is another one :-

function removeToDo() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        // console.log(element.childNodes[1].checked);
        // console.log(element.childNodes[2]);
        
        if(element.childNodes[1].checked == true){
            // element.childNodes[1].remove()
            // element.childNodes[2].remove()
            console.log(element.children)
            var childLen = element.children.length
            //console.log(childLen);
            
            element.remove()
         }
            
            
          
    }
    
}

*/