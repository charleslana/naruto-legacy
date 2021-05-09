import { randomString } from '../functions/functions.js';

export const navDetails = () => {
    const print = `
        <li><span class="details-name">teste1</span></li>
        <li class="tooltipped" data-position="bottom" data-tooltip="Level"><span class="details-level"><img src="assets/img/icons/level.png" alt="Level" /> 1</span></li>
        <li><span class="details-experience"><img src="assets/img/icons/xp.png" alt="Experience" /> 1/100</span></li>
        <li><span class="details-life"><img src="assets/img/icons/hp.png" alt="Life" /> 100/100</span></li>
        <li><span class="details-chakra"><img src="assets/img/icons/chakra.png" alt="Chakra" /> 100/100</span></li>
        <li><span class="details-ying"><img src="assets/img/icons/ying.png" alt="Ying" /> 30/30</span></li>
        <li><span class="details-yang"><img src="assets/img/icons/yang.png" alt="Yang" /> 29/30</span></li>
        <li><span class="details-yens"><img src="assets/img/icons/yens.png" alt="Yens" /> 0,00</span></li>
        <li><span class="details-credits"><img src="assets/img/icons/credits.png" alt="Credits" /> 0</span></li>
        <li><a href="/logout" class="click-logout">Sair</a></li>    
    `;
    const searchNav = [].slice.call(document.querySelectorAll('.nav-details'));
    if (searchNav) {
        searchNav.map((nav) => {
            nav.innerHTML = print;
        });
    }
}

export const navMenu = () => {
    const print = `
        <img src="assets/img/avatar/Boruto/1.png" alt="Avatar" class="col-padding-img responsive-img menu-avatar" />
        <img src="assets/img/villages/1.png" alt="Village" class="responsive-img menu-village" />
        <h6 class="c-orange">Equipados/Ativos</h6>
        <div class="tooltipped"
            data-position="bottom" data-tooltip="
            <p>Kawarimi no Jutsu</p>
            <p>Ao usar esse item você ficará imune a ataques normais por 24 horas</p>
            <p>Ativado</p>
            <p>Expira em: 2021-05-03 07:19:27</p>
            ">
            <img src="assets/img/items/kawarimi.png" alt="Kawarimi" width="30px" height="30px" />
        </div>
        <h5 class="c-orange icon-shuriken">Perfil</h5>
        <ul>
            <li><a href="/news" class="click-action">News</a></li>
            <li><a href="/settings" class="click-action">Configurações</a></li>
            <li><a href="#" class="click-action">Status</a></li>
            <li><a href="#" class="click-action">Ficha ninja</a></li>
            <li><a href="#" class="click-action">Mochila</a></li>
            <li><a href="#" class="click-action">Hospital</a></li>
            <li><a href="#" class="click-action">Animal lendário</a></li>
            <li><a href="#" class="click-action">Meus jutsus</a></li>
            <li><a href="#" class="click-action">Ordem dos jutsus</a></li>
            <li><a href="#" class="click-action">Mensagens (3)</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Clã</h5>
        <ul>
            <li><a href="#" class="click-action">Meu clã</a></li>
            <li><a href="#" class="click-action">Ranking de clãs</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Batalha</h5>
        <ul>
            <li><a href="#" class="click-action">Batalhas PVP</a></li>
            <li><a href="#" class="click-action">Ver batalhas</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Vila</h5>
        <ul>
            <li><a href="#" class="click-action icon-online">Caçadas</a></li>
            <li><a href="#" class="click-action icon-offline">Missões</a></li>
            <li><a href="#" class="click-action icon-offline">Quests</a></li>
            <li><a href="#" class="click-action icon-online">NPC</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Loja</h5>
        <ul>
            <li><a href="#" class="click-action">Equipamentos</a></li>
            <li><a href="#" class="click-action">Consumíveis</a></li>
            <li><a href="#" class="click-action icon-online">Trocas</a></li>
            <li><a href="#" class="click-action">Leilão</a></li>
            <li><a href="#" class="click-action">Banco</a></li>
            <li><a href="#" class="click-action">Créditos</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Evento</h5>
        <ul>
            <li><a href="#" class="click-action icon-online">Desafio de mestres</a></li>
            <li><a href="#" class="click-action icon-online">Legado diário</a></li>
            <li><a href="#" class="click-action icon-online">Round</a></li>
            <li><a href="#" class="click-action icon-online">Boss</a></li>
            <li><a href="#" class="click-action icon-offline">Guerra ninja</a></li>
            <li><a href="#" class="click-action icon-offline">Guerra de vilas</a></li>
            <li><a href="#" class="click-action icon-offline">Guerra de clãs</a></li>
            <li><a href="#" class="click-action icon-offline">Arena PVP</a></li>
            <li><a href="#" class="click-action icon-offline">Arena de batalha</a></li>
            <li><a href="#" class="click-action icon-offline">Zetsu</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Legado</h5>
        <ul>
            <li><a href="#" class="click-action">Ranking</a></li>
            <li><a href="#" class="click-action">Últimos drops</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Treino</h5>
        <ul>
            <li><a href="#" class="click-action">Jutsus</a></li>
            <li><a href="#" class="click-action">Classes ninja</a></li>
            <li><a href="#" class="click-action">Doujutsus</a></li>
            <li><a href="#" class="click-action">Maestrias</a></li>
            <li><a href="#" class="click-action">Aluno/Sensei</a></li>
        </ul>
        <div class="divider"></div>
        <h5 class="c-orange icon-shuriken">Outro</h5>
        <ul>
            <li><a href="#" class="click-action">Evento double</a></li>
            <li><a href="#" class="click-action">Manual (News)</a></li>
            <li><a href="#" target="_blank">WhatsApp</a></li>
            <li><a href="#" target="_blank">Discord</a></li>
            <li><a href="/logout" class="click-logout">Sair</a></li>
        </ul>        
    `;
    const searchNav = [].slice.call(document.querySelectorAll('.nav-menu'));
    if (searchNav) {
        searchNav.map((nav) => {
            nav.innerHTML = print;
        });
    }
}

export const navChat = () => {
    let printFirst = printChat();
    let searchNavFirst = document.querySelectorAll('.nav-chat')[0];
    if (searchNavFirst) {
        searchNavFirst.innerHTML = printFirst;
    }

    let printSecond = printChat();
    let searchNavSecond = document.querySelectorAll('.nav-chat')[1];
    if (searchNavSecond) {
        searchNavSecond.innerHTML = printSecond;
    }
}

const printChat = () => {
    const general = randomString();
    const clan = randomString();
    const village = randomString();
    const rules = randomString();
    return `
        <h6>Chat</h6>
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s3"><a class="active" href="#${general}">Geral •</a></li>
                    <li class="tab col s3"><a href="#${clan}">Clã</a></li>
                    <li class="tab col s3"><a href="#${village}">Vila</a></li>
                    <li class="tab col s3"><a href="#${rules}">Regras</a></li>
                </ul>
            </div>
            <div id="${general}" class="col s12">
                <div class="container">
                    <ul class="log">
                        <li class="log-f-server ">Equipe_NL: Kakuzo derrotou o boss.</li>
                        <li class="log-f-server ">Equipe_NL: Kakuzo derrotou o boss.</li>
                        <li class="log-f-user">Cla-teste1: oi</li>
                        <li class="log-f-reived">Cla-Koujen: opa</li>
                    </ul>
                    <input type="text" maxlength="150" autocomplete="off" placeholder="Escreva aqui!">
                    <button type="button" class="btn">Enviar</button>
                </div>
            </div>
            <div id="${clan}" class="col s12">Test 2</div>
            <div id="${village}" class="col s12">Test 3</div>
            <div id="${rules}" class="col s12">Test 4</div>
        </div>         
    `;
}