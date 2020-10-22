// TODO géénraliser la fonction (selector, {classList: action['add', 'remove']})

export const resolve_mini_menu_opened = () => {
    remove('opened', document.getElementsByClassName('menu-title'));
    remove('opened', document.getElementsByClassName('menu-dk-title'));
}

export const resolve_tab_link_selected = () => {
    remove('current', document.getElementsByClassName('tab-link'));
}

const remove = (classname = "", elems = []) => {
    for(let i = 0; i < elems.length; i++) {
        elems[i].classList.remove(classname);
    }
}

// const add = (classname = "", elems = []) => {
//     for(let i = 0; i < elems.length; i++) {
//         elems[i].classList.add(classname);
//     }
// }