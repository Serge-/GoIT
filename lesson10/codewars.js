//More than one way to call a function
function sum (a,b){
    if (arguments[1] === undefined) {
        return function(b) {
            return a + b;
        }
    } else {
        return a + b;
    }
}
// Given a string, swap the case for each of the letters.
// e.g. CodEwArs --> cODeWaRS
function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }

//Descending Order
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

//Complete The Pattern #10 - Parallelogram
function pattern(n) {
    var i, line = '', lines = [];
    for (i=1;i<=n;i++) line += i%10;
    for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
    return lines.join("\n");
}

// Return  duplicates from array
function duplicates(arr) {
    return arr.filter(function(v, i) {return arr.indexOf(v) != i && arr.lastIndexOf(v) == i;});
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3,'5']));
//---------
function duplicates(arr) {
    for (var dup = [], i = 0; i < arr.length; i++) {
        var n = arr[i]
        if (arr.indexOf(n, i + 1) >= 0 && dup.indexOf(n) < 0) {
            dup.push(n)
        }
    }

    return dup
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5', 6, 6, 7, 7]))

// reverse string and numbers
function reverseIt(data){
    if(typeof data === 'string'){
        return data.split("").reverse().join("");
    }
    if(typeof data === 'number'){
        var a = +(data.toString().split("").reverse().join(""));
        return a;
    }
    return data;
}


// summ from arguments
function add() {
    for (var n = 0, i = 0; i < arguments.length; i++) {
        n += arguments[i] * (i + 1)
    }

    return n
}
//--------------------------------------------//
function add() {
    var args = Array.prototype.slice.call(arguments);
    var summ = 0;
    for(var i = 0; i < args.length; i++) {
        var current = args[i] * (i+1);
        summ = current + summ;
    }
    return b;
}
Test.assertEquals(add(100,200,300),1400)
//-----------------------------------------//
function add() {
    return [].reduce.call(arguments, function(sum,v,i) { return sum + v * (i+1); }, 0);
}

// Average calculator
var Calculator = {
    average: function() {

        return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
                return prev + next;
            }, 0) / (arguments.length || 1);
    }
}