'use strict';
const numberOfFilms = prompt("Сколько фильмов Вы посмотрели?", "200");
const personalMoveBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a=prompt("Один из последних просмотренных фильмов?", ""),
      b=prompt("На сколько оцените его?", ""),
      c=prompt("Один из последних просмотренных фильмов?", ""),
      d=prompt("На сколько оцените его?", "");

personalMoveBD.movies[a]=b;
personalMoveBD.movies[c]=d;

console.log(personalMoveBD);