import { notificationError } from '../../components/notification.js';
import config from '../../config/config.js';
import { toastSuccess } from '../../components/toast.js';

const addChangePasswordSubmit = () => {
    const submit = document.getElementById('form-change-password');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            changePassword();
        });
    }
}

const changePassword = () => {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (currentPassword === newPassword) {
        return notificationError('A senha nova não deve ser a mesma da atual.');
    }

    if (newPassword !== confirmNewPassword) {
        return notificationError('As senhas digitadas não coincidem.');
    }

    disableButton();

    fetch(config.apiBack + config.changePassword, {
        // method: 'patch',
        // body: JSON.stringify({
        //     currentPassword,
        //     newPassword
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                document.getElementById('form-change-password').reset();
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
    const submit = document.querySelector('#form-change-password input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-password input[type="submit"]');
    submit.value = 'Trocar senha';
    submit.removeAttribute('disabled');
}

export default addChangePasswordSubmit;