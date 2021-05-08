import config from '../../config/config.js';
import { notificationError } from '../../components/notification.js';
import { getLanguage as translate } from '../../language/index.js';

const eventsActive = () => {
    const checkEventsActive = document.getElementById('events-active');
    if (checkEventsActive) {

        loading(checkEventsActive);

        fetch(config.apiBack + config.loginEvents)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${translate().SERVER_MAINTENANCE} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    let events = '';

                    data.events.map(event => {
                        events += `
                            <tr>
                                <td><img src="../assets/img/icons/online.png" alt="Status"></td>
                                <td>${translate()[event.name]}</td>
                            </tr>
                        `;
                    });

                    checkEventsActive.innerHTML = events;
                }

                if (data.error) {
                    notificationError(translate[data.error.message]);
                }
            })
            .catch(error => {
                notificationError(error.message);
            });
    }
}

const loading = (element) => {
    element.innerHTML = `
    <td colspan="2">
        <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </td>
    `;
}

export default eventsActive;