const netflixOriginals =
  "https://api.themoviedb.org/3/discover/tv?api_key=947b0f0af52c9b74afa43eed2267820d&with_networks=213";
const trending =
  "https://api.themoviedb.org/3/trending/all/week?api_key=947b0f0af52c9b74afa43eed2267820d&language=en-US";
const topRated =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=947b0f0af52c9b74afa43eed2267820d&language=en-US";
const discovery =
  "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&with_genres=";
const action =
  "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&with_genres=28";
const adventure =
  "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&with_genres=12";
const animation =
  "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&with_genres=16";
const comedy =
  "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&with_genres=35";
const crime =
  "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&with_genres=80";
const documentary = discovery + "99";
const drama = discovery + "18";
const family = discovery + "10751";
const fantasy = discovery + "14";
const hist = discovery + "36";
const horror = discovery + "27";
const music = discovery + "10402";
const mystery = discovery + "9648";
const romance = discovery + "10749";
const sciFic = discovery + "878";
const tvMovie = discovery + "10770";
const thriller = discovery + "53";
const war = discovery + "10752";
const western = discovery + "37";

window.onload = () => {
  fetchMovies(netflixOriginals, ".original__movies", "poster_path");
  fetchMovies(trending, "#trending", "backdrop_path");
  fetchMovies(topRated, "#topRated", "backdrop_path");
  fetchMovies(action, "#actionList", "backdrop_path");
  fetchMovies(adventure, "#adventureList", "backdrop_path");
  fetchMovies(animation, "#animationList", "backdrop_path");
  fetchMovies(comedy, "#comedyList", "backdrop_path");
  fetchMovies(crime, "#crimeList", "backdrop_path");
  fetchMovies(documentary, "#documentaryList", "backdrop_path");
  fetchMovies(drama, "#dramaList", "backdrop_path");
  fetchMovies(family, "#familyList", "backdrop_path");
  fetchMovies(fantasy, "#fantasyList", "backdrop_path");
  fetchMovies(hist, "#historyList", "backdrop_path");
  fetchMovies(horror, "#horrorList", "backdrop_path");
  fetchMovies(music, "#musicList", "backdrop_path");
  fetchMovies(mystery, "#mysteryList", "backdrop_path");
  fetchMovies(romance, "#romanceList", "backdrop_path");
  fetchMovies(sciFic, "#sciFicList", "backdrop_path");
  fetchMovies(tvMovie, "#tvMovieList", "backdrop_path");
  fetchMovies(thriller, "#thrillerList", "backdrop_path");
  fetchMovies(war, "#warList", "backdrop_path");
  fetchMovies(western, "#westernList", "backdrop_path");
  //fetchGenres();
};

function fetchMovies(url, selector, path) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong");
      }
    })
    .then((data) => {
      showMovies(data, selector, path);
    })
    .catch((error_data) => {
      console.log(error_data);
    });
}

function showMovies(movies, selector, path) {
  var moviesEl = document.querySelector(selector);
  
  for (var movie of movies.results) {
    
    var image = ` <img src="https://image.tmdb.org/t/p/original${movie[path]}"></img>`;
      moviesEl.innerHTML += image;
      if (selector != ".original__movies") {
        //if title is undefined then use original_name
        var text = `<span class="movie__title">${movie.title ? movie.title : movie.original_name}</span>`;
        moviesEl.innerHTML += text;
       
      }
  }
}

/** 
function fetchGenres() {
  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong");
      }
    })
    .then((data) => {
      getMoviesByGenre(data);
    })
    .catch((error_data) => {
      console.log(error_data);
    });
}

function getMoviesByGenre(genreList) {
  //html elem for each genre header
  //html elem for each genre list
  var genHeaderElem = document.querySelector("#genreHeader");
  //var genListElem = document.querySelector("#genreList");
  for (var genre of genreList.genres) {
    //genre.id genre.name;
    //console.log(genre);
    var h = `<h2>${genre.name}</h2>`;
    genHeaderElem.innerHTML += h;
    genListElem.innerHTML +=
    fetchMovies(discovery + genre.id, "#genreList", "backdrop_path");
    
  }
}

*/
