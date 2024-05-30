<div class="login-form">
    <div class="col-md-12 w-90 cabecalho">
        <label class="cabecalho-label">Login</label>
    </div>

    <div class="col-md-12 mt-5">
        <div class="col-md-4 margin-auto">

            <div class="txt-center">
                <img src="images/login.svg" class="w-35" alt="imagem-login" id="imagem-login" >
            </div>

            <form class="mt-5" autocomplete="off" id="login-form">
                <div class="col">
                    <input type="text" class="form-control" name="nome" id="nome" required placeholder="Name">
                </div>
                <div class="col mt-3">
                    <input type="password" class="form-control" name="senha" id="senha" required placeholder="Password">
                </div>

                <div class="col mt-3">
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                </div>
                <div class="col mt-3">
                    <button type="button" class="btn btn-danger w-100" id="btn-register">Register</button>
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

            <div class="txt-center">
                <img src="images/user.svg" class="w-35" alt="imagem-cadastro" id="imagem-cadastro" >
            </div>

            <form class="mt-5" autocomplete="off" id="register-form">
                <div class="col">
                    <input type="text" class="form-control" name="nome" id="nome" required placeholder="Name">
                </div>
                <div class="col mt-3">
                    <input type="password" class="form-control" name="senha" id="senha" required placeholder="Password">
                </div>
                <div class="col mt-3">
                    <input type="tel" class="form-control" name="telefone" id="telefone" required placeholder="Phone">
                </div>
                <div class="col mt-3">
                    <input type="text" class="form-control" name="endereco" id="endereco" required placeholder="Address">
                </div>

                <div class="col mt-3">
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                </div>
                <div class="col mt-3">
                    <button type="button" class="btn btn-danger w-100" id="btn-login">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
