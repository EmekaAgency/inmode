export const edges_to_array = (object: Object) => {
    return Object.keys(object).map(elem => {return object[elem].node;});
}