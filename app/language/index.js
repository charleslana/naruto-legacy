import translateEnglish from './english.js';
import translatePortuguese from './portuguese.js';
import { getStorage, saveStorage } from '../html/storage/storage.js';

export const addLanguageSubmit = () => {
    const languagePortuguese = document.getElementById('language-portuguese');
    if (languagePortuguese) {
        languagePortuguese.addEventListener('click', () => {
            saveStorage('language', 'pt');
            language();
        });
    }

    const languageEnglish = document.getElementById('language-english');
    if (languageEnglish) {
        languageEnglish.addEventListener('click', () => {
            saveStorage('language', 'en');
            language();
        });
    }
}

export const getLanguage = () => {
    const getTranslations = getStorage('language');
    return getTranslations === 'pt' || !getTranslations ? translatePortuguese : translateEnglish;
}

export const language = () => {
    const getTranslations = getStorage('language');

    const iconLanguage = document.getElementById('icon-language');
    if (iconLanguage && getTranslations) {
        iconLanguage.src = `assets/img/languages/${getTranslations}.png`;
    }

    modalTranslate(getTranslations);

    const translate = getLanguage();

    index(translate);
    footer(translate);
    notLogged(translate);
    home(translate);
    login(translate);
    register(translate);
}

const modalTranslate = (getTranslations) => {
    const elements = document.getElementById('modal-language');
    if (elements && !getTranslations) {
        let instance = M.Modal.init(elements, {
            endingTop: '13%',
            dismissible: false
        });
        instance.open();
    }

    const addSubmitModal = document.getElementById('form-change-language');
    if (addSubmitModal) {
        addSubmitModal.addEventListener('submit', (event) => {
            event.preventDefault();
            const chooseLanguage = document.querySelector('input[name="groupLanguage"]:checked').value;
            saveStorage('language', chooseLanguage);
            language();
            let instance = M.Modal.getInstance(elements);
            instance.close();
        });
    }
}

const index = (translate) => {
    let element;

    element = document.querySelector('.btn-to-top');
    if (element) {
        element.innerText = translate.GO_TO_UP;
    }
}

const notLogged = (translate) => {
    let element;

    element = document.querySelector('#nav-not-logged ul.right > li:nth-child(1) > a');
    if (element) {
        element.innerText = translate.NOT_LOGGED_NAV_A;
    }

    element = document.querySelector('#nav-not-logged ul.right > li:nth-child(2) > a');
    if (element) {
        element.innerText = translate.NOT_LOGGED_NAV_B;
    }

    element = document.querySelector('#nav-not-logged ul.right > li:nth-child(3) > a');
    if (element) {
        element.innerText = translate.NOT_LOGGED_NAV_C;
    }
}

const footer = (translate) => {
    let element;

    element = document.querySelector('footer p');
    if (element) {
        element.innerText = translate.FOOTER;
    }

    element = document.querySelector('.footer-copyright > div > div > div');
    if (element) {
        element.innerHTML = translate.FOOTER_COPY;
    }
}

const home = (translate) => {
    let element;

    const links = [].slice.call(document.querySelectorAll('main[page-now="home"] > div > div a'));
    if (links) {
        links.map((link) => {
            link.innerText = translate.HOME_LINK;
        });
    }

    element = document.querySelector('main[page-now="home"] > div > div > h3');
    if (element) {
        element.innerText = translate.HOME_WELCOME;
    }

    element = document.querySelector('main[page-now="home"] > div > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_A;
    }

    element = document.querySelector('main[page-now="home"] > div > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_B;
    }

    element = document.querySelector('main[page-now="home"] > div > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_C;
    }

    element = document.querySelector('main[page-now="home"] > div > div > p');
    if (element) {
        element.innerText = translate.HOME_DETAILS_D;
    }

    element = document.querySelector('main[page-now="home"] > div > div p:nth-child(6)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_E;
    }

    element = document.querySelector('main[page-now="home"] > div > div p:nth-child(9)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_F;
    }

    element = document.querySelector('main[page-now="home"] > div > div p:nth-child(12)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_G;
    }
}

const login = (translate) => {
    let element;

    element = document.querySelector('main[page-now="login"] h3');
    if (element) {
        element.innerText = translate.LOGIN_TITLE;
    }

    element = document.querySelector('main[page-now="login"] #form-login .input-field:nth-child(1) > label');
    if (element) {
        element.innerText = translate.LOGIN_EMAIL;
    }

    element = document.querySelector('main[page-now="login"] #form-login .input-field:nth-child(2) > label');
    if (element) {
        element.innerText = translate.LOGIN_PASSWORD;
    }

    element = document.querySelector('main[page-now="login"] #form-login > p > label > span');
    if (element) {
        element.innerText = translate.LOGIN_DATA;
    }

    element = document.querySelector('main[page-now="login"] #form-login > input');
    if (element) {
        element.value = translate.LOGIN_BUTTON;
    }

    element = document.querySelector('main[page-now="login"] p.d-inline');
    if (element) {
        element.innerText = translate.LOGIN_DETAILS_A;
    }

    element = document.querySelector('main[page-now="login"] a.click-action');
    if (element) {
        element.innerText = translate.LOGIN_DETAILS_B;
    }

    element = document.querySelector('main[page-now="login"] > div div:nth-child(2) > div > h3');
    if (element) {
        element.innerText = translate.LOGIN_NINJAS_ONLINE;
    }

    element = document.getElementById('ninjaStatus');
    if (element) {
        element.innerText = translate.LOGIN_NINJAS_ONLINE_TABLE_A;
    }

    element = document.getElementById('ninjaName');
    if (element) {
        element.innerText = translate.LOGIN_NINJAS_ONLINE_TABLE_B;
    }

    element = document.getElementById('ninjaVillage');
    if (element) {
        element.innerText = translate.LOGIN_NINJAS_ONLINE_TABLE_C;
    }

    element = document.getElementById('ninjaLevel');
    if (element) {
        element.innerText = translate.LOGIN_NINJAS_ONLINE_TABLE_D;
    }

    element = document.getElementById('ninjaScore');
    if (element) {
        element.innerText = translate.LOGIN_NINJAS_ONLINE_TABLE_E;
    }

    element = document.querySelector('main[page-now="login"] > div div:nth-child(2) div:nth-child(2) > h3');
    if (element) {
        element.innerText = translate.LOGIN_ACTIVE_EVENTS;
    }

    element = document.getElementById('eventStatus');
    if (element) {
        element.innerText = translate.LOGIN_ACTIVE_EVENTS_TABLE_A;
    }

    element = document.getElementById('eventName');
    if (element) {
        element.innerText = translate.LOGIN_ACTIVE_EVENTS_TABLE_B;
    }
}

const register = (translate) => {
    let element;

    element = document.querySelector('main[page-now="register"] h3');
    if (element) {
        element.innerText = translate.REGISTER_TITLE;
    }

    element = document.querySelector('main[page-now="register"] p');
    if (element) {
        element.innerText = translate.REGISTER_DESCRIPTION;
    }

    element = document.querySelector('main[page-now="register"] #form-register .input-field:nth-child(1) > label');
    if (element) {
        element.innerText = translate.REGISTER_NAME;
    }

    element = document.querySelector('main[page-now="register"] #form-register .input-field:nth-child(2) > label');
    if (element) {
        element.innerText = translate.REGISTER_EMAIL;
    }

    element = document.querySelector('main[page-now="register"] #form-register .input-field:nth-child(3) > label');
    if (element) {
        element.innerText = translate.REGISTER_PASSWORD;
    }

    element = document.querySelector('main[page-now="register"] #form-register .input-field:nth-child(4) > label');
    if (element) {
        element.innerText = translate.REGISTER_CONFIRM_PASSWORD;
    }

    element = document.querySelector('main[page-now="register"] #form-register h5');
    if (element) {
        element.innerText = translate.REGISTER_FORM_STYLE_NINJA;
    }

    element = document.querySelector('main[page-now="register"] #form-register p');
    if (element) {
        element.innerText = translate.REGISTER_FORM_STYLE_NINJA_DETAILS_A;
    }

    element = document.querySelector('main[page-now="register"] #form-register p:nth-child(8)');
    if (element) {
        element.innerText = translate.REGISTER_FORM_STYLE_NINJA_DETAILS_B;
    }

    element = document.querySelector('main[page-now="register"] #form-register p:nth-child(9)');
    if (element) {
        element.innerText = translate.REGISTER_FORM_STYLE_NINJA_DETAILS_C;
    }

    element = document.querySelector('main[page-now="register"] #form-register div:nth-child(10) > div:nth-child(4) > label > span');
    if (element) {
        element.innerText = translate.REGISTER_FORM_STYLE_NINJA_BALANCED;
    }

    element = document.querySelector('main[page-now="register"] #form-register h5:nth-child(12)');
    if (element) {
        element.innerText = translate.REGISTER_FORM_CHARACTER;
    }

    element = document.querySelector('main[page-now="register"] #form-register p:nth-child(13)');
    if (element) {
        element.innerText = translate.REGISTER_FORM_CHARACTER_DETAILS_A;
    }

    element = document.querySelector('main[page-now="register"] #form-register h5:nth-child(16)');
    if (element) {
        element.innerText = translate.REGISTER_FORM_VILLAGE;
    }

    element = document.querySelector('main[page-now="register"] #form-register p:nth-child(17)');
    if (element) {
        element.innerText = translate.REGISTER_FORM_VILLAGE_DETAILS_A;
    }

    element = document.querySelector('main[page-now="register"] #form-register > input[type="submit"]');
    if (element) {
        element.value = translate.REGISTER_BUTTON;
    }
}