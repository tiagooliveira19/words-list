$(document).ready(function () {

    // Menu behavior
    $('#login').on('click', function () {
        $('#words, #historic').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.words, .historic').fadeOut('fast');
        $('.login').removeClass('hidden').fadeIn('slow');
    });

    $('#words').on('click', function () {
        $('#login, #historic').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.login, .historic').fadeOut('fast');
        $('.words, #form-content').removeClass('hidden').fadeIn('slow');
    });

    $('#historic').on('click', function () {
        $('#login, #words').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.login, .words').fadeOut('fast');
        $('.historic, #form-content-historic').removeClass('hidden').fadeIn('slow');
    });
});
