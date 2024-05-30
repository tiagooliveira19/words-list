<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'metas.php'; ?>
    <title>Words List</title>
</head>

<body>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 main">
            <div class="col-md-2 menu">
                <div class="col-md-12 item-menu item-menu-ativo" id="login">
                    <div class="col-md-1 tarja"></div>
                    <div class="col-md-11 descricao">
                        Login
                    </div>
                </div>

                <div class="col-md-12 item-menu hidden" id="words">
                    <div class="col-md-1 tarja"></div>
                    <div class="col-md-11 descricao">
                        Words
                    </div>
                </div>
                <div class="col-md-12 menu-footer"></div>
            </div>

            <div class="col-md-10 conteudo">

                <div class="row login">
                    <?php include 'pages/login.php'; ?>
                </div>

                <div class="row hidden words">
                    <?php include 'pages/words.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'scripts.php'; ?>
</body>
</html>
