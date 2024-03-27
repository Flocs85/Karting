'use strict';

const burgerMenu = document.getElementById('burger-menu');
let burgerIsOpen = false;

function toggleBurgerMenu() {
    burgerIsOpen = !burgerIsOpen;

    if (burgerIsOpen) {
        burgerMenu.style.right = 0;
    } else {
        burgerMenu.style.right = '-350px';
    }
};

document.getElementById('burger-button').addEventListener('click', toggleBurgerMenu);
document.getElementById('burger-close').addEventListener('click', toggleBurgerMenu);