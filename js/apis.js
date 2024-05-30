// Sends user data to api
/* $('#register-form').submit(function (e) {

    e.preventDefault();

    let data = $(this).serialize();

    registersUser(data);
}); */

// const { response } = require("express");

$('#btn-search').click(function () {

    let search = $('#search-word').val();

    $.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + search, function (response, status) {

        // console.log(status);

        if (status === 'success') {
            // console.log(response);

            let table_body = 'table-body';
            let word = response[0]['word'];
            let phonetics = [];
            let meanings = [];

            $('#' + table_body).empty();

            for (var i = 0; i < response[0]['phonetics'].length; i++) {
                if (response[0]['phonetics'][i]['text']) {
                    phonetics.push(response[0]['phonetics'][i]['text']);
                }
            }

            for (var i = 0; i < response[0]['meanings'].length; i++) {
                if (response[0]['meanings'][i]['partOfSpeech']) {
                    meanings.push(response[0]['meanings'][i]['partOfSpeech']);
                }
            }

            $('#' + table_body)
                    .append(
                        '<tr>'+
                        '<td>'+ word +'</td>' +
                        '<td>'+ phonetics.join(', ') +'</td>' +
                        '<td>'+ meanings.join(', ') +'</td>' +
                        '<td>'+ '' +'</td>' +
                        '</tr>'
                    );

            let data = {
                'word' : word,
                'phonetic' : phonetics.join(', '),
                'meanings' : meanings.join(', '),
                'favorite' : 0
            };

            registerWord (data);

        } else {
    
            toastr.error('No Definitions Found', '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });

            setTimeout(function () {
                location.reload();
            }, 5000);
        }
    });
});

// Registers user in database
function registersUser (data) {

    $.ajax({
        url: 'http://localhost:3000/api/usuarios/add',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {
            toastr.success('Successfully registered user!', '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });

            setTimeout(function () {
                $('.register-form').fadeOut('slow', function () {
                    $('.login-form').removeClass('hidden').fadeIn('slow');
                });
            }, 1500);
        },

        error: function (response) {

            toastr.error(response['responseJSON']['message'], '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });
        }
    });
}

// Sends user data to api (Login)
$('#login-form').submit(function (e) {

    e.preventDefault();

    let data = $(this).serialize();
    let name = $('#nome').val();

    fetchesUser(data, name);
});

// Fetches user in database
function fetchesUser (data, name) {

    $.ajax({
        url: 'http://localhost:3000/api/usuarios/login',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {

            localStorage.setItem('LOGADO', 'TRUE');
            localStorage.setItem('USUARIO_LOGADO', name);

            toastr.success('Welcome  ' + name + '!', '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });

            setTimeout(function () {
                userLogged();
            }, 1500);
        },

        error: function (response) {

            toastr.error(response['responseJSON']['message'], '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });
        }
    });
}

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

// Registers word in database
function registerWord (data) {

    $.ajax({
        url: 'http://localhost:3000/entries/en/word',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {

            setTimeout(function () {
                location.reload();
            }, 1500);
        },

        error: function (response) {

            toastr.error(response['responseJSON']['message'], '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });
        }
    });
}

// Fetches and listing all transactions
/* function fetchesTransactions (page) {

    $.get('http://localhost:3000/api/transacoes?page=' + page, function (response) {

        var table_body = 'table-body';

        if (response['totalItems'] > 0) {

            $('#total-itens').html(response['totalItems']);
            $('#current-page').val(response['currentPage']);
            $('#div-pagination').removeClass('hidden').fadeIn('slow');
            $('#div-upload').addClass('hidden').fadeOut('fast');

            disablesButton(response['currentPage'], response['totalPages']);

            let pageNumber = response['currentPage'] + 1;
            $('#page-number').html(pageNumber);

            $('#' + table_body).empty();

            let totalValue = 0;

            $.each(response['transacoes'], function (key, json) {

                let value = parseInt(json['valor']);
                let valueCents = value / 100000;
                let realValue = valueCents.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });

                totalValue = calculatesValues(json['tipo'], valueCents, totalValue);

                $('#' + table_body)
                    .append(
                        '<tr>'+
                        '<td>'+ json['id'] +'</td>' +
                        '<td>'+ json['tipo'] +'</td>' +
                        '<td>'+ formatesDateExibition(json['data']) +'</td>' +
                        '<td>'+ json['produto'] +'</td>' +
                        '<td>'+ realValue +'</td>' +
                        '<td>'+ json['vendedor'] +'</td>' +
                        '</tr>'
                    );
            });

            $('#total-value').html(totalValue.toLocaleString("en-US", {style: 'currency', currency: 'USD' }));

        } else {
            $('#table-body')
                .html('<tr class="txt-center"><td colspan="7">No record found!</td></tr>');
            $('#div-pagination').addClass('hidden');
        }
    });
} */

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
