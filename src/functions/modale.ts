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

export function paymentSEPA(reference:string, onOpen:Function = null, onClose:Function = null, total:string, RIB:string = "FR76 .... .... .... .... .... ...") {
    console.log('paymentSEPA');
    return {
        onOpen: onOpen,
        onClose: onClose,
        contentClass: 'payment-sepa',
        content: `
            <div class="thanks">
                Merci, votre commande a bien été prise en compte. Nous procéderons à son envoi lorsque vous aurez réalisé le virement de ${total} € sur ce RIB:
            /div>
            <div class="RIB">
                ${RIB}
            </div>
            <div class="info">
                La référence de votre commande est <span class="reference">${reference}</span>, pensez à la notifier dans l'objet de votre virement
            </div>
            <div class="post-scriptum">
                PS : les informations relatives à la commande et son réglement vous ont aussi été envoyées par mail. Vous pourrez y retrouver toutes les informations présentes ici.
            </div>
        `
    };
}

interface params {
    onOpen?: Function,
    onClose?: Function,
    contentClass?: string,
    modaleClass?: string,
    content: string,
}