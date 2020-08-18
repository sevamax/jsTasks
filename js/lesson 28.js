'use strict'

const box = document.getElementById('box'); // определенный элемент

const buttons = document.getElementsByTagName('button'); // коллекция

const circles = document.getElementsByClassName('circle'); // коллекция


// более современный способ

const hearts = document.querySelectorAll('.heart'); // коллекция


hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');