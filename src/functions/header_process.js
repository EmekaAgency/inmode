const _TYPES = ['TEXT', 'IMAGE', 'BUTTON', 'CARD'];
const _VARIANTS = ['SINGLE', 'TITLE', 'CONTENT', 'DK-TITLE', 'SIDE-MENU'];

// TODO regarder et log pour position
// TODO already under return autre version par fonction comme already_process
// de process_menu_datas

export const header_process = (datas, from) => {
    let retour = [];
    let single_image_pos = -1;
    let temp = {};
    for(let i = 0; i < datas.length; i++) {
        temp[datas[i].mysqlId] = datas[i];
    }
    datas.map((data, i) => {
        if ( // MENUS AND SINGLE
            data.temp_under === 0 ||
            (
                _TYPES[data.type - 1] === 'IMAGE' &&
                _VARIANTS[data.variant - 1] === 'SINGLE'
            )
        ) {
            if (
                _TYPES[data.type - 1] === 'IMAGE' &&
                _VARIANTS[data.variant - 1] === 'SINGLE'
            ) { // GROUP ICONS IN 'single-image-inline'
                single_image_pos = single_image_pos !== -1 ? single_image_pos : data.temp_under - 1;
                if (retour[single_image_pos] === undefined) {
                    retour[single_image_pos] = {
                        'type': data.type,
                        'variant': data.variant,
                        'name': 'single-image-inline',
                        'content': []
                    };
                }
                retour[single_image_pos].content[data.position - 1] = {
                    'name': data.name,
                    'url': data.url
                };
                return true;
            } else { // REGULAR MENUS
                if (retour[data.position - 1] === undefined) {
                    retour[data.position - 1] = {};
                }
                retour[data.position - 1].name = data.name;
                retour[data.position - 1].url = data.url;
                retour[data.position - 1].type = data.type;
                retour[data.position - 1].variant = data.variant;
                return true;
            }
        } else { // CONTENT
            if (retour[temp[data.temp_under].position - 1] === undefined) {
                retour[temp[data.temp_under].position - 1] = {};
            }
            if (retour[temp[data.temp_under].position - 1].under === undefined) {
                retour[temp[data.temp_under].position - 1].under = [];
            }
            retour[temp[data.temp_under].position - 1].under[data.position - 1] = {
                'name': data.name,
                'url': data.url,
                'type': data.type,
                'variant': data.variant
            };
            return true;
        }
    });
    return retour;
}