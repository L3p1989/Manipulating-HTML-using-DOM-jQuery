var inputSubmit = document.getElementsByClassName('input-submit')[0];
var inputSubmitText = document.createTextNode("Submit");

var textInput = document.getElementsByTagName('input')[0];

var colorDiv = document.getElementsByClassName('back-div')[0];

var colorText = document.createElement('p')
var ctText = document.createTextNode('Please click gently!')

var divBtn = document.createElement('button')
var divBtnText = document.createTextNode('Me?')
var myDiv = document.createElement('div')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};//this is a random number generator for 0-max

inputSubmit.appendChild(inputSubmitText);//adds text to #inputSubmit

inputSubmit.addEventListener('click', function() {
    alert(textInput.value)
});//alerts the value of textInput

colorDiv.addEventListener('mouseenter', function() {
    colorDiv.style.backgroundColor = 'purple'
});//when mouse enters colorDiv background turns purple

colorDiv.addEventListener('mouseleave', function() {
    colorDiv.style.backgroundColor = 'white'
});//returns to white when mouse leaves colorDiv

document.body.insertBefore(colorText, document.body.childNodes[7]);//creates colorText as body index 7
colorText.appendChild(ctText);//appends text to colorText

colorText.addEventListener('click', function() {
    colorText.style.color = "rgb(" + getRandomInt(255) + ", " + getRandomInt(255) + ", " + getRandomInt(255) + ")";
});//gives colorText a random text color when clicked

document.body.insertBefore(divBtn, document.body.childNodes[8]);//creates divBtn as body index 8
divBtn.appendChild(divBtnText);

document.body.insertBefore(myDiv, document.body.childNodes[9]);//creates myDiv as body index 9

divBtn.addEventListener('click', function() {
    var myNameSpace = document.createElement('span');
    var myName = document.createTextNode('Patrick')

    myDiv.appendChild(myNameSpace)
    myNameSpace.appendChild(myName)
});//adds myNameSpace with myName text to myDiv on divBtn click