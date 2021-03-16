function create_json(datas, under = 0, from = "") {
    let temp = {}, keys = Object.keys(datas), main = {}, retour = [];
    while(keys.length) {
        let under = datas[keys[0]].under;
        if(under === 0) {
            main[datas[keys[0]].mysqlId] = datas[keys[0]];
        }
        else if(under >= 0) {
            if(temp[under] === undefined) {
                temp[under] = {};
            }
            temp[under][datas[keys[0]].mysqlId] = datas[keys[0]];
        }
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
        main.temp_under = main.under;
        main.under = temp[key];
        let keys = Object.keys(temp[key]);
        delete temp[key];
        for(let i = 0; i < keys.length; i++) {
            recursive_add(main.under[keys[i]], keys[i], temp);
        }
        return true;
    }
    main.temp_under = main.under;
    return false;
}

function to_arrays(main, from) {
    if (main.under) {
        let save = main.under;
        let elem;
        main.under = new Array(Object.keys(save).length);
        for(let i = 0; i < Object.keys(save).length; i++) {
            elem = save[Object.keys(save)[i]];
            main.under[elem.position - 1] = elem;
        }
        main.under.map((elem) => {
            return to_arrays(elem);
        });
        return false;
    }
    return true;
}

function already_processed(datas = []) {
    let retour = [];
    Object.keys(datas).map((key) => {
        if(datas[key].temp_under === 0) {
            retour.push(datas[key]);
        }
    })
    return retour;
}

export const process_menu_datas = (datas = [], from = null) => {
    let temp = new Object({});
    for(let i = 0; i < datas.length; i++) {
        temp[datas[i].mysqlId] = datas[i];
    }
    if(Array.isArray(datas[0].under)) {
        return already_processed(temp);
    }
    else {
        return create_json(temp, 0, from);
    }
}