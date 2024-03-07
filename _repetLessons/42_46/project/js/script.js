/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//1
const adv = document.querySelectorAll('.promo__adv img'),
  genre = document.querySelector('.promo__genre'),
  bg = document.querySelector('.promo__bg'),
  moviesList = document.querySelector('.promo__interactive-list'),
  movies = document.querySelectorAll('.promo__interactive-item');


adv.forEach(el => el.remove());


genre.textContent = 'драма';


bg.style.background = 'url(./img/bg.jpg)';
moviesList.innerHTML=""
const generteMovise = (movies) => {
  movies.forEach((el, i) => {
    moviesList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${el}</li>`;
  });
};

const movieDB = {
  movies: [
    'Лига справедливости',
    'Ла-ла лэнд',
    'Marvel',
    'Aaa',
    'Одержимость',
    'Скотт Пилигрим против...'
  ]
};

generteMovise(movieDB.movies.sort());
