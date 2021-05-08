import { confirmDialog, notificationError } from '../../components/notification.js';
import config from '../../config/config.js';
import { toastSuccess } from '../../components/toast.js';
import price from '../../static/prices.js';
import { showUserData, getStorage, saveStorage } from '../storage/storage.js';
import { getLanguage } from '../../language/index.js';

const addChangeNameSubmit = () => {
    const submit = document.getElementById('form-change-name');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            confirmChangeName();
        });
    }
}

const confirmChangeName = async () => {
    const checkConfirmDialog = await confirmDialog();

    if (checkConfirmDialog) {
        changeName();
    }
}

const changeName = () => {
    const credits = getStorage('credits');

    const name = getStorage('name');
    const newName = document.getElementById('newName').value;

    if (name === newName) {
        return notificationError('O nome novo não deve ser o mesmo do atual.');
    }

    if (credits < price.changeName) {
        return notificationError('Você não tem créditos suficiente.');
    }

    disableButton();

    fetch(config.apiBack + config.changeName, {
        method: 'PATCH',
        body: JSON.stringify({
            name: newName
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
                document.getElementById('form-change-name').reset();
                saveStorage('name', newName);
                saveStorage('credits', parseInt(credits - price.changeName));
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
    const submit = document.querySelector('#form-change-name input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-name input[type="submit"]');
    submit.value = 'Trocar nome';
    submit.removeAttribute('disabled');
}

export default addChangeNameSubmit;