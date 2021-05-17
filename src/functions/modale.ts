import { disableMainScroll, enableMainScroll } from './disable-scroll';

function modale():HTMLElement | null {
    return document.getElementById('modale');
}

function modaleContainer():HTMLElement | null {
    return document.getElementById('modale-container');
}

function modaleContent():HTMLElement | null {
    return document.getElementById('modale-content');
}

function modaleClose():HTMLElement | null {
    return document.getElementById('modale-close');
}

export function openModale(params:params) {
    disableMainScroll();
    let _temp = modale();
    _temp && _temp.classList.add('opened');
    _temp = modale();
    params.modaleClass != undefined && _temp && _temp.classList.add(params.modaleClass);
    _temp = modaleContainer();
    params.contentClass != undefined && _temp && _temp.classList.add(params.contentClass);
    _temp = modaleContent();
    if(_temp) _temp.innerHTML = closePart() + params.content;
    params.onOpen && params.onOpen();
    _temp = modale();
    _temp && _temp.addEventListener('click', function(e:Event | MouseEvent) {
        if(e.target && e.target.id == 'modale') {
            closeModale(params.onClose);
        }
    });
    _temp = modale();
    _temp && _temp.addEventListener('keyup', function(e:KeyboardEvent) {
        if(e.keyCode === 27) {
            closeModale(params.onClose);
        }
    });
        _temp = modaleClose();
        _temp && _temp.addEventListener('click', function(e:MouseEvent) {
        closeModale(params.onClose);
    });
}

export function closeModale(onClose?:Function) {
    let _temp = modale();
    _temp && _temp.classList.remove('opened');
    _temp = modaleContainer();
    _temp && _temp.classList.remove(..._temp.classList);
    _temp = modaleContent();
    if(_temp) _temp.innerHTML = "";
    onClose != undefined && onClose();
    enableMainScroll();
}

function closePart() {
    return `<span id="modale-close">+</span>`;
}

// Payment SEPA Modale

export function paymentSEPA(datas:paymentSEPA = {
    total: "NaN€",
    RIB: "NaNNaN NaNNaN NaNNaN NaNNaN",
    BIC: "NaNNaNNaNNaN",
    reference: "NaNNaN",
    onOpen: undefined,
    onClose: undefined,
}) {
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