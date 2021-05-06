import { getLanguage } from '../../language/index.js';

const eventsActive = () => {
    const checkEventsActive = document.getElementById('events-active');
    if (checkEventsActive) {
        const translate = getLanguage();
        let events = '';
        [1, 2].forEach(event => {
            events += `
                <tr>
                    <td><img src="../assets/img/icons/online.png" alt="Status"></td>
                    <td>${translate.LOGIN_ACTIVE_EVENTS_DATA}</td>
                </tr>
            `;
        });
        checkEventsActive.innerHTML = events;
    }
}

export default eventsActive;