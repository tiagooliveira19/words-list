// Fetches and listing all words
function fetchesWords (page) {

    $.get('http://localhost:3000/entries/en?page=' + page, function (response) {

        var table_body = 'table-body-historic';

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
                        '<td>'+ json['id'] +'</td>' +
                        '<td>'+ json['word'] +'</td>' +
                        '<td>'+ json['phonetic'] +'</td>' +
                        '<td>'+ json['meanings'] +'</td>' +
                        '<td>'+ json['favorite'] +'</td>' +
                        '</tr>'
                    );
            });
        } else {
            $('#table-body-historic')
                .html('<tr class="txt-center"><td colspan="7">No record found!</td></tr>');
            $('#div-pagination').addClass('hidden');
        }
    });
}