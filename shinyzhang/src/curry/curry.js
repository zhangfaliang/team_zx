function currying(fn) {
  var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    return function() {
    var innerArgs = slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  }
}
function add(num1, num2) {
  return num1 + num2;
}

function curryAdd(num) {
  return num + 5;
}
var curryAdd5 = currying(add, 5);

var curryAdd4 = currying(add, 4);

curryAdd5(1); // 6

curryAdd4(1); // 5