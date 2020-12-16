export const useLocalStorage = ({
    'getItem': (function(key) {
        if(typeof window !== `undefined`) {
            return window.localStorage.getItem(key);
        }
        else {
            return null;
        }
    }),
    'setItem': (function(key, val) {
        if(typeof window !== `undefined`) {
            return window.localStorage.setItem(key, val);
        }
        else {
            return null;
        }
    }),
});