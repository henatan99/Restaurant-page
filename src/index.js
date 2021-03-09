import './style.css';
import * as navModule from './navBar.js';
import * as initialModule from './initialPage.js';
import * as menuModule from './menuPage.js';
import * as contactModule from './contactPage';

const content = document.getElementById("content");
content.appendChild(navModule.navBar());
content.appendChild(initialModule.initialPage());
content.appendChild(menuModule.menuPage());
content.appendChild(contactModule.contactPage());

// const nav = document.getElementsByClassName("nav-elem");

document.querySelector('#content').addEventListener('click', (e) => {
    e.preventDefault();
    const navTab = e.target;
    const initial = document.querySelector('#initial-div');
    const menu = document.querySelector('#menu-div');
    const form = document.querySelector('#form-div');
    
    if(navTab.classList.contains('home')) {
        initial.style.display = 'flex';
        menu.style.display = 'none'
        form.style.display = 'none';
    }
    else if(navTab.classList.contains('menu')) {
        initial.style.display = 'none';
        menu.style.display = 'flex'
        form.style.display = 'none';
    }
    else if(navTab.classList.contains('contact')) {
        initial.style.display = 'none';
        menu.style.display = 'none';
        form.style.display = 'flex';
    }
    else {

    }
});
 

