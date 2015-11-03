// vanilla
document.querySelector('.vanilla-error')
        .addEventListener('click', function () {
            unicorn();// is not defined- triggers an error
        });

// jquery
$('.jquery-error').on('click', function () {
    $.error("$.error is called");// http://api.jquery.com/jquery.error/
});

// ajax
$('.ajax-error').on('click', function () {
    $.get('some-not-existed-url.404'); // get 404 request
});