<div id="form-content-favorites">

    <div class="col-md-12 mt-3 w-90 cabecalho display-flex">
        <div class="col-md-6">
            <label class="cabecalho-label">Favorites</label>
            <i class="fa-solid fa-rotate-right reload pointer va-text-top" title="Reload"></i>
        </div>

        <div class="col-md-4"></div>
    </div>

    <div class="col-md-6 mt-5 display-flex">
        <div class="col-md-8 ms-5">
            <input class="form-control" type="text" id="search-word-favorites" placeholder="Type the word">
        </div>

        <div class="col-md-4"></div>
    </div>

    <div class="col-md-12 mt-4 div-info">
        <p><span id="total-itens">0</span> record(s) available in our database:</p>

        <div class="col-md-11 margin-auto mt-5">
            <table class="table table-striped table-dark text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Word</th>
                        <th>Phonetic</th>
                        <th>Meanings</th>
                        <th>User</th>
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody id="table-body-favorites">
                    <tr class="text-center">
                        <td colspan="7">No record found!</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <input type="hidden" id="current-page" value="">

        <div class="col-md-10 mt-4 mb-4 display-flex hidden" id="div-pagination">
            <div class="col-md-3"></div>
            <div class="col-md-4 text-center margin-auto">
                <span class="arrow-pagination" id="previous" title="Anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </span>
                <span id="page-number">1</span>
                <span class="arrow-pagination" id="next" title="Próxima">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </div>
        </div>
    </div>
</div>
