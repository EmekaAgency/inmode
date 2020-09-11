export const format_string = function (str, has_to_be_lower = false, italic = false) {
    let a = str.split('|')[0].replace('%', ' ');
    let b = str.split('|')[1] && str.split('|')[1].replace('%', ' ');
    let retour = undefined;
    if(has_to_be_lower && italic) {
        retour = new Array(a.toLowerCase());
        if(b){retour.push(b.toLowerCase());}
    }
    else if (has_to_be_lower) {
        retour = a.toLowerCase();
        if(b){retour = retour + b.toLowerCase();}
    }
    else if (italic) {
        retour = new Array(a.capitalize());
        if(b){retour.push(b.indexOf('#') == - 1 ? b.capitalize() : b.toUpperCase());}
    }
    else {
        retour = a.capitalize();
        if(b){retour = retour + (b.indexOf('#') == - 1 ? b.capitalize() : b.toUpperCase());}
    }
    if(b) {
        console.log('str =>\t%s\nhas_to_be_lower =>\t%s\nitalic =>\t%s\na =>\t%s\nb =>\t%s', str, has_to_be_lower, italic, a, b);
        console.log('retour =>');
        console.log(retour);
    }
    return retour;
}