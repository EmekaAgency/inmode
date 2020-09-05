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
            }
        }
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
        }
    }
    return retour;
}