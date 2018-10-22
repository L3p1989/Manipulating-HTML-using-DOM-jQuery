var btnSubmit = document.getElementsByClassName('btnSubmit');
var btnSubmitText = document.createTextNode("Submit");

var textInput = document.getElementsByTagName('input')

btnSubmit[0].appendChild(btnSubmitText);

btnSubmit[0].addEventListener('click', function() {
    alert(textInput[0].value)
});

