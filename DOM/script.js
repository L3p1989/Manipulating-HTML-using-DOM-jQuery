var inputSubmit = document.getElementsByClassName('input-submit')[0];
var inputSubmitText = document.createTextNode("Submit");

var textInput = document.getElementsByTagName('input')[0];

var colorDiv = document.getElementsByClassName('back-div')[0];

var colorText = document.createElement('p')

inputSubmit.appendChild(inputSubmitText);//adds text to #inputSubmit

inputSubmit.addEventListener('click', function() {
    alert(textInput.value)
});//alerts the value of textInput

colorDiv.addEventListener('mouseenter', function() {
    colorDiv.style.backgroundColor = 'purple'
}) ; 

colorDiv.addEventListener('mouseleave', function() {
    colorDiv.style.backgroundColor = 'white'
});

document.body.insertBefore(colorText, document.body.childNodes[7]);