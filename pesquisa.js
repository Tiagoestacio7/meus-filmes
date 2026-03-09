document.getElementById("botaoPesquisar").addEventListener("click", pesquisar);

function pesquisar() {

    const busca = document.getElementById("entradaBusca").value;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${busca}&language=pt-BR&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDM4N2QzOGI4ZWUxODU0ZDY3Y2M4MWIxNDFmZjU4ZCIsIm5iZiI6MTc3MTU0MzExMi4zMTUsInN1YiI6IjY5OTc5YTQ4MzE1MjllNTM0YjY2NjQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PchJ2tbWrok8SLI_Ob3Tpi5k43Ka2eH7sIpji3rwVWI'
        }
    })

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            console.log(data.results);

            const container = document.getElementById('resultadoPesquisa');

            container.innerHTML = ``;

            const cardMovies = data.results.map(function (i) {

                const poster = i.poster_path
                    ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${i.poster_path}`
                    : `https://via.placeholder.com/440x660`;

                const card = `
                <div class="col-6 col-sm-4 col-md-3">

                    <div class="movie-card">

                        <img src="${poster}" class="card-img-top" alt="${i.title}">

                        <div class="card-body movie-info">

                            <div class="movie-title">${i.title}</div>

                            <div class="movie-date">${formatDate(i.release_date)}</div>

                        </div>

                    </div>

                </div>
                `;

                container.innerHTML += card;

            });

        });

}


// função para formatar data
function formatDate(dateString) {

    if (!dateString) return "Sem data";

    const [year, month, day] = dateString.split(`-`);

    return `${day}/${month}/${year}`;

}