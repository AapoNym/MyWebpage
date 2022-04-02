let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/banner-temp.png'){
        myImage.setAttribute('src', 'images/banner-offline.png');
    } else{
        myImage.setAttribute('src', 'images/banner-temp.png');
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function(){
    setUserName();
}
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('please enter your name')
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'My html testing page, ' + myName;
    }
}