const myNewH1 = document.createElement('h1')
myNewH1.textContent = "this line add by javascript"
document.querySelector('body').append(myNewH1) //to insert in body tag

const myNewStyle = document.createElement('style')
myNewStyle.textContent = "this line add by javascript"
document.querySelector('head').append(myNewStyle) //to insert in head tag: you can check in elements in browser