// Sends user data to api
$('#register-form').submit(function (e) {

    e.preventDefault();

    let data = $(this).serialize();

    registersUser(data);
});

// Sends user data to api (Login)
$('#login-form').submit(function (e) {

    e.preventDefault();

    let data = $(this).serialize();
    let name = $('#name').val();

    fetchesUser(data, name);
});

// Registers user in database
function registersUser (data) {

    $.ajax({
        url: 'http://localhost:3000/api/users/add',
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

// Fetches user in database
function fetchesUser (data, name) {

    $.ajax({
        url: 'http://localhost:3000/api/users/login',
        dataType: 'json',
        type: 'post',
        data: data,

        success: function (response) {

            localStorage.setItem('LOGGED', 'TRUE');
            localStorage.setItem('USER_LOGGED', name);

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