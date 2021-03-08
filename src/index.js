import './style.css';
import * as navModule from './navBar.js';
import * as initialModule from './initialPage.js';
import * as menuModule from './menuPage.js';
import * as contactModule from './contactPage';

const content = document.getElementById("content");

content.appendChild(navModule.navBar());
content.appendChild(initialModule.initialPage());
// content.appendChild(menuModule.menuPage());
// content.appendChild(contactModule.contactPage());
