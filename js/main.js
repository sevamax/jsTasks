"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  privat: false
};

for(let i = 1; i < 3; i++) {
  let lastFilmFirst = prompt("Один из последних просмотренных фильмов"),
      rangeFirst = +prompt("На сколько оцените его?");

    personalMovieDB.movies[lastFilmFirst] = rangeFirst;
    
}
console.log(personalMovieDB);
