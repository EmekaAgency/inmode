export const is_visible = function () {
    return typeof window !== `undefined` ? false : window.scroll > 200 ? true: false;
}