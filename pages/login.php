<div class="login-form">
    <div class="col-md-12 w-90 cabecalho">
        <label class="cabecalho-label">Login</label>
    </div>

    <div class="col-md-12 mt-5">
        <div class="col-md-4 margin-auto">

            <div class="text-center">
                <img src="images/login.svg" class="w-35" alt="imagem-login" id="imagem-login" >
            </div>

            <form class="mt-5" autocomplete="off" id="login-form">
                <div class="col">
                    <input type="text" class="form-control" name="name" id="name" required placeholder="Name">
                </div>
                <div class="col mt-3">
                    <input type="password" class="form-control" name="password" id="password" required placeholder="Password">
                </div>

                <div class="col mt-3">
                    <button type="submit" class="btn btn-dark w-100">Login</button>
                </div>
                <div class="col mt-3">
                    <button type="button" class="btn btn-primary w-100" id="btn-register">Register</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="hidden register-form">
    <div class="col-md-12 w-90 cabecalho">
        <label class="cabecalho-label">Register</label>
    </div>

    <div class="col-md-12 mt-5">
        <div class="col-md-4 margin-auto">

            <div class="text-center">
                <img src="images/user.svg" class="w-35" alt="imagem-cadastro" id="imagem-cadastro" >
            </div>

            <form class="mt-5" autocomplete="off" id="register-form">
                <div class="col">
                    <input type="text" class="form-control" name="name" id="name" required placeholder="Name">
                </div>
                <div class="col mt-3">
                    <input type="password" class="form-control" name="password" id="password" required placeholder="Password">
                </div>
                <div class="col mt-3">
                    <input type="email" class="form-control" name="email" id="email" required placeholder="Email">
                </div>
                <div class="col mt-3">
                    <button type="submit" class="btn btn-dark w-100">Register</button>
                </div>
                <div class="col mt-3">
                    <button type="button" class="btn btn-primary w-100" id="btn-login">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
