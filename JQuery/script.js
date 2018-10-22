function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};//this is a random number generator for 0-max

var friends = ['Steph', 'Julius', 'Glenn', 'Jason', 'Tyler', 'Saoirse', 'Mishka', 'Polka', 'Namira', 'Louie'];

var friendCount = 0;

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

$("p:contains('Click me')").after('<button>Me?</button>');//adds button after `p`

$('button:contains("Me?")').after('<div class= "my-div"></div>');//adds `div` after `button`

$('button:contains("Me?")').click(function() {
    $('.my-div').append('<p><span>Patrick</span></p>')
});//creates `p` with `span` inside containing my name in text

$('button:contains("Friends")').click(function() {
    if (friendCount !== 10) {
        $('ul').append('<li>' + friends[friendCount] + '</li>');//adds current friend to `ul` as an `li`
    friendCount++;
    } else {
        alert("There are no more friends to list.");
    };
});//This will put a friends name into an `li` until there's no one else to list