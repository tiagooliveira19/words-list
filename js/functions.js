// const { response } = require("express");

// Changes layout structure when user is not logged
function startsPage () {
    $('#login').addClass('light-gray');
    $('.login').fadeIn('fast');
    $('.words, #form-content, #sign-out, .historic, #form-content-historic').addClass('hidden').fadeOut('fast');
}

// Changes layout structure when user is logged
function userLogged () {
    $('.login').addClass('hidden').fadeOut('fast');
    $('#login').removeClass('light-gray').fadeOut('fast');

    $('.words').removeClass('hidden').fadeIn('fast');
    $('#words').removeClass('hidden').addClass('light-gray').fadeIn('fast');
    $('#form-content, #sign-out, #historic').removeClass('hidden').fadeIn('fast');
}

/* function wordsHistoric () {
    $('#words').removeClass('light-gray').fadeOut('fast');
    $('.words, #form-content').addClass('hidden').fadeOut('fast');

    $('.historic').removeClass('hidden').fadeIn('fast');
    $('#historic').removeClass('hidden').addClass('light-gray').fadeIn('fast');
    $('#form-content-historic').removeClass('hidden').fadeIn('fast');
} */

// Changes date to database format
function formatesDate (data) {
    return data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + ' ' + data.toLocaleTimeString();
}

// Changes the date to display to users
function formatesDateExibition (data) {
    let date = new Date(data);
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString();
}

// Disables pagination buttons
function disablesButton (currentPage, totalPages) {
    if (currentPage === 0) {
        $('#previous').css({'pointer-events': 'none', 'color': '#CCCCCC'});
    } else {
        $('#previous').css({'pointer-events': 'all', 'color': 'inherit'});
    }

    if (currentPage === (totalPages - 1)) {
        $('#next').css({'pointer-events': 'none', 'color': '#CCCCCC'});
    } else {
        $('#next').css({'pointer-events': 'all', 'color': 'inherit'});
    }
}
