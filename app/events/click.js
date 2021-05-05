import { recreateNode } from '../functions/functions.js';
import { closeMenuSidenav } from '../components/sidenav.js';

const click = (loadPageMain) => {
    removeAllClick();
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));
    clickActions.map((clickAction) => {
        clickAction.addEventListener('click', function (event) {
            event.preventDefault();
            let page = this.href.replace(/^.*\//g, '');
            let pageNow = document.querySelector('main');
            let getAttributePageNow = pageNow.getAttribute('page-now');
            if (page !== getAttributePageNow) {
                closeMenuSidenav();
                loadPageMain(page);
            }
        });
    });
}

const removeAllClick = () => {
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));
    clickActions.map((clickAction) => {
        recreateNode(clickAction);
    });
}

export default click;