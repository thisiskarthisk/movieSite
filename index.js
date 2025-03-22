const movies = [
    { title: "Interstellar",image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" , description: "A thief who enters dreams.", rating: "8.8", trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0" ,download: "https://www.youtube.com/watch?v=YoHD9XEInc0"},
    { title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", description: "Batman faces the Joker.", rating: "9.0", trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY" ,download: "https://www.youtube.com/watch?v=EXeTwQWrcwY"},

];

document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movie-container");

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <p>⭐ ${movie.rating}</p>
                <p class="trailer"><a href="${movie.trailer}" target="_blank">▶️ Watch Trailer</a></p>   
                <p class="download"><a href="${movie.download}" target="_blank">⬇️ Download Movie</a></p>
        `;

        movieContainer.appendChild(movieCard);
    });
});
