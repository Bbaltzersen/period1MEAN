/**
 * Created by bbalt on 15/02/2016.
 */


// To avoid hoisting, where we return the v value before declaring the new one.

var v, getValue;
v = 1;
getValue = (function(x) {
    return function() { return x; };
})(v);
v = 2;

console.log(getValue());

getGrowth = (function(x, y) {
    return function() { return x - y; };
})(v, getValue())

console.log(getGrowth());