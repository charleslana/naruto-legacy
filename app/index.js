import click from './events/click.js';
import loadPage from './events/loadPage.js';
import toTop from './components/toTop.js';
import './functions/prototype.js';

document.addEventListener('DOMContentLoaded', () => {
    toTop();
    click(loadPage);
    loadPage();
});