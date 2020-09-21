import { capitalize } from "./capitalize";

export const format_string = function (str, has_to_be_lower = false, italic = false, print) {
    let a = str.split('|')[0].replace('%', ' ');
    let b = str.split('|')[1] && str.split('|')[1].replace('%', ' ');
    // print && console.log(a);
    // print && console.log(b);
    // print && console.log(has_to_be_lower ? 'minuscule' : 'basique');
    // print && console.log(italic ? 'italique' : 'normal');
    let retour = undefined;
    if(has_to_be_lower && italic) {
        retour = [].push(a.toLowerCase());
        if(b){retour.push(b.replace('#', '').toLowerCase());}
    }
    else if (has_to_be_lower) {
        // print && console.log(str);
        // print && console.log(a);
        // print && console.log(b);
        retour = a.toLowerCase().replace('#', '');
        // print && console.log(retour);
        if(b){retour = retour + b.replace('#', '').toLowerCase();}
        // print && console.log(retour);
        // print && console.log('\n####################');
    }
    else if (italic) {
        retour = new Array(capitalize(a));
        if(b){retour.push(b.indexOf('#') === - 1 ? capitalize(b) : b.toUpperCase());}
    }
    else {
        retour = capitalize(a).replace('#', '');
        if(b){retour = retour + (b.indexOf('#') === - 1 ? capitalize(b) : b.toUpperCase());}
    }
    return retour;
}