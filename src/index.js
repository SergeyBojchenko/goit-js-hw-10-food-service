// import './sass/main.scss';
import objectMenu from './menu.json';
import markupTemplatesMenuCard from './template/menu-card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const listMenuRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

checkboxRef.addEventListener('change', onChangeTheme);

const menuCardsMarkup = createMenuCardMarkup(objectMenu);

function createMenuCardMarkup(objectMenu) {
 return objectMenu.map(markupTemplatesMenuCard).join('');
};

listMenuRef.insertAdjacentHTML('beforeend', menuCardsMarkup);

const defaultTheme = localStorage.getItem('theme') || Theme.LIGHT;
bodyRef.classList.add(defaultTheme);

checkboxRef.checked = defaultTheme === Theme.DARK;

function onChangeTheme(event) {
    event.preventDefault;
    if (checkboxRef.checked) {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

