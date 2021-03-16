const rand_token:Function = (length:number):string => {
    // var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return new Array(length).fill(' ').map(key => {
        return chars.charAt(Math.floor(Math.random() * chars.length));;
    }).join('');
};

export default rand_token;