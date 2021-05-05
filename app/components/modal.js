export const modalDailyReward = () => {
    const enable = false;
    const elements = document.getElementById('modal-daily-reward');
    if (elements && enable) {
        const instance = M.Modal.init(elements, {
            endingTop: '13%'
        });
        instance.open();
    }
}