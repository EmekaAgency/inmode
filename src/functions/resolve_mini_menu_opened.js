export const resolve_mini_menu_opened = () => {
    let elems = document.getElementsByClassName('menu-title');
    for(let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('opened');
    }
}