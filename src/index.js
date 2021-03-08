import './style.css';
import { menuPage } from './menuPage.js';
import { contactPage } from './contactPage';

const content = document.getElementById('#content');


document.body.appendChild(menuPage);
document.body.appendChild(contactPage);