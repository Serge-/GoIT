// Method call
function sumArg() {
    var args = [].slice.apply(arguments);
    args.join(', ');

    return args.reduce(function( a, b ) {
        return a + b;
    });
}

console.log(sumArg(1,2,3)); // 6


function sumArgs() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

console.log( sumArgs(4, 5, 6) ); // 15/**

// applyAll func returned func with arguments
function applyAll(func){
    return func.apply(this, [].slice.call(arguments, 1));

}

function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
console.log( applyAll(Math.max, 2, -2, 3) ); // 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2

// function decorator
function work(a,b) {
    console.log(a+b);
}

function makeLogging(f,log) {
    function wrap(){
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }
    return wrap;
}

var log = [];
work = makeLogging(work, log);

work(1,2);
work(4,5);

for(var i = 0; i < log.length; i++) {
    var args = log[i];
    console.log('Log:' + args.join());
}

console.log(log);

// Function decorator
function f(x) {
    return Math.random() * x;
}

function makeCaching(f) {

    var cache = {};

    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true

b = f(2);
console.log( a == b ); // false
