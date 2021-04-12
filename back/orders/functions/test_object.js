const { filter_object } = require('./filter_object.js');
const { 
    _create_object,
    _update_object,
    _load_object,
    _delete_object
} = require('./strapi.js');

// interface TestObject {
//     reference: string;
//     Text2: string;
//     Number: number;
//     Datetime: number; // timestamp
//     Addon?: number[];
//     Email: string;
//     Boolean: boolean;
// }

const ObjectName = 'tests';

function is_test(datas) {
    var _errors = [];
    if(!datas.reference) {
        _errors.push({
            var: 'reference',
            message: 'reference must be provided'
        });
    }
    if(datas.reference && typeof datas.reference != "string") {
        _errors.push({
            var: 'reference',
            message: 'reference must be a string'
        });
    }
    if(!datas.Text2) {
        _errors.push({
            var: 'Text2',
            message: 'Text2 must be provided'
        });
    }
    if(datas.Text2 && typeof datas.Text2 != "string") {
        _errors.push({
            var: 'Text2',
            message: 'Text2 must be a string'
        });
    }
    if(!datas.Number) {
        _errors.push({
            var: 'Number',
            message: 'Number must be provided'
        });
    }
    if(datas.Number && typeof datas.Number != "number") {
        _errors.push({
            var: 'Number',
            message: 'Number must be a number'
        });
    }
    // if(!datas.Datetime) {
    //     _errors.push({
    //         var: 'Datetime',
    //         message: 'Datetime must be provided'
    //     });
    // }
    // if(datas.Datetime && typeof datas.Datetime != "number") {
    //     _errors.push({
    //         var: 'Datetime',
    //         message: 'Datetime must be a timestamp number'
    //     });
    // }
    // TODO Remettre le TEST en production
    // if(!Array.isArray(datas.Addon)) {
    //     _errors.push({
    //         var: 'Addon',
    //         message: 'Addon must be a array'
    //     });
    // }
    if(!datas.Email) {
        _errors.push({
            var: 'Email',
            message: 'Email must be provided'
        });
    }
    if(datas.Email && typeof datas.Email != "string") {
        _errors.push({
            var: 'Email',
            message: 'Email must be a string'
        });
    }
    if(!datas.Boolean) {
        _errors.push({
            var: 'Boolean',
            message: 'Boolean must be provided'
        });
    }
    if(datas.Boolean && typeof datas.Boolean != "boolean") {
        _errors.push({
            var: 'Boolean',
            message: 'Boolean must be a boolean'
        });
    }
    return _errors;
}

function manage_test_object(datas) {
    if(!datas) {
        return false;
    }
    var _errors = is_test(datas);
    if(_errors.length) {
        return _errors;
    }
    return filter_object(datas, not_is_empty);
}

function not_is_empty(elem) {
    return elem && elem != "";
}

/*export */const create_test_object = async function(object, token) {
    return await _create_object(
        {
            reference: object.reference,
            Text2: object.Text2,
            Number: object.Number,
            Datetime: new Date(object.Datetime).toISOString(),
            Addon: object.Addon, // TODO Remettre la valeur object.Addon en production
            Email: object.Email,
            Boolean: object.Boolean,
        },
        token,
        ObjectName,
        'reference',
    );
}

/*export */const update_test_object = async function(reference, object, token) {
    return await _update_object(
        reference,
        {
            reference: object.reference,
            Text2: object.Text2,
            Number: object.Number,
            Datetime: new Date(object.Datetime).toISOString(),
            Addon: object.Addon, // TODO Remettre la valeur object.Addon en production
            Email: object.Email,
            Boolean: object.Boolean,
        },
        token,
        ObjectName,
        'reference'
    );
}

/*export */const load_test_object = async function(reference, token) {
    return await _load_object(reference, token, ObjectName, 'reference');
}

/*export */const delete_test_object = async function(reference, token) {
    return await _delete_object(reference, token, ObjectName, 'reference');
}

/*export */const test_create = {
    reference: "a8g9m1",
    Text2: 'Premier Text2',
    Number: 15,
    Datetime: new Date('1993-09-13').getTime(),
    Addon: [1],
    Email: "mael.fallet@gmail.com",
    Boolean: true,
};
/*export */const test_update = {
    reference: "a8g9m1",
    Text2: "Second Text2",
    Number: 25,
    Datetime: new Date('2013-09-13').getTime(),
    Addon: [2],
    Email: "justforgeeking@hotmail.fr",
    Boolean: false,
};
/*export */const test_load = "a8g9m1";
/*export */const test_delete = "a8g9m1";

module.exports.create_test_object = create_test_object;
module.exports.update_test_object = update_test_object;
module.exports.load_test_object = load_test_object;
module.exports.delete_test_object = delete_test_object;
module.exports.test_create = test_create;
module.exports.test_update = test_update;
module.exports.test_load = test_load;
module.exports.test_delete = test_delete;