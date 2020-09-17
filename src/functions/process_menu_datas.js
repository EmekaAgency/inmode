<<<<<<< Updated upstream
function create_json(datas, under = 0, from = "") {
    let temp = {}, keys = Object.keys(datas), main = {}, retour = [];
    while(keys.length) {
        let under = typeof datas[keys[0]].under == "number" ? datas[keys[0]].under : typeof datas[keys[0]].temp_under == 'number' ? datas[keys[0]].temp_under : -1;
        // let under = datas[keys[0]].under;
        if(under === 0) {
            main[datas[keys[0]].mysqlId] = datas[keys[0]];        }
        else if(under >= 0) {
            if(temp[under] === undefined) {
                temp[under] = {};
=======
const _TYPES = ['TEXT', 'IMAGE', 'BUTTON', 'CARD'];
const _VARIANTS = ['SINGLE', 'TITLE', 'CONTENT', 'DK-TITLE'];

export const process_menu_datas = (datas = [], from = "") => {
    let retour = from == 'footer' ? {} : [], temp = {};
    for(let i = 0; i < datas.length; i++) {
        temp[datas[i].node.mysqlId] = datas[i].node;
    }
    let keys = Object.keys(temp);
    var single_image_pos = -1;
    for(let i = 0; i < keys.length; i++) {
        if(from == 'footer') { // FOOTER
            let position = temp[keys[i]].position - 1;
            if(
                temp[keys[i]].container == 'footer-location' ||
                temp[keys[i]].container == 'footer-phone' ||
                temp[keys[i]].container == 'footer-mail'
            ) {
                if(retour['infos'] == undefined) {
                    retour['infos'] = [];
                }
                    retour['infos'][position] = {
                        'name': temp[keys[i]].name.replace('\\n', '\n'),
                        'type': temp[keys[i]].container
                    };
            }
            else {
                if(retour[temp[keys[i]].container] == undefined) {
                    retour[temp[keys[i]].container] = [];
                }
                    retour[temp[keys[i]].container][position] = {
                        'name': temp[keys[i]].name,
                        'url': temp[keys[i]].url
                    };
>>>>>>> Stashed changes
            }
            temp[under][datas[keys[0]].mysqlId] = datas[keys[0]];
        }
<<<<<<< Updated upstream
        delete datas[keys[0]];
        keys.shift();
    }
    keys = Object.keys(main);
    for(let i = 0; i < keys.length; i++) {
        recursive_add(main[keys[i]], keys[i], temp, from);
        to_arrays(main[keys[i]], from)
        retour.push(main[keys[i]]);
    }
    return retour;
}

function recursive_add(main, key, temp, from = "") {
    if(temp[key]) {
        let save = main.under;
        main.under = temp[key];
        main.temp_under = save;
        // main.under = temp[key].under;
        delete temp[key];
        let keys = Object.keys(main.under);
        for(let i = 0; i < keys.length; i++) {
            recursive_add(main.under[keys[i]], keys[i], temp);
        }
        return true;
    }
    return false;
}

function to_arrays(main, from) {
    if (main.under) {
        // console.log('\n\n/////////////////////////////////');
        // from && console.log(`from : ${from}`);
        // console.log(`main.under : `);
        // console.log(main.under);
        // console.log(`main.temp_under : `);
        // console.log(main.temp_under);
        let save = main.under;
        let elem;
        main.under = new Array(Object.keys(save).length);
        for(let i = 0; i < Object.keys(save).length; i++) {
            elem = save[Object.keys(save)[i]];
            main.under[elem.position - 1] = elem;
=======
        else if( // MENUS AND SINGLE
            temp[keys[i]].under == 0 ||
            (
                _TYPES[temp[keys[i]].type - 1] == 'IMAGE'&&
                _VARIANTS[temp[keys[i]].variant - 1] == 'SINGLE'
            )
        ) {
            if(
                _TYPES[temp[keys[i]].type - 1] == 'IMAGE' &&
                _VARIANTS[temp[keys[i]].variant - 1] == 'SINGLE'
            ) { // GROUP ICONS IN 'single-image-inline'
                single_image_pos = single_image_pos != -1 ? single_image_pos : temp[keys[i]].under - 1;
                if(retour[single_image_pos] == undefined) {
                    retour[single_image_pos] = {
                        'type': temp[keys[i]].type,
                        'variant': temp[keys[i]].variant,
                        'name': 'single-image-inline',
                        'content': []
                    };
                    retour[single_image_pos].content[temp[keys[i]].position - 1] = {
                        'name' :temp[keys[i]].name,
                        'url' :temp[keys[i]].url
                    };
                }
                else {
                    retour[single_image_pos].content[temp[keys[i]].position - 1] = {
                        'name': temp[keys[i]].name,
                        'url': temp[keys[i]].url
                    };
                }
            }
            else { // REGULAR MENUS
                if(retour[temp[keys[i]].position - 1] == undefined) {
                    retour[temp[keys[i]].position - 1] = {
                        'name' :temp[keys[i]].name,
                        'url' :temp[keys[i]].url,
                        'type': temp[keys[i]].type,
                        'variant': temp[keys[i]].variant
                    };
                }
                else {
                    retour[temp[keys[i]].position - 1].name = temp[keys[i]].name;
                    retour[temp[keys[i]].position - 1].url = temp[keys[i]].url;
                    retour[temp[keys[i]].position - 1].type = temp[keys[i]].type;
                    retour[temp[keys[i]].position - 1].variant = temp[keys[i]].variant;
                }
            }
        }
        else { // CONTENT
            if(retour[temp[temp[keys[i]].under].position - 1] == undefined) {
                retour[temp[temp[keys[i]].under].position - 1] = new Object();
            }
            if(retour[temp[temp[keys[i]].under].position - 1].under == undefined) {
                retour[temp[temp[keys[i]].under].position - 1].under = new Array();
            }
            retour[temp[temp[keys[i]].under].position - 1].under[temp[keys[i]].position - 1] = {
                'name': temp[keys[i]].name,
                'url': temp[keys[i]].url,
                'type': temp[keys[i]].type,
                'variant': temp[keys[i]].variant
            };
>>>>>>> Stashed changes
        }
        // main.temp_under = save;
        main.under.map((elem) => {
            return to_arrays(elem);
        });
        return false;
    }
    return true;
}

export const process_menu_datas = (datas = [], from = "") => {
    let temp = {};
    for(let i = 0; i < datas.length; i++) {
        temp[datas[i].node.mysqlId] = datas[i].node;
    }

    // if(from != "") {
    //     console.log(`from ${from}`)
    //     console.log(temp);
    //     console.log(create_json(temp, 0));
    // }

    return create_json(temp, 0, from);

    // from == 'header-bottom' && create_json(temp, 0);
    // let keys = Object.keys(temp);
    // from == 'header-bottom' && console.log(keys);
    // from == 'header-bottom' && console.log(temp);
    // var single_image_pos = -1;
    // for(let i = 0; i < keys.length; i++) {
    //     if(from == 'footer') { // FOOTER
    //         let position = temp[keys[i]].position - 1;
    //         if(
    //             temp[keys[i]].container == 'footer-location' ||
    //             temp[keys[i]].container == 'footer-phone' ||
    //             temp[keys[i]].container == 'footer-mail'
    //         ) {
    //             if(retour['infos'] == undefined) {
    //                 retour['infos'] = [];
    //             }
    //                 retour['infos'][position] = {
    //                     'name': temp[keys[i]].name.replace('\\n', '\n'),
    //                     'type': temp[keys[i]].container
    //                 };
    //         }
    //         else {
    //             if(retour[temp[keys[i]].container] == undefined) {
    //                 retour[temp[keys[i]].container] = [];
    //             }
    //                 retour[temp[keys[i]].container][position] = {
    //                     'name': temp[keys[i]].name,
    //                     'url': temp[keys[i]].url
    //                 };
    //         }
    //     }
    //     else if( // MENUS AND SINGLE
    //         temp[keys[i]].under == 0 ||
    //         (
    //             _TYPES[temp[keys[i]].type - 1] == 'IMAGE'&&
    //             _VARIANTS[temp[keys[i]].variant - 1] == 'SINGLE'
    //         )
    //     ) {
    //         if(
    //             _TYPES[temp[keys[i]].type - 1] == 'IMAGE' &&
    //             _VARIANTS[temp[keys[i]].variant - 1] == 'SINGLE'
    //         ) { // GROUP ICONS IN 'single-image-inline'
    //             single_image_pos = single_image_pos != -1 ? single_image_pos : temp[keys[i]].under - 1;
    //             if(retour[single_image_pos] == undefined) {
    //                 retour[single_image_pos] = {
    //                     'type': temp[keys[i]].type,
    //                     'variant': temp[keys[i]].variant,
    //                     'name': 'single-image-inline',
    //                     'content': []
    //                 };
    //                 retour[single_image_pos].content[temp[keys[i]].position - 1] = {
    //                     'name' :temp[keys[i]].name,
    //                     'url' :temp[keys[i]].url
    //                 };
    //             }
    //             else {
    //                 retour[single_image_pos].content[temp[keys[i]].position - 1] = {
    //                     'name': temp[keys[i]].name,
    //                     'url': temp[keys[i]].url
    //                 };
    //             }
    //         }
    //         else { // REGULAR MENUS
    //             if(retour[temp[keys[i]].position - 1] == undefined) {
    //                 retour[temp[keys[i]].position - 1] = {
    //                     'name' :temp[keys[i]].name,
    //                     'url' :temp[keys[i]].url,
    //                     'type': temp[keys[i]].type,
    //                     'variant': temp[keys[i]].variant
    //                 };
    //             }
    //             else {
    //                 retour[temp[keys[i]].position - 1].name = temp[keys[i]].name;
    //                 retour[temp[keys[i]].position - 1].url = temp[keys[i]].url;
    //                 retour[temp[keys[i]].position - 1].type = temp[keys[i]].type;
    //                 retour[temp[keys[i]].position - 1].variant = temp[keys[i]].variant;
    //             }
    //         }
    //     }
    //     else { // CONTENT
    //         if(retour[temp[temp[keys[i]].under].position - 1] == undefined) {
    //             retour[temp[temp[keys[i]].under].position - 1] = new Object();
    //         }
    //         if(retour[temp[temp[keys[i]].under].position - 1].under == undefined) {
    //             retour[temp[temp[keys[i]].under].position - 1].under = new Array();
    //         }
    //         retour[temp[temp[keys[i]].under].position - 1].under[temp[keys[i]].position - 1] = {
    //             'name': temp[keys[i]].name,
    //             'url': temp[keys[i]].url,
    //             'type': temp[keys[i]].type,
    //             'variant': temp[keys[i]].variant
    //         };
    //     }
    // }
    // return retour;
}