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



// multiplyNumeric function returned numbers multiplyed by 2

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
