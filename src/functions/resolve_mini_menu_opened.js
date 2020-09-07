export const resolve_mini_menu_opened = () => {
    remove('opened', document.getElementsByClassName('menu-title'));
    remove('opened', document.getElementsByClassName('menu-dk-title'));
}

const remove = (classname = "", elems = []) => {
    for(let i = 0; i < elems.length; i++) {
        elems[i].classList.remove(classname);
    }
}

const add = (classname = "", elems = []) => {
    for(let i = 0; i < elems.length; i++) {
        elems[i].classList.add(classname);
    }
}