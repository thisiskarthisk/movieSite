const movies = [];
const movieContainer = document.getElementById("movieContainer");
const saveMovie = document.getElementById("saveMovie");

saveMovie.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const rating = parseInt(document.getElementById("rating").value);
    const genres = document.getElementById("genres").value.split(",").map(g => g.trim());
    const info = document.getElementById("info").value;
    const watchLink = document.getElementById("watchLink").value;

    const posterFile = document.getElementById("poster").files[0];
    const logoFile = document.getElementById("logo").files[0];
    const castFiles = document.getElementById("cast").files;

    if (!posterFile || !logoFile || castFiles.length === 0) {
        alert("Please upload all required images.");
        return;
    }

    const poster = URL.createObjectURL(posterFile);
    const logo = URL.createObjectURL(logoFile);
    const cast = Array.from(castFiles).map(file => URL.createObjectURL(file));

    const movie = { title, director, rating, genres, info, poster, logo, cast, watchLink };
    movies.push(movie);
    renderMovies();
    const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
    movieModal.hide();
});

function renderMovies() {
    movieContainer.innerHTML = "";
    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="poster">
                <img src="${movie.poster}" alt="${movie.title}" class="img-fluid">
            </div>
            <div class="details">
                <img src="${movie.logo}" class="movie-logo img-fluid" alt="${movie.title}">
                <h3>Director: ${movie.director}</h3>
                <div class="movierating">
                    ${"<i class='fa-solid fa-star'></i>".repeat(movie.rating)}
                    ${"<i class='fa-regular fa-star'></i>".repeat(5 - movie.rating)}
                </div>
                <div class="tags">
                    ${movie.genres.map(genre => `<span class='badge bg-primary'>${genre}</span>`).join(" ")}
                </div>
                <div class="info">
                    <h4>Info</h4>
                    <p>${movie.info}</p>
                </div>
                <div class="cast">
                    <h4>Cast</h4>
                    <ul class="list-inline">
                        ${movie.cast.map(actor => `<li class='list-inline-item'><img src="${actor}" class="img-thumbnail" alt="${movie.title}"></li>`).join(" ")}
                    </ul>
                </div>
                <div class="watch">
                    <a href="${movie.watchLink}" target="_blank" class="btn btn-warning">Watch Movie</a>
                </div>
            </div>
        `;
        movieContainer.appendChild(card);
    });
}