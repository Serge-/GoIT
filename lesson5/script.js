//Searchifor the biggest number in object
var tasksCompleted = {
  'Anna': 29,
  'Serg': 355,
  'Elena': 1,
  'Anton': 99
};


var salary = 0;
for(var key in tasksCompleted){
  if(tasksCompleted[key] > salary){
    salary = tasksCompleted[key];
    var a = key;

  }
}
console.log(a + ' : ' + salary);



// multiplyNumeric function returned numbers multiplied by 2

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(image){

  for(var key in image){

    if(!isNaN(parseFloat(image[key])) && isFinite(image[key])){
      image[key] = image[key] * 2;
    }

  }
   return console.log(image);
}
multiplyNumeric(image);


// simple calculator. Dialog window required numbers, this numbers will be stacked
var summ = [];

var count = 0;
for(var i = 0; ;i++){

  summ[i] = prompt();

  if(!isNaN(parseFloat(summ[i])) && isFinite(summ[i])){
      count = count + summ[i]++;
    }
  else if (summ[i] === ' '){
    break;
  }
   else{
     break;
   }
}

console.log(count);

// Function added class to object

var obj = {
  className: 'open menu'
};


function addClass(obj, cls){

 var classes = obj.className.split(' ');

  if(classes.indexOf(cls) === -1){
    classes.push(cls);
  }

  obj.className = classes.join(' ');
}


addClass(obj, 'open');
console.log(obj);
addClass(obj, 'new');
console.log(obj);


// function removing dashes from sentence, first character of the word modified to UpperCase, and all words concated
function toCamelCase (str){
  var camelDash = str.split('-');


  for(var i = 0; i < camelDash.length; i++) {
          var letters = camelDash[i].split('');
          letters[0] = letters[0].toUpperCase();
          camelDash[i] = letters.join('');
     }

  return camelDash.join('');
}


console.log(toCamelCase('background-color'));

// Array cloned ans sorted, original array not changed

var arr = ['HTML', 'JavaScript', 'CSS'];

var  arrSorted = arr.slice(0);

arrSorted.sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS

// random array sort
var arr = [1, 2, 3, 4, 5];

arr.sort(function() { return 0.5 - Math.random(); });

console.log( arr );

// Sort objects by age
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function(a,b){return a.age-b.age;});

for(var i=0; i<people.length;i++){
  console.log(people[i].name);
}


// function check for the Palindrome

function isPal(string){
  var res = string.toLowerCase().replace(/ /g,'');
  var rev = res.split('').reverse().join('');

  if(res === rev){
    return true;
  }
  else{
    return false;
  }
}


console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false


// function search for similar array items, returned array with unique array items
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
var a = [];


function unique(arr) {
    nextInput:
    for(var i = 0; i<arr.length; i++){
      var res = arr[i];
      for(var j = 0; j<a.length; j++){
        if(a[j] === res)continue nextInput;
      }
        a.push(res);
      }
      return a;
}

console.log(unique(strings));


// function searching for Anagrams in array, returned array without anagrams
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

var a = [];

function anClean(arr) {
    nextInput:
    for(var i = 0; i<arr.length; i++){
      var res = arr[i].toLowerCase().split('').reverse().join('');

      for(var j = 0; j<a.length; j++){

        if(a[j] === res)continue nextInput;
      }
        a.push(arr[i]);

      }
      return a;
}

console.log( anClean(arr) );

// Second solution
function anClear(arr) {
    var obj = {};

    for(var i = 0; i < arr.length; i++ ) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');

        obj[sorted] = arr[i];
    }

    var result = [];

    for (var key in obj) {
        result.push(obj[key]);
    }

    return result;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr));
// function check array with numbers for missing number

var num1 = [0,5,1,3,2,9,7,6,4];
var num2 = [9,2,4,5,7,0,8,6,1];



function getMissingElement(arr) {
  arr.sort();
  for(var i = 0; i<arr.length; i++){

    if(i !== arr[i]){
      return i;
    }
  }

}

console.log(getMissingElement(num1));
console.log(getMissingElement(num2));
