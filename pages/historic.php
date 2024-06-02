<div id="form-content-historic">

    <div class="col-md-12 mt-3 w-90 cabecalho display-flex">
        <div class="col-md-6">
            <label class="cabecalho-label">Historic</label>
        </div>

        <div class="col-md-4"></div>
    </div>

    <div class="col-md-6 mt-5 display-flex">
        <div class="col-md-8 ms-5">
            <input class="form-control" type="text" id="search-word-historic" placeholder="Type the word">
        </div>

        <!-- <div class="col-md-3 ml-10">
            <button class="btn btn-dark" type="button" id="btn-search-historic">Search</button>
        </div> -->

        <div class="col-md-6"></div>
    </div>

    <div class="col-md-12 mt-4 div-info">
        <p><span id="total-itens-historic">0</span> record(s) available in our database:</p>

        <div class="col-md-11 margin-auto mt-5">
            <table class="table table-striped table-dark text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Word</th>
                        <th>Date</th>
                        <!-- <th>Actions</th> -->
                    </tr>
                </thead>
                <tbody id="table-body-historic">
                    <tr class="text-center">
                        <td colspan="7">No record found!</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <input type="hidden" id="current-page-historic" value="">

        <div class="col-md-10 mt-4 mb-4 display-flex hidden" id="div-pagination-historic">
            <div class="col-md-3"></div>
            <div class="col-md-4 text-center mx-auto">
                <span class="arrow-pagination" id="previous-historic" title="Anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </span>
                <span id="page-number-historic">1</span>
                <span class="arrow-pagination" id="next-historic" title="Próxima">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </div>
        </div>
    </div>
</div>
