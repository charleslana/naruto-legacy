export const toastSuccess = (message) => {
    M.toast({
        html: message,
        classes: 'toast-success'
    });
}

export const toastError = (message) => {
    M.toast({
        html: message,
        classes: 'toast-error'
    });  
}

export const toastWarning = (message) => {
    M.toast({
        html: message,
        classes: 'toast-warning'
    });  
}