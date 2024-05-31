$(document).ready(function () {

    // let login = 'login';
    // let words = 'words';

    // Menu behavior
    $('#login').on('click', function () {
        // $('#words').removeClass('item-menu-ativo');
        // $(this).addClass('item-menu-ativo');

        $('#words, #historic').removeClass('light-gray');
        $(this).addClass('light-gray');

        $('.words, .historic').fadeOut('fast');
        $('.login').removeClass('hidden').fadeIn('slow');
    });

    $('#words').on('click', function () {
        // $('#login').removeClass('item-menu-ativo');
        // $(this).addClass('item-menu-ativo');

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

    /* $('#' + login).on('mouseover', function () {
        $('#words').removeClass('mouseOverMenu');
        $(this).addClass('mouseOverMenu');
    }); */

    /* $('#' + words).on('mouseover', function () {
        $('#login').removeClass('mouseOverMenu');
        $(this).addClass('mouseOverMenu');
    }); */
});
