import './style.css';
import navBar from './navBar';
import initialPage from './initialPage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const content = document.getElementById('content');
content.appendChild(navBar());
content.appendChild(initialPage());
content.appendChild(menuPage());
content.appendChild(contactPage());

// const nav = document.getElementsByClassName("nav-elem");

document.querySelector('#content').addEventListener('click', (e) => {
  e.preventDefault();
  const navTab = e.target;
  const initial = document.querySelector('#initial-div');
  const menu = document.querySelector('#menu-div');
  const form = document.querySelector('#form-div');

  if (navTab.classList.contains('home')) {
    initial.style.display = 'flex';
    menu.style.display = 'none';
    form.style.display = 'none';
  } else if (navTab.classList.contains('menu')) {
    initial.style.display = 'none';
    menu.style.display = 'flex';
    form.style.display = 'none';
  } else if (navTab.classList.contains('contact')) {
    initial.style.display = 'none';
    menu.style.display = 'none';
    form.style.display = 'flex';
  }
});
