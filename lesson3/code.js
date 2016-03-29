// Prime numbers

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < 10; i++){
    if(isPrime(i)) console.log(i);
}

// Switch in if else
var browser = prompt('BROWSER');

if(browser === 'IE'){
  console.log('You have IE browser!');
}else if(browser === 'Chrome' || browser === 'Opera' || browser === 'Safari' || browser === 'Firefox'){
  console.log('Your browser is OK!');
}else{
    console.log('Who is here?');
}

// Numbers dividing on 3 & 5 replased on the words "Fizz" and "Buzz"

for(var i = 1; i<=100 ; i++){
  var a;
  if(i%3 !== 0 && i%5 !== 0){
    console.log(i);
  }
  if(i%3 === 0){
    a = i;
    console.log(a = 'Fizz');
    
  }
  if(i%5 === 0){
      console.log(a = 'Buzz');
  }
}

// CHESS BOARD

var a = '';
var chessBoard = function(horis, vert){
  a += '\n';
  for(var i = 1; i <= horis; i++){
    
  if(i%2 === 0){
     a+= ' ';
   }
    for(var j = 1; j <= vert; j++){
      a += '# ';
    }
    a += '\n';
  }
  
  console.log(a);
};
chessBoard(8,8);


// Function returned fewer 

var returnNum = function(a,b){
  if(a<b){
    return a;
  }else if(b<a){
    return b; 
  }
};
console.log(returnNum(1,-2));

// Make negative 

function makeNegative(num) {

  
  return num > 1? -num : num;// Code?
}
console.log(makeNegative(-150));



 