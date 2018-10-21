var btnSubmit = document.createElement('button', 'type="submit"');
var btnSubmitText = document.createTextNode("Submit")

btnSubmit.appendChild(btnSubmitText);
document.body.appendChild(btnSubmit);

btnSubmit.addEventListener('click', function() {
    alert('You clicked me!')
})