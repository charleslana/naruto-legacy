import { getStorage, saveStorage } from '../storage/storage.js';
import config from '../../config/config.js';
import { toastSuccess } from '../../components/toast.js';
import { notificationError } from '../../components/notification.js';
import { getLanguage } from '../../language/index.js';

export const showMural = () => {
    const mural = document.getElementById('mural');
    if (mural) {
        mural.value = getStorage('mural');
    }
}

export const addChangeMuralSubmit = () => {
    const submit = document.getElementById('form-change-mural');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            changeMural();
        });
    }
}

const changeMural = () => {
    const mural = document.getElementById('mural').value;

    if (mural === getStorage('mural')) {
        return notificationError('O novo mural não deve ser o mesmo do atual.');
    }

    disableButton();

    fetch(config.apiBack + config.changeMural, {
        method: 'PATCH',
        body: JSON.stringify({
            mural
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
                saveStorage('mural', mural);
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
    const submit = document.querySelector('#form-change-mural input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-mural input[type="submit"]');
    submit.value = 'Salvar';
    submit.removeAttribute('disabled');
}