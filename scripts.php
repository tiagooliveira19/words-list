<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" 
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.5/jquery.inputmask.min.js"
        integrity="sha512-sR3EKGp4SG8zs7B0MEUxDeq8rw9wsuGVYNfbbO/GLCJ59LBE4baEfQBVsP2Y/h2n8M19YV1mujFANO1yA3ko7Q==" crossorigin="anonymous"></script>

<script src="js/toastr.js"></script>
<script type="text/javascript" src="/js/menu.js"></script>
<script type="text/javascript" src="/js/functions.js"></script>
<script type="text/javascript" src="/js/user.js"></script>
<script type="text/javascript" src="/js/word.js"></script>
<script type="text/javascript" src="/js/favorites.js"></script>
<script type="text/javascript" src="/js/historic.js"></script>
<script>

    $(document).ready(function () {

        // Fetches and listing all words in historic
        fetchesWords(0);
        fetchesWordsHistoric(0);

        // Changes layout structure when user is not logged
        startsPage();

        // Gets value of variable on localStorage
        let logged = localStorage.getItem('LOGGED');

        // Verifies if user is logged
        if (logged) {
            // Changes layout structure when user is logged
            userLogged();
        }

        // Signs out from application
        $('#sign-out').click(function () {

            // Cleans localStorage
            localStorage.removeItem('LOGGED');
            localStorage.removeItem('USER_LOGGED');

            toastr.warning('See you later!', '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "1500",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });

            // Reloads page
            setTimeout(function () {
                location.reload();
            }, 1800);
        });

        // Switches to login form
        $('#btn-register').click(function () {
            $('.login-form').fadeOut('slow', function () {
                $('.register-form').removeClass('hidden').fadeIn('slow');
            });
        });

        // Switches to register form
        $('#btn-login').click(function () {
            $('.register-form').fadeOut('slow', function () {
                $('.login-form').removeClass('hidden').fadeIn('slow');
            });
        });

        // Switches to next page (Favorites)
        $('#next').click(function () {

            let currentPage = $('#current-page').val();
            let page = parseInt(currentPage) + 1;

            fetchesWords(page);
        });

        // Switches to previous page (Favorites)
         $('#previous').click(function () {

            let currentPage = $('#current-page').val();
            let page = parseInt(currentPage) - 1;

            fetchesWords(page);
        });

        // Switches to next page (Historic)
        $('#next-historic').click(function () {

            let currentPage = $('#current-page-historic').val();
            let page = parseInt(currentPage) + 1;

            fetchesWordsHistoric(page);
        });

        // Switches to previous page (Historic)
        $('#previous-historic').click(function () {

            let currentPage = $('#current-page-historic').val();
            let page = parseInt(currentPage) - 1;

            fetchesWordsHistoric(page);
        });
    });
</script>
