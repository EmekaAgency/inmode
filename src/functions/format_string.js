import { capitalize } from "./capitalize";

export const format_string = function (str, has_to_be_lower = false, italic = false) {
    let a = str.split('|')[0].replace('%', ' ');
    let b = str.split('|')[1] && str.split('|')[1].replace('%', ' ');
    let retour = undefined;
    if(has_to_be_lower && italic) {
        retour = [].push(a.toLowerCase());
        if(b){retour.push(b.replace('#', '').toLowerCase());}
    }
    else if (has_to_be_lower) {
        retour = a.toLowerCase();
        if(b){retour = retour + b.replace('#', '').toLowerCase();}
    }
    else if (italic) {
        retour = new Array(capitalize(a));
        if(b){retour.push(b.indexOf('#') == - 1 ? capitalize(b) : b.toUpperCase());}
    }
    else {
        retour = capitalize(a);
        if(b){retour = retour + (b.indexOf('#') == - 1 ? capitalize(b) : b.toUpperCase());}
    }
    return retour;
}