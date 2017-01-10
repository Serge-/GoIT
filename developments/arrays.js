//*********************************** SORTING ARRAY WITH STRINGS **************//
var arr = [1,2,5,4,'sosiska',3,6,'cake',7,8,15,'string'];
arr.sort(function(a,b){
    if(+a && +b){
        return a-b;
    } else if (+b) {
        return -1;
    } else {
        return 1;
    }

});
console.log(arr);
//*********************************** SORTING ARRAY WITH STRINGS **************//
//*********************************** Keys from object ***************************//

var user = { name: 'Sergey', age: 32, sex: 'male' };

var keys = Object.keys(user);

for (var i = 0; i < keys.length; i++ ) {
    console.log('Field ' + keys[i] + ', value: ' + user[keys[i]]);
}
//*********************************** Keys from object ***************************//
//*********************************** Sort array by most used classes ***************************//

var classesNames = ['header', 'menu', 'menu__item', 'menu__item', 'menu__item', 'link', 'link', 'link__first', 'link__second', 'footer', 'tab_item', 'tab_item', 'tab_item', 'tab_item', 'tab_item', 'tab_item', 'tab_item'];

var classesObj = {};

classesNames.forEach(function (elem) {
    if (!classesObj[elem]) {
        classesObj[elem] = 1;
    } else {
        classesObj[elem] += 1;
    }
});

var result = [];

for (var className in classesObj) {
    result.push(className);
}

result.sort(function(a,b){
    return classesObj[b] - classesObj[a];
});

console.log(result);

//*********************************** Sort array by most used classes ***************************//
//*************************************************************************************//
//Closures returned a function with num of calls
function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        (function (i) {
            callbacks.push(
                function () {
                    return i;
                }
            );
        })(i);
    };

    return callbacks;
}
//*************************************************************************************//
//Set and Get object params
function createSecretHolder(secret) {
    var _secret = secret;
    return {
        setSecret: function(secret){
            _secret = secret
        },
        getSecret: function(){
            return _secret;
        }
    }
}