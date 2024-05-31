// const { response } = require("express");

// Changes layout structure when user is not logged
function startsPage () {
    $('#login').addClass('item-menu-ativo');
    $('.login').fadeIn('fast');
    $('.words, #form-content').addClass('hidden').fadeOut('fast');
}

// Changes layout structure when user is logged
function userLogged () {
    $('.login').addClass('hidden').fadeOut('fast');
    $('#login').removeClass('item-menu-ativo').fadeOut('fast');

    $('.words').removeClass('hidden').fadeIn('fast');
    $('#words').removeClass('hidden').addClass('item-menu-ativo').fadeIn('fast');
    $('#form-content').removeClass('hidden').fadeIn('fast');
}

// Calculates the total value of transactions
/* function calculatesValues (type, value, totalValue) {

    if (type === '1' || type === '2' || type === '4') {
        totalValue+= value;
    } else {
        totalValue-= value;
    }

    return totalValue;
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
