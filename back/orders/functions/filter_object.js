/*export */const filter_object = function(obj, predicate) {
    return Object.keys(obj)
        .filter( key => predicate(obj[key]) )
        .reduce( (res, key) => (res[key] = obj[key], res), {} );
}

module.exports.filter_object = filter_object;