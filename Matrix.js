function Matrix(string) {
    'use strict';

    function fn(firstArg, secondArg) {
        var length = firstArg | 0,
            arr = new Array(length),
            args;
        if (secondArg) {
            args = Array.prototype.slice.call(arguments, 1);
            while (length--)
                arr[length] = fn.apply(undefined, args);
        }
        return arr;
    }
    return this instanceof Matrix ? fn.apply(0, string.split(',')) : new Matrix(string);
}
