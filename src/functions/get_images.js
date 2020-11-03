/* TODO utiliser le resolve path pour améliorer
   et passer un tableau de propriétés, comme ça
   on peut créer une fonction return_img qui retourne
   un Img Gatsby en faisant appel à resolve_path
   qui fait appel à get_img_path
*/

// TODO Améliorer méthode
// TODO Ajouter une default picture selon le type d'image demandée
// TODO Ajouter unr résolution dynamique des path

import { format_string } from "./format_string";

// const img_extensions = ['jpg', 'png', 'svg', 'jpeg', 'webp', 'bmp'];

// export const resolve_image = (name, index = 0) => {
//     if(typeof XMLHttpRequest !== "undefined") {
//         if(index >= img_extensions.length) {
//             // console.log("Plus d'extension disponible, image par défaut");
//             return get_img_path(`$/icons/icons/no_img_available.svg`);
//         }
//         else {
            // // console.log(`Test avec ${get_img_path(`${name}.${img_extensions[index]}`)}`);
            // var xhr = new XMLHttpRequest();
            // xhr.open('GET', get_img_path(`${name}.${img_extensions[index]}`), false);
            // xhr.send();

            // // console.log(xhr.response.substr(0,15));

            // // TODO fixer cette douille de #d,/?
            // if (xhr.response.substr(0,15) === "<!DOCTYPE html>") {
            //     // console.log("Not found");
            //     return resolve_image(name, index + 1);
            // }
            // else {
            //     // console.log(`Success, return img with path ${get_img_path(`${name}.${img_extensions[index]}`)}`);
            //     return get_img_path(`${name}.${img_extensions[index]}`, true);
            // }

//             let img = new Image();
//             img.src = get_img_path(`${name}.${img_extensions[index]}`);
//             img.onload = function() {
//                 return get_img_path(`${name}.${img_extensions[index]}`);
//             }
//             img.onerror = function() {
//                 return resolve_image(name, index + 1);
//             };
        
//             return get_img_path(`${name}.${img_extensions[index]}`);
//         }
//     }
//     return "";
// };

// TODO Refaire en Gatsby pour le rendu non client
export const get_img_path = (path = "", print = false) => {
    var source_path = typeof window !== 'undefined' ? window.location.origin : '';
    if(typeof path === "string"){
        return source_path + '/icons/' + format_string(path, true, false, print);
    }
    return "";
};

// TODO Améliorer méthode
// TODO Ajouter une default picture
// TODO Ajouter unr résolution dynamique des path
// TODO Refaire en Gatsby pour le rendu non client
export const get_avatar_path = (id = null) => {
    var source_path = typeof window !== 'undefined' ? window.location.href : '';
    var avatar_path = "images/profiles/avatar/";
    var default_avatar_path = "defaut_avatar.png";
    if(typeof id === "string" || typeof id === "number"){
        // TODO id permet de trouver le id_path par hash
        // return source_path + avatar_path + id_path;
        return source_path + avatar_path + id;
    }
    return source_path + avatar_path + default_avatar_path;
};