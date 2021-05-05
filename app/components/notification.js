import { getLanguage } from '../language/index.js';

export const notificationError = (message) => {
    const translate = getLanguage();

    Swal.fire({
        icon: 'error',
        title: translate.NOTIFICATION_ERROR,
        text: message
    });
}

export const notificationSuccess = (message) => {
    const translate = getLanguage();

    Swal.fire({
        icon: 'success',
        title: translate.NOTIFICATION_SUCCESS,
        text: message
    });
}

export const confirmDialog = async (myFunction) => {
    return await Swal.fire({
        icon: 'warning',
        title: 'Você confirma a ação?',
        text: 'O processo pode ser irreversível.',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            return true;
        }
    })
}