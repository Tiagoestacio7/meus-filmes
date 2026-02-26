fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDM4N2QzOGI4ZWUxODU0ZDY3Y2M4MWIxNDFmZjU4ZCIsIm5iZiI6MTc3MTU0MzExMi4zMTUsInN1YiI6IjY5OTc5YTQ4MzE1MjllNTM0YjY2NjQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PchJ2tbWrok8SLI_Ob3Tpi5k43Ka2eH7sIpji3rwVWI'
    }
})
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results)

        const container = document.getElementById('featureMovies');
        container.innerHTML = ``;

        const cardMovies = data.results.map(function (i){
            const card = `
            <div class="col-6 col-sm-4 col-md-3">
                <div class="movie-card">
                    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/${i.poster_path}" class="card-img-top" alt="${i.original_title}">
                    <div class="card-body movie-info">
                    <div class="movie-title">${i.original_title}</div>
                    <div class="movie-date">${formatDate(i.release_date)}</div>
            </div>
        </div>`

         console.log(card)

         container.innerHTML += card;
        })
    })

    function formatDate(dateString){
        const [year, month, day] = dateString.split(`-`);
        return `${day}/${month}/${year}`
    }