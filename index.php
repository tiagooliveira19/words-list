<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'metas.php'; ?>
    <title>Words List</title>
</head>

<body>

<div class="container-fluid">

    <?php include 'pages/includes/navbar.php'; ?>

    <div class="row">
        <div class="col-md-12 main">
            <div class="col-md-12 conteudo">

                <div class="row login">
                    <?php include 'pages/login.php'; ?>
                </div>

                <div class="row hidden words">
                    <?php include 'pages/words.php'; ?>
                </div>

                <div class="row hidden favorites">
                    <?php include 'pages/favorites.php'; ?>
                </div>

                <div class="row hidden historic">
                    <?php include 'pages/historic.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'scripts.php'; ?>
</body>
</html>
