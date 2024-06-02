$(document).ready(function () {

    // Menu behavior
    $('#login').on('click', function () {
        $('#words, #favorites, #historic').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.words, .favorites, .historic').fadeOut('fast');
        $('.login').removeClass('hidden').fadeIn('slow');
    });

    $('#words').on('click', function () {
        $('#login, #favorites, #historic').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.login, .favorites, .historic').fadeOut('fast');
        $('.words, #form-content').removeClass('hidden').fadeIn('slow');
    });

    $('#favorites').on('click', function () {
        $('#login, #words, #historic').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.login, .words, .historic').fadeOut('fast');
        $('.favorites, #form-content-favorites').removeClass('hidden').fadeIn('slow');
    });

    $('#historic').on('click', function () {
        $('#login, #words, #favorites').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.login, .words, .favorites').fadeOut('fast');
        $('.historic, #form-content-historic').removeClass('hidden').fadeIn('slow');
    });
});
