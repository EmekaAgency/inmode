export const process_menu_datas = (datas) => {
    let retour = [], temp = {};
    for(let i = 0; i < datas.length; i++) {
        temp[datas[i].node.mysqlId] = datas[i].node;
    }
    let keys = Object.keys(temp);
    var single_image_pos = -1;
    for(let i = 0; i < keys.length; i++) {
        if(temp[keys[i]].under == 0 || (['TEXT', 'IMAGE', 'BUTTON'][temp[keys[i]].type - 1] == 'IMAGE' && ['SINGLE', 'TITLE', 'CONTENT'][temp[keys[i]].variant - 1] == 'SINGLE')) {
            if(
                ['TEXT', 'IMAGE', 'BUTTON'][temp[keys[i]].type - 1] == 'IMAGE' &&
                ['SINGLE', 'TITLE', 'CONTENT'][temp[keys[i]].variant - 1] == 'SINGLE'
            ) {
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
            else {
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
        else {
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