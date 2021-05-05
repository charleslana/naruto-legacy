import { recreateNode } from '../../functions/functions.js';
import { closeDetailsSidenav, closeMenuSidenav } from '../../components/sidenav.js';
import { removeUserData } from '../storage/storage.js';

const logout = (loadPage) => {
    removeAllClick();
    const clickActions = [].slice.call(document.querySelectorAll('.click-logout'));
    clickActions.map((clickAction) => {
        clickAction.addEventListener('click', function (event) {
            event.preventDefault();
            closeDetailsSidenav();
            closeMenuSidenav();
            removeUserData();
            loadPage('login');
        });
    });
}

const removeAllClick = () => {
    const clickExits = [].slice.call(document.querySelectorAll('.click-logout'));
    clickExits.map((clickExit) => {
        recreateNode(clickExit);
    });
}

export default logout;