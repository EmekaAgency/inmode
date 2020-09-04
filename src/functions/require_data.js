function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
  
      formData.append(parentKey, value);
    }
}
  
function jsonToFormData(data) {
    const formData = new FormData();
  
    buildFormData(formData, data);
  
    return formData;
}

function request(method = 'POST', cors = true, datas = {}) {
    const headers = new Headers();

    const params = {
        method: method,
        headers: headers,
        mode: cors ? 'cors' : 'no-cors',
        cache: 'default',
    };

    if(method != 'GET' && datas != {}) {
        params.body = jsonToFormData(datas)
    }

    return params;
}

function return_local() {
    if(window == undefined) {
        return false;
    }
    else return window.location.origin;
}

export const require_menu = function(menu = '') {
    if(menu == '') {
        return {};
    }
    if(!return_local()) {
        return {};
    }
    let datas = {
        'action': 'get-menus',
        'data': {
            'type': menu
        }
    };
    switch(menu) {
        case 'header-top':
            return {
                request: return_local() + '/emeka-back/inmode/inmode.php',
                params: request('POST', true, datas)
            };
        case 'header-bottom':
            return {
                request: return_local() + '/emeka-back/inmode/inmode.php',
                params: request('POST', true, datas)
            };
        case 'footer':
            return {
                request: return_local() + '/emeka-back/inmode/inmode.php',
                params: request('POST', true, datas)
            };
        default:
            return false;
    }
}