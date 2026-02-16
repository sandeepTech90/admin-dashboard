export const debounce = (fn: Function, delay: number) => {
    let timer: number;
    return function(...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}