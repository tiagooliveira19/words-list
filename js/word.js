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

            let dataSearch = {
                'word' : word
            };

            searchWord (dataSearch, data);

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

// Searches word in database
function searchWord (dataSearch, data) {

    $.ajax({
        url: 'http://localhost:3000/entries/en/word',
        dataType: 'json',
        type: 'get',
        data: dataSearch,

        success: function (response) {

            // console.log(response);

            if (response) {
                
                toastr.warning('Already registered word!', '', {
                    closeButton: true,
                    progressBar: true,
                    positionClass: "toast-top-right",
                    preventDuplicates: true,
                    showDuration: "300",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut"
                });

            } else {
                registerWord (data);
            }
        },

        /* error: function (response) {

            toastr.warning(response['responseJSON']['message'], '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });
        } */
    });
}

// Registers word in database
function registerWord (data) {

    $.ajax({
        url: 'http://localhost:3000/entries/en/word',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {

            toastr.success('Word registered!', '', {
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
            }, 2000);
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

// Fetches and listing all words
function fetchesWords (page) {

    $.get('http://localhost:3000/entries/en?page=' + page, function (response) {

        var table_body = 'table-body';

        if (response['totalItems'] > 0) {

            $('#total-itens').html(response['totalItems']);
            $('#current-page').val(response['currentPage']);
            $('#div-pagination').removeClass('hidden').fadeIn('slow');

            disablesButton(response['currentPage'], response['totalPages']);

            let pageNumber = response['currentPage'] + 1;
            $('#page-number').html(pageNumber);

            $('#' + table_body).empty();

            $.each(response['words'], function (key, json) {

                $('#' + table_body)
                    .append(
                        '<tr>'+
                        '<td>'+ json['word'] +'</td>' +
                        '<td>'+ json['phonetic'] +'</td>' +
                        '<td>'+ json['meanings'] +'</td>' +
                        '<td>'+ json['favorite'] +'</td>' +
                        '</tr>'
                    );
            });
        } else {
            $('#table-body')
                .html('<tr class="txt-center"><td colspan="7">No record found!</td></tr>');
            $('#div-pagination').addClass('hidden');
        }
    });
}