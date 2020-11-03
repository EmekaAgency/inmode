export const capitalize = function (str = '') {
    return typeof str === 'string' ? str.length === 0 ? '' : str.length === 1 ? str.toUpperCase() : str[0].toUpperCase() + str.substr(1, str.length - 1).toLowerCase() : '';
}