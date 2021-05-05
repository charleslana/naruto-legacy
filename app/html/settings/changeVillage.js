import { confirmDialog, notificationError } from '../../components/notification.js';
import config from '../../config/config.js';
import { toastSuccess } from '../../components/toast.js';
import price from '../../static/prices.js';
import { showUserData, getStorage, saveStorage } from '../storage/storage.js';

export const showVillage = () => {
    const village = document.querySelector(`input[name="group3"][value="${getStorage('village')}"]`);
    if (village) {
        village.checked = true;
    }
}

export const addChangeVillageSubmit = () => {
    const submit = document.getElementById('form-change-village');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            confirmChangeVillage();
        });
    }
}

const confirmChangeVillage = async () => {
    const checkConfirmDialog = await confirmDialog();

    if (checkConfirmDialog) {
        changeVillage();
    }
}

const changeVillage = () => {
    const credits = getStorage('credits');
    const clan = getStorage('clan');
    const radioVillage = document.querySelector('input[name="group3"]:checked').value;

    if (clan === 'true') {
        return notificationError('Você está em um clã.');
    }

    if (radioVillage === getStorage('village')) {
        return notificationError('A vila nova não deve ser a mesma da atual.');
    }

    if (credits < price.changeVillage) {
        return notificationError('Você não tem créditos suficiente.');
    }

    disableButton();

    fetch(config.apiBack + config.changeVillage, {
        // method: 'patch',
        // body: JSON.stringify({
        //     radioVillage
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveStorage('village', radioVillage);
                saveStorage('credits', parseInt(credits - price.changeVillage));
                showUserData();
                toastSuccess(data.success.message);
            }

            if (data.error) {
                notificationError(data.error.message);
            }

            enableButton();
        })
        .catch(error => {
            enableButton();
            notificationError(error.message);
        });
}

const disableButton = () => {
    const submit = document.querySelector('#form-change-village input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-village input[type="submit"]');
    submit.value = 'Trocar vila';
    submit.removeAttribute('disabled');
}