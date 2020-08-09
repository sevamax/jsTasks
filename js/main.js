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

let lastFilmFirst = prompt("Один из последних просмотренных фильмов");
let rangeFirst = +prompt("На сколько оцените его?");
let lastFilmSecond = prompt("Один из последних просмотренных фильмов");
let rangesecond = +prompt("На сколько оцените его?");

personalMovieDB.movies[lastFilmFirst] = rangeFirst;
personalMovieDB.movies[lastFilmSecond] = rangesecond;