import { formatYens, formatNumber } from '../../functions/functions.js';

export const getStorage = (variable) => {
    return localStorage.getItem(variable);
}

export const saveStorage = (variable, value) => {
    localStorage.setItem(variable, value);
}

export const removeStorage = (variable) => {
    localStorage.removeItem(variable);
}

export const saveUserData = (data) => {
    saveStorage('email', data.user.email);
    saveStorage('name', data.user.name);
    saveStorage('level', data.user.level);
    saveStorage('styleNinja', data.user.styleNinja);
    saveStorage('village', data.user.village);
    saveStorage('minExperience', data.user.minExperience);
    saveStorage('maxExperience', data.user.maxExperience);
    saveStorage('minLife', data.user.minLife);
    saveStorage('maxLife', data.user.maxLife);
    saveStorage('minChakra', data.user.minChakra);
    saveStorage('maxChakra', data.user.maxChakra);
    saveStorage('minYing', data.user.minYing);
    saveStorage('maxYing', data.user.maxYing);
    saveStorage('minYang', data.user.minYang);
    saveStorage('maxYang', data.user.maxYang);
    saveStorage('yens', data.user.yens);
    saveStorage('credits', data.user.credits);
    saveStorage('character', data.user.character);
    saveStorage('avatarName', data.user.avatarName);
    saveStorage('avatarImage', data.user.avatarImage);
    saveStorage('premium', data.user.premium);
    saveStorage('clan', data.user.clan);
    saveStorage('mural', data.user.mural);
}

export const removeUserData = () => {
    removeStorage('email');
    removeStorage('name');
    removeStorage('level');
    removeStorage('styleNinja');
    removeStorage('village');
    removeStorage('minExperience');
    removeStorage('maxExperience');
    removeStorage('minLife');
    removeStorage('maxLife');
    removeStorage('minChakra');
    removeStorage('maxChakra');
    removeStorage('minYing');
    removeStorage('maxYing');
    removeStorage('minYang');
    removeStorage('maxYang');
    removeStorage('yens');
    removeStorage('credits');
    removeStorage('character');
    removeStorage('avatarName');
    removeStorage('avatarImage');
    removeStorage('premium');
    removeStorage('clan');
    removeStorage('mural');
}

export const showUserData = () => {
    const name = getStorage('name');
    const level = getStorage('level');
    const village = getStorage('village');
    const minExperience = getStorage('minExperience');
    const maxExperience = getStorage('maxExperience');
    const minLife = getStorage('minLife');
    const maxLife = getStorage('maxLife');
    const minChakra = getStorage('minChakra');
    const maxChakra = getStorage('maxChakra');
    const minYing = getStorage('minYing');
    const maxYing = getStorage('maxYing');
    const minYang = getStorage('minYang');
    const maxYang = getStorage('maxYang');
    const yens = getStorage('yens');
    const credits = getStorage('credits');
    const avatarName = getStorage('avatarName');
    const avatarImage = getStorage('avatarImage');
    if (name) {
        const detailsName = [].slice.call(document.querySelectorAll('.details-name'));
        const detailsLevel = [].slice.call(document.querySelectorAll('.details-level'));
        const detailsExperience = [].slice.call(document.querySelectorAll('.details-experience'));
        const detailsLife = [].slice.call(document.querySelectorAll('.details-life'));
        const detailsChakra = [].slice.call(document.querySelectorAll('.details-chakra'));
        const detailsYing = [].slice.call(document.querySelectorAll('.details-ying'));
        const detailsYang = [].slice.call(document.querySelectorAll('.details-yang'));
        const detailsYens = [].slice.call(document.querySelectorAll('.details-yens'));
        const detailsCredits = [].slice.call(document.querySelectorAll('.details-credits'));
        const menuAvatar = [].slice.call(document.querySelectorAll('.menu-avatar'));
        const menuVillage = [].slice.call(document.querySelectorAll('.menu-village'));

        if (detailsName) {
            detailsName.map(detail => {
                detail.innerHTML = name;
            });

            detailsLevel.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/level.png" alt="Level" /> ${level}`;
            });

            detailsExperience.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/xp.png" alt="Experience" /> ${minExperience}/${maxExperience}`;
            });

            detailsLife.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/hp.png" alt="Life" /> ${minLife}/${maxLife}`;
            });

            detailsChakra.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/chakra.png" alt="Chakra" /> ${minChakra}/${maxChakra}`;
            });

            detailsYing.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/ying.png" alt="Ying" /> ${minYing}/${maxYing}`;
            });

            detailsYang.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/yang.png" alt="Yang" /> ${minYang}/${maxYang}`;
            });

            detailsYens.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/yens.png" alt="Yens" /> ${formatYens(yens)}`;
            });

            detailsCredits.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/credits.png" alt="Credits" /> ${formatNumber(credits)}`;
            });

            menuAvatar.map(menu => {
                menu.src = `assets/img/avatar/${avatarName}/${avatarImage}.png`;
            });

            menuVillage.map(menu => {
                menu.src = `assets/img/villages/${village}.png`;
            });
        }
    }
}