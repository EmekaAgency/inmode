export const footer_process = (datas) => {
    let retour = [];
    datas.map((data, i) => {
        if(['footer-location', 'footer-phone', 'footer-mail'].indexOf(data.container) > -1) {
            if(retour['infos'] === undefined) {
                retour['infos'] = [];
            }
            retour['infos'][data.position] = {
                'name': data.name.replace('\\n', '\n'),
                'type': data.container
            };
            return true;
        }
        else {
            if(retour[data.container] === undefined) {
                retour[data.container] = [];
            }
            retour[data.container][data.position] = {
                'name': data.name,
                'url': data.url
            };
            return true;
        }
    });
    return retour;
}