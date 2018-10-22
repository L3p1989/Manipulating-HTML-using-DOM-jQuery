function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};//this is a random number generator for 0-max

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

$("div:contains('Hey look')").hover(function() {
    $(this).css('background', 'purple');
}, function() {
    $(this).css('background', 'white');
});//changes background color of div when moused over

$("div:contains('Hey look')").after('<p>Click me!</p>');//creates `p` after `div`

$("p:contains('Click me')").click(function() {
    $(this).css('color', 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255));
});//adds 'click' function to `p`

$("p:contains('Click me')").after('<button>Me?</button>')

$('button:contains("Me?")').after('<div class= "my-div"></div>')

$('button:contains("Me?")').click(function() {
    $('.my-div').append('<p><span>Patrick</span></p>')
})