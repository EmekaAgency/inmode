const { _request } = require('./fetch.js');

const _create_object = async function(datas = {}, token, ObjectName, fieldName) {
    console.log(`_create_object ${ObjectName}`);
    // const id = await object_id(datas[fieldName], token, ObjectName, fieldName);
    // if(id) {
    //     return false;
    // }
    return await _request(
        "POST",
        token,
        `${process.env.STRAPI_URL}/${ObjectName}`,
        datas
    );
}

const _update_object = async function(reference, datas = {}, token, ObjectName, fieldName) {
    console.log(`_update_object ${ObjectName} with reference ${reference}`);
    const id = await object_id(reference, token, ObjectName, fieldName);
    if(!id) {
        return false;
    }
    return await _request(
        "PUT",
        token,
        `${process.env.STRAPI_URL}/${ObjectName}/${id}`,
        datas
    );
}

const _load_object = async function(value, token, ObjectName, fieldName) {
    console.log(`_load_object ${ObjectName} with ${fieldName} ${value}`);
    return await _request(
        "GET",
        token,
        `${process.env.STRAPI_URL}/${ObjectName}/?${fieldName}=${value}`,
    );
}

const _delete_object = async function(reference, token, ObjectName, fieldName) {
    console.log(`_delete_object ${ObjectName} with reference ${reference}`);
    const id = await object_id(reference, token, ObjectName, fieldName);
    if(!id) {
        return false;
    }
    return await _request(
        "DELETE",
        token,
        `${process.env.STRAPI_URL}/${ObjectName}/${id}`,
    );
}

async function object_id(reference, token, ObjectName, fieldName) {
    const _res = await _load_object(reference, token, ObjectName, fieldName);
    if(!_res) {
        return false;
    }
    if(_res.data && _res.data.length == 0) {
        return false;
    }
    return _res.data[0].id;
}

module.exports._create_object = _create_object;
module.exports._update_object = _update_object;
module.exports._load_object = _load_object;
module.exports._delete_object = _delete_object;
module.exports.object_id = object_id;