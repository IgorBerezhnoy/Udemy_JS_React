/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...'
    ].sort((a,b)=>1-2)
};

let promo__adv = document.querySelector('.promo__adv-title');
let title = document.querySelector('.promo__adv-title');
let img = document.getElementsByTagName('img')
let promo__genre = document.getElementsByClassName('promo__genre')
let promo__item = document.getElementsByClassName('promo__interactive-item')
let bg =document.getElementsByClassName("promo__bg")
bg[0].style.backgroundImage="url('img/bg.jpg')"

promo__genre[0].textContent="Драма"
for (let i = 0; i < movieDB.movies.length; i++) {
    promo__item[i].textContent=(i+1)+" "+movieDB.movies[i]
}
console.log((movieDB.movies.sort((a,b)=>b-a)));



img[1].remove()
img[1].remove()
img[1].remove()
promo__adv.remove();
title.remove();

