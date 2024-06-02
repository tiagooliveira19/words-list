// Fetches and listing all registers
function fetchesWordsHistoric (page) {

    // $.get('http://localhost:3000/entries/en?page=' + page, function (response) {
    $.get('http://localhost:3000/entries/en/historic/all?page=' + page, function (response) {

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

    $.ajax({
        url: 'http://localhost:3000/entries/en/historic/' + dataSearch['word'],
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
