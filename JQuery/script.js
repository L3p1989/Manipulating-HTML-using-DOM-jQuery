$('body').prepend('<button type="submit">Submit</button>');

$('button[type="submit"]').click(function() {
    alert('You clicked me!')
})