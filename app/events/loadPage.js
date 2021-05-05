import config from '../config/config.js';
import click from './click.js';
import ninjasOnline from '../html/login/ninjasOnline.js';
import eventsActive from '../html/login/eventsActive.js';
import { addEvent, preEvent } from './addEvent.js';
import { sidenav } from '../components/sidenav.js';
import tab from '../components/tab.js';
import tooltip from '../components/tooltip.js';
import dropdown from '../components/dropdown.js';

const loadPage = (page = 'home') => {

    if (page === 'home' || page === 'login' || page === 'register') {
        return loadPageSector('not-logged', page);
    }

    loadPageSector('logged', page);
}

const loadPageMain = (page) => {
    preloaderMain();
    const main = document.querySelector('main');

    fetch(`${config.apiFront + config.pages + page}.html`)
        .then(response => {
            if (!response.ok) {
                return main.innerHTML = notFound();
            }
            return response.text();
        })
        .then(data => {
            main.innerHTML = data;
            main.setAttribute('page-now', page);
            preEvent();
            tab();
            tooltip();
            dropdown();
            click(loadPageMain);
            fetchPageContent(page);
            addEvent(loadPage);
        })
        .catch(error => {
            console.error(error.message);
        });
}

const preloaderMain = () => {
    document.querySelector('main').innerHTML = `
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
    `;
}

const fetchPageContent = (page) => {
    if (page === 'login') {
        ninjasOnline();
        eventsActive();
    }
}

const notFound = () => {
    return `
    <div class="container">
        <div class="content">
            <h3 class="center">Pagina inválida</h3>
            <div class="row">
                <div class="col s12 m3">
                    <img src="assets/img/help/1.png" alt="Help" class="responsive-img" />
                </div>
                <div class="col s12 m9">
                    <p>A página solicitada não existe, por favor tente novamente voltando para a página inicial</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

const loadPageSector = (sectorPage, page) => {
    preloaderSector();
    const sector = document.querySelector('sector');

    fetch(`${config.apiFront}/${sectorPage}.html`)
        .then(response => {
            if (!response.ok) {
                return sector.innerHTML = notFound();
            }
            return response.text();
        })
        .then(data => {
            sector.innerHTML = data;
            click(loadPageMain);
            sidenav();
            loadPageMain(page);
        })
        .catch(error => {
            console.error(error.message);
        });
}

const preloaderSector = () => {
    document.querySelector('sector').innerHTML = `
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
    `;
}

export default loadPage;