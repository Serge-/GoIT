
// Separate Num, String from object
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};
var ages  = [];
var names = [];
function extractNumber(){

    for(var key in obj){
        if(!isNaN(parseFloat(obj[key])) && isFinite(obj[key])){
            ages.push(obj[key]);
        } else{
            names.push(obj[key]);
        }
    }
}
extractNumber(obj);
console.log(ages); // var ages = [20,30,40];
console.log(names); // var names = ['Ivanov', 'Petrov', 'Sidorov'];

// find greater number in array
function getMaxNumber(numArr) {
    return Math.max.apply(null, numArr);
}

console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15

// Sort string letters in alphabetical order
function sortedString(str) {
    return str.split('').sort().join('');
}
console.log(sortedString('webmaster'));

// function take string and returned string with first chars echos to Uppercase
function sortedString(str) {
    var a = str.split(' ');
    
    return a.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');

}

console.log(sortedString('the quick brown fox'));


// Find longest word in string
function sortedString(str) {
    var a = str.split(' ');
    var b = '';

    for(var i=0;i<a.length; i++){
        if(b.length < a[i].length){
            b = a[i];
        }
    }
    return b;
}

console.log(sortedString('Web Development Tutorial'));

// Function returned typeof
function sortedString(str) {
    return typeof(str);
}
console.log(sortedString('Some text - string'));

// Shuffle array
function sortedString(str) {
    return str.sort(function(a, b) {
        return 0.5 - Math.random()
    });

}
console.log(sortedString([1,2,3,4,5]));

// Shuffle array (better solution!)
function sortedString(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i+1));
        var itemAtIndex = arr[randomIndex];

        arr[randomIndex] = arr[i];
        arr[i] = itemAtIndex;
    }
    return arr;

}
console.log(sortedString([1,2,3,4,5,6,7]));

// Sort by unique class,duplicate classes are sorted by number of repetitions


var arrClasses = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
var result = [];

function sortedString(arr) {
    var firstRes = {};
    var result = [];

    arr.forEach(function(elem){
        if(!firstRes[elem]){
            firstRes[elem] = 1;
        } else {
            firstRes[elem] += 1;
        }

    });

    for(var className in firstRes){
        result.push(className);
    }
    result.sort(function(a,b){
        return firstRes[b] - firstRes[a];
    });
    return result;
}

console.log(sortedString(arrClasses));

// codewars -- different arguments
function sum (a,b){
    if(arguments[1] === undefined){
        return function(b) {
            return a+b;
        }
    }else{
        return a+b;
    }
}

console.log(sum(2,3));
console.log(sum(2)(3));