import characters from '../../static/characters.js';
import villages from '../../static/villages.js';
import config from '../../config/config.js';
import { notificationError, notificationSuccess } from '../../components/notification.js';
import loadPage from '../../events/loadPage.js';
import { getLanguage } from '../../language/index.js';

export const listCharacters = () => {
    const registerCharacters = document.getElementById('characters');
    if (registerCharacters) {
        let labelCharacters = '';
        characters.map(character => {
            labelCharacters += `
                <label class="carousel-item">
                    <img src="../assets/img/avatar/${character.name}/${character.image}.png" alt="${character.name}" height="150px">
                    <input class="with-gap" name="group2" type="radio" value="${character.value}" required />
                    <span>${character.name}</span>
                </label>       
            `;
        });
        registerCharacters.innerHTML = labelCharacters;
    }
}

export const listVillages = () => {
    const registerVillages = document.getElementById('villages');
    if (registerVillages) {
        let labelVillages = '';
        villages.map(village => {
            labelVillages += `
                <div class="col m3 col-padding">
                    <label>
                        <img src="../assets//img/villages/${village.image}.png" alt="${getLanguage()[village.name]}" height="50px" class="c-pointer" />
                        <input class="with-gap" name="group3" type="radio" value="${village.value}" required />
                        <span>${getLanguage()[village.name]}</span>
                    </label>
                </div>
            `;
        });
        registerVillages.innerHTML = labelVillages;
    }
}

export const register = () => {
    const buttonRegister = document.getElementById('form-register');
    if (buttonRegister) {
        buttonRegister.addEventListener('submit', function (event) {
            event.preventDefault();
            signUp();
        });
    }
}

const signUp = () => {
    const inputName = document.getElementById('name').value;
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    const inputConfirmPassword = document.getElementById('confirmPassword').value;
    const radioStyleNinja = document.querySelector('input[name="group1"]:checked').value;
    const radioCharacter = document.querySelector('input[name="group2"]:checked').value;
    const radioVillage = document.querySelector('input[name="group3"]:checked').value;
    const translate = getLanguage();

    if (inputPassword !== inputConfirmPassword) {
        return notificationError('As senhas digitadas não coincidem.');
    }

    disableButton(translate);

    fetch(config.apiBack + config.register, {
        method: 'POST',
        body: JSON.stringify({
            name: inputName,
            email: inputEmail,
            password: inputPassword,
            styleNinja: radioStyleNinja,
            character: radioCharacter,
            village: radioVillage
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`${translate.SERVER_MAINTENANCE} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                document.getElementById('form-register').reset();
                loadPage('login');
                notificationSuccess(translate[data.success.message]);
            }

            if (data.error) {
                enableButton(translate);
                notificationError(translate[data.error.message]);
            }
        })
        .catch(error => {
            enableButton(translate);
            notificationError(error.message);
        });
}

const disableButton = (translate) => {
    const submit = document.querySelector('#form-register input[type="submit"]');
    submit.value = translate.BUTTON_WAIT;
    submit.setAttribute('disabled', true);
}

const enableButton = (translate) => {
    const submit = document.querySelector('#form-register input[type="submit"]');
    submit.value = translate.REGISTER_BUTTON;
    submit.removeAttribute('disabled');
}