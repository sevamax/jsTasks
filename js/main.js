"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = { 
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
    if(personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log(`Произошла ошибка. Перезагрузите страницу и попробуйте еще  ${personalMovieDB.count} `);
    }
  }


function addNewFilm() {
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
}

function writeYourGenres() {
  for(let i = 1; i <= 3; i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`); 
  }
}

function showMyDB() {
  if(!personalMovieDB.privat) {
    console.log(personalMovieDB);
  } else {
    console.log('You have no permission to watch DataBase');
  }
}





detectPersonalLevel();
// addNewFilm();
writeYourGenres();
showMyDB();

