import addChangeNameSubmit from './changeName.js';
import { showAvatar, addChangeAvatarSubmit } from './changeAvatar.js';
import { showCharacter, addChangeCharacterSubmit } from './changeCharacter.js';
import { addChangeMuralSubmit, showMural } from './changeMural.js';
import { showSound } from './sound.js';
import addChangePasswordSubmit from './changePassword.js';
import { getStorage } from '../storage/storage.js';
import { showNinjaStyle, addChangeNinjaStyleSubmit } from './changeNinjaStyle.js';
import { showVillage, addChangeVillageSubmit } from './changeVillage.js';

const settings = () => {
    showSound();

    addChangePasswordSubmit();

    addChangeNameSubmit();

    showEmail();

    showNinjaStyle();
    addChangeNinjaStyleSubmit();

    showVillage();
    addChangeVillageSubmit();

    showAvatar();
    addChangeAvatarSubmit();

    showCharacter();
    addChangeCharacterSubmit();

    addChangeMuralSubmit();
    showMural();

    showLanguage();
}

const showEmail = () => {
    const email = document.getElementById('myEmail');
    if (email) {
        email.value = getStorage('email');
    }
}

const showLanguage = () => {
    const language = document.querySelector(`input[name="groupLanguage"][value="${getStorage('language')}"]`);
    if (language) {
        language.checked = true;
    }
}

export default settings;