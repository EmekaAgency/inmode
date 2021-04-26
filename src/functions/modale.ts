import { disableMainScroll, enableMainScroll } from './disable-scroll';
import { oneById } from './selectors';

function modale():HTMLElement | null {
    return oneById('modale');
}

function modaleContainer():HTMLElement | null {
    return oneById('modale-container');
}

function modaleContent():HTMLElement | null {
    return oneById('modale-content');
}

function modaleClose():HTMLElement | null {
    return oneById('modale-close');
}

export function openModale(params:params) {
    disableMainScroll();
    let _modale:any = modale();
    let _modale_content:any = modaleContent();
    let _modale_container:any = modaleContainer();
    let _modale_close:any = modaleClose();
    _modale && _modale.classList.add('opened');
    params.modaleClass != undefined && _modale && _modale.classList.add(params.modaleClass);
    params.contentClass != undefined && _modale_container && _modale_container.classList.add(params.contentClass);
    if(_modale_content) {_modale_content.innerHTML = closePart() + params.content;}
    params.onOpen && params.onOpen();
    _modale && _modale.addEventListener('click', function(e:MouseEvent) {
        if(e.target.id == 'modale') {
            closeModale(params.onClose);
        }
    });
    _modale && _modale.addEventListener('keyup', function(e:KeyboardEvent) {
        if(e.keyCode === 27) {
            closeModale(params.onClose);
        }
    });
        _modale_close && _modale_close.addEventListener('click', function(e:MouseEvent) {
        closeModale(params.onClose);
    });
}

export function closeModale(onClose:Function = null) {
    let _modale:any = modale();
    let _modale_content:any = modaleContent();
    let _modale_container:any = modaleContainer();
    _modale && _modale.classList.remove('opened');
    _modale_container && _modale_container.classList.remove(..._modale_container.classList);
    if(_modale_content) {_modale_content.innerHTML = "";}
    onClose != null && onClose();
    enableMainScroll();
}

function closePart() {
    return `<span id="modale-close">+</span>`;
}

// Payment SEPA Modale

export function paymentSEPA(datas:paymentSEPA) {
    //* console.log('paymentSEPA');
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