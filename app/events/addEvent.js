import { login, showLogin } from '../html/login/login.js';
import carousel from '../components/carousel.js';
import { listCharacters, listVillages, register } from '../html/register/register.js';
import logout from '../html/logout/logout.js';
import { navDetails, navMenu, navChat } from '../html/nav.js';
import { modalDailyReward } from '../components/modal.js';
import settings from '../html/settings/settings.js';
import { showUserData } from '../html/storage/storage.js';
import news from '../html/news/news.js';
import { addLanguageSubmit, language } from '../language/index.js';

export const addEvent = (loadPage) => {
    addLanguageSubmit();
    language();

    login();
    showLogin();

    listCharacters();
    carousel();
    listVillages();
    register();

    showUserData();
    logout(loadPage);

    news();
    modalDailyReward();

    settings();

    M.updateTextFields();

    //remove
    const goToPage = document.getElementById('go-to-page');
    if (goToPage) {
        goToPage.addEventListener('click', (event) => {
            event.preventDefault();
            loadPage('settings');
        });
    }
}

export const preEvent = () => {
    navDetails();
    navMenu();
    navChat();
}