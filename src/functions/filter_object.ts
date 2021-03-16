export const filter_object = (obj:Object, predicate:Function) => {
    return Object.keys(obj)
        .filter( key => predicate(obj[key]) )
        .reduce( (res, key) => (res[key] = obj[key], res), {} );
}