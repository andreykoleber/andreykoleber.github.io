var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/js-logo.png') {
        myImage.setAttribute('src', 'images/js-logo2.png');
    } else {
        myImage.setAttribute('src', 'images/js-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName()  {
    var myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozzila is cool, ' + myName; 
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozzila is coll ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}