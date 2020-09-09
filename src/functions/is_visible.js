export const is_visible = function () {
    return window == undefined ? false : window.scroll > 200 ? true: false;
}