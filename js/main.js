"use strict";

const personalMovieDB = { 
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    do {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      } while (this.count == '' || this.count == null || isNaN(this.count) );
  }, 
  detectPersonalLevel: function() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log(`Произошла ошибка. Перезагрузите страницу и попробуйте еще  ${personalMovieDB.count} `);
    }
  },
  addNewFilm: function() {
    for (let i = 1; i < 3; i++) {
      let lastFilmFirst = prompt("Один из последних просмотренных фильмов");
      let rangeFirst = +prompt("На сколько оцените его?");
  
      if (  ( lastFilmFirst && rangeFirst != null ) && ( lastFilmFirst && rangeFirst != "" ) && ( lastFilmFirst.length <= 50 ) ) {
        personalMovieDB.movies[lastFilmFirst] = rangeFirst;
  
      } else {    
        console.log(`${lastFilmFirst} - Название фильма не может быть больше, чем 50 строк или быть пустой строкой/n Оценка не может быть пустой`);
        alert(`${lastFilmFirst} - Название фильма не может быть больше, чем 50 строк или быть пустой строкой/n Оценка не может быть пустой`);
        --i;
      }
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 2; i++){

      genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres == null) {
        console.log('некорректные данные');
        i--; 
      } else {
        genres = genres.split(', ');
        genres = genres.sort();
      }
    }

    genres.forEach(function(item, i) {
      console.log(`Любимый жанр #${i+1} - это ${item} `)
    });
  },
  showMyDB: function() {                                     
    console.log(personalMovieDB.privat ? 'You have no permission to watch DataBase' : personalMovieDB);                                      
  },
  toggleVisibleMyDB: function() {
    personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;                            
  }

};
let {genres} = personalMovieDB;
personalMovieDB.start();

// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();


// personalMovieDB.detectPersonalLevel();
// addNewFilm();
personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();

