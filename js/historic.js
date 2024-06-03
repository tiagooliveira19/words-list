$('#search-word-historic').keyup(function () {
    
    let search = $(this).val();
    searchWordHistoricLike (search);

    if (!search) {
        setTimeout(function () {
            fetchesWordsHistoric(0);
        }, 2000); 
    }
});

// Fetches and listing all registers
function fetchesWordsHistoric (page) {

    let user = localStorage.getItem('USER_LOGGED');

    $.get(`http://localhost:3000/entries/en/historic/all/word/${user}/?page=` + page, function (response) {

        // console.log(response)

        var table_body = 'table-body-historic';

        if (response['totalItems'] > 0) {

            $('#total-itens-historic').html(response['totalItems']);
            $('#current-page-historic').val(response['currentPage']);
            $('#div-pagination-historic').removeClass('hidden').fadeIn('slow');

            disablesButton(response['currentPage'], response['totalPages'], 'previous-historic', 'next-historic');

            let pageNumber = response['currentPage'] + 1;
            $('#page-number-historic').html(pageNumber);

            $('#' + table_body).empty();

            $.each(response['historics'], function (key, json) {

                $('#' + table_body)
                    .append(
                        '<tr>'+
                        '<td>'+ json['id'] +'</td>' +
                        '<td>'+ json['word'] +'</td>' +
                        '<td>'+ formatesDateExibition(json['createdAt']) +'</td>' +
                        '<td>'+ json['user'] +'</td>' +
                        '</tr>'
                    );
            });
        } else {
            $('#table-body-historic')
                .html('<tr class="text-center"><td colspan="7">No record found!</td></tr>');
            $('#div-pagination-historic').addClass('hidden');
        }
    });
}

// Searches word in historic
function searchWordHistoric (dataSearch, data) {

    let user = localStorage.getItem('USER_LOGGED');

    $.ajax({
        url: 'http://localhost:3000/entries/en/historic/' + dataSearch['word'] + '/' + user,
        dataType: 'json',
        type: 'get',
        // data: dataSearch,

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
        }
    });
}

// Searches word (Like)
function searchWordHistoricLike (dataSearch) {

    let user = localStorage.getItem('USER_LOGGED');

    $.ajax({
        url: 'http://localhost:3000/entries/en/historic/like/' + dataSearch + '/' + user,
        dataType: 'json',
        type: 'get',

        success: function (response) {

            if (response['totalItems'] > 0) {

                // console.log(response);

                var table_body = 'table-body-historic';


                $('#total-itens-historic').html(response['totalItems']);
                $('#current-page-historic').val(response['currentPage']);
                $('#div-pagination-historic').removeClass('hidden').fadeIn('slow');

                disablesButton(response['currentPage'], response['totalPages'], 'previous-historic', 'next-historic');

                let pageNumber = response['currentPage'] + 1;
                $('#page-number-historic').html(pageNumber);


                $('#' + table_body).empty();

                $.each(response['historics'], function (key, json) {

                    $('#' + table_body)
                        .append(
                            '<tr>'+
                            '<td>'+ json['id'] +'</td>' +
                            '<td>'+ json['word'] +'</td>' +
                            '<td>'+ formatesDateExibition(json['createdAt']) +'</td>' +
                            '<td>'+ json['user'] +'</td>' +
                            '</tr>'
                        );
                });
            } else {
                $('#table-body-historic')
                    .html('<tr class="text-center"><td colspan="7">No record found!</td></tr>');
                $('#div-pagination-historic').addClass('hidden');
            }
        }
    });
}

// Registers word in database
function registerWord (data) {

    $.ajax({
        url: 'http://localhost:3000/entries/en/historic/word',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {

            toastr.success('Word registered in historic!', '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "300",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });

            /* setTimeout(function () {
                location.reload();
            }, 2000); */
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
