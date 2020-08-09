"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 1; i < 3; i++) {
  let lastFilmFirst = prompt("Один из последних просмотренных фильмов");
  let rangeFirst = +prompt("На сколько оцените его?");

  if(  ( lastFilmFirst && rangeFirst != null ) && ( lastFilmFirst && rangeFirst != "" ) && ( lastFilmFirst.length <= 50 ) ) {
    personalMovieDB.movies[lastFilmFirst] = rangeFirst;

  } else {    
    console.log(`${lastFilmFirst} - Название фильма не может быть больше, чем 50 строк или быть пустой строкой/n Оценка не может быть пустой`);
    alert(`${lastFilmFirst} - Название фильма не может быть больше, чем 50 строк или быть пустой строкой/n Оценка не может быть пустой`);
    --i;
  }

}
console.log(personalMovieDB);
