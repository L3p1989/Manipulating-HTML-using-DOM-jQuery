var inputSubmit = document.getElementsByClassName('input-submit')[0];
var inputSubmitText = document.createTextNode("Submit");

var textInput = document.getElementsByTagName('input')[0];

var colorDiv = document.getElementsByClassName('back-div')[0];

var colorText = document.createElement('p')
var ctText = document.createTextNode('Please click gently!')

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

document.body.insertBefore(colorText, document.body.childNodes[7]);//inserts colorText before script
colorText.appendChild(ctText)

colorText.addEventListener('click', function() {
    colorText.style.color = "red"
})