import { disableMainScroll, enableMainScroll } from './disable-scroll';

function modale():HTMLElement {
    return document.getElementById('modale');
}

function modaleContainer():HTMLElement {
    return document.getElementById('modale-container');
}

function modaleContent():HTMLElement {
    return document.getElementById('modale-content');
}

function modaleClose():HTMLElement {
    return document.getElementById('modale-close');
}

export function openModale(params:params) {
    disableMainScroll();
    modale().classList.add('opened');
    params.modaleClass != undefined && modale().classList.add(params.modaleClass);
    params.contentClass != undefined && modaleContainer().classList.add(params.contentClass);
    modaleContent().innerHTML = closePart() + params.content;
    params.onOpen && params.onOpen();
    modale().addEventListener('click', function(e:MouseEvent) {
        if(e.target.id == 'modale') {
            closeModale(params.onClose);
        }
    });
    modale().addEventListener('keyup', function(e:KeyboardEvent) {
        if(e.keyCode === 27) {
            closeModale(params.onClose);
        }
    });
        modaleClose().addEventListener('click', function(e:MouseEvent) {
        closeModale(params.onClose);
    });
}

export function closeModale(onClose:Function = null) {
    modale().classList.remove('opened');
    modaleContainer().classList.remove(...modaleContainer().classList);
    modaleContent().innerHTML = "";
    onClose != null && onClose();
    enableMainScroll();
}

function closePart() {
    return `<span id="modale-close">+</span>`;
}

// Payment SEPA Modale

export function paymentSEPA(datas:paymentSEPA) {
    return {
        onOpen: datas.onOpen,
        onClose: datas.onClose,
        contentClass: 'payment-sepa',
        content: `
            <h2>Commande validée</h2>
            <div class="thanks">
                Merci, votre commande a bien été prise en compte. Nous l'expédierons dès réception de votre virement de ${datas.total} € sur ce RIB:
            </div>
            <table>
                <tbody class="SEPA">
                    <tr class="RIB"><td>RIB</td><td>${datas.RIB}</td></tr>
                    <tr class="BIC"><td>BIC</td><td>${datas.BIC}</td></tr>
                </tbody>
            </table>
            <div class="info">
                La référence de votre commande est <span class="reference">${datas.reference}</span>, pensez à la notifier dans le libellé de votre virement
            </div>
            <div class="post-scriptum">
                PS : les informations relatives à la commande et son réglement vous ont aussi été envoyées par mail. Vous pourrez y retrouver toutes les informations présentes ici.
            </div>
        `.trim()
    };
};

interface paymentSEPA {
    total: string;
    RIB: string;
    BIC: string;
    reference: string;
    onOpen?: Function;
    onClose?: Function;
};

interface params {
    onOpen?: Function,
    onClose?: Function,
    contentClass?: string,
    modaleClass?: string,
    content: string,
}