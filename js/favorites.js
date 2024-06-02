// Fetches and listing all words
function fetchesWords (page) {

    $.get('http://localhost:3000/entries/en?page=' + page, function (response) {

        var table_body = 'table-body-favorites';

        if (response['totalItems'] > 0) {

            $('#total-itens').html(response['totalItems']);
            $('#current-page').val(response['currentPage']);
            $('#div-pagination').removeClass('hidden').fadeIn('slow');

            disablesButton(response['currentPage'], response['totalPages'], 'previous', 'next');

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
                        '<td>'+ verifiesFavorite (json['favorite'], json['word']) +'</td>' +
                        '</tr>'
                    );
            });
        } else {
            $('#table-body-favorites')
                .html('<tr class="text-center"><td colspan="7">No record found!</td></tr>');
            $('#div-pagination').addClass('hidden');
        }
    });
}

$(document).on("click", ".unfavorite", function() { 

    let word = $(this).attr('id');

    let data = {
        'word' : word
    };

    unfavoriteWord (data);
});

// Virifies favorite
function verifiesFavorite (favorite, word) {

    let icon = '';

    if (favorite === 1) {
        icon = '<i class="fa-solid fa-star icon-star unfavorite" id="'+ word +'" title="Unfavorite"></i>';
    } else {
        icon = '<i class="fa-regular fa-star icon-star favorite" id="'+ word +'" title="Favorite"></i>';
    }

    return icon;
}

// Favorites word
function favoriteWord (data) {

    $.ajax({
        url: 'http://localhost:3000/entries/en/word/favorite',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {

            toastr.success('Word favorited!', '', {
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
        }
    });
}

// Unfavorites word
function unfavoriteWord (data) {

    $.ajax({
        url: 'http://localhost:3000/entries/en/'+ data['word'] +'/unfavorite',
        dataType: 'json',
        type: 'delete',
        // data: data,

        success: function (response) {

            toastr.success('Word unfavorited!', '', {
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
        }
    });
}