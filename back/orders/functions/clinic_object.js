const { 
    _create_object,
    // _update_object,
    // _load_object,
    // _delete_object
} = require('./strapi.js');

/*export */const create_clinic_object = async function(object, token) {
    console.log(`object.Clinic.street : ${object.street}`);
    try {
        return _create_object(
            object,
            token,
            'clinic-finders',
            'Reference',
        );
    }
    catch(error) {
        console.log('create_order_object error');
        console.log(error);
        return {
            error: error,
        };
    }
}

module.exports.create_clinic_object = create_clinic_object;