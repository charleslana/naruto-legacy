import config from '../../config/config.js';
import { notificationError } from '../../components/notification.js';
import { formatNumber } from '../../functions/functions.js';
import { getLanguage as translate } from '../../language/index.js';

const ninjasOnline = () => {
    const checkNinjasOnline = document.getElementById('ninjas-online');
    if (checkNinjasOnline) {

        loading(checkNinjasOnline);

        fetch(config.apiBack + config.loginOnline)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${translate().SERVER_MAINTENANCE} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    let ninjas = '';

                    data.users.map(user => {
                        ninjas += `
                            <tr>
                                <td><img src="../assets/img/icons/online.png" alt="Status"></td>
                                <td>${user.clan} - ${user.name}</td>
                                <td><img src="../assets/img/villages/${user.village}.png" width="40px" alt="Village"></td>
                                <td>${user.level}</td>
                                <td>${formatNumber(user.score)}</td>
                            </tr>
                        `;
                    });

                    checkNinjasOnline.innerHTML = ninjas;
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
    <td colspan="5">
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

export default ninjasOnline;