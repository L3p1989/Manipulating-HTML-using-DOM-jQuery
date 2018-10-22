$('body').prepend('<button type="submit">Click</button>');

$('button[type="submit"]').click(function() {
    alert('You clicked me!')
});