<div id="form-content">

    <div class="col-md-12 mt-3 w-90 cabecalho display-flex">
        <div class="col-md-6">
            <label class="cabecalho-label">Words</label>
        </div>

        <div class="col-md-4"></div>
    </div>

    <div class="col-md-6 mt-5 display-flex">
        <div class="col-md-8 ms-5">
            <input class="form-control" type="text" id="search-word" placeholder="Type the word">
        </div>

        <div class="col-md-3 ml-10">
            <button class="btn btn-dark" type="button" id="btn-search">Search</button>
        </div>

        <div class="col-md-6"></div>
    </div>

    <div class="col-md-12 mt-4 div-info">
        <div class="col-md-11 margin-auto mt-5">
            <table class="table table-striped table-dark text-center">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Phonetic</th>
                        <th>Meanings</th>
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    <tr class="text-center">
                        <td colspan="7">No record found!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
