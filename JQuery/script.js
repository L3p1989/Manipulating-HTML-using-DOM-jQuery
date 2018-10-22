$('body').prepend('<button type="submit">Click</button>');//prepends first button

$("button:contains('Click')").click(function() {
    alert('You clicked me!')
});//first button function is to alert that you clicked it

$('button:contains("Submit")').click(function() {
    if ($('input').val() == '') {
        alert("You haven't typed anything")
    } else {
        alert($('input').val());
    }
});//submits input text as an alert if there's a value to display

$("div:contains('Hey')").hover(function() {
    $(this).css('background', 'purple');
}, function() {
    $(this).css('background', 'white');
});//changes background color of div when moused over
