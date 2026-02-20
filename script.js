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
    console.log(data.results);
    })