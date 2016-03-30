// Check isNaN
function isNumeric(n){
	return !isNaN(parseFloat(n)) && isFinite(n); 
}


// Summ (n)
function sumTo(n){
  if (n == 1) return 1;

  return n + sumTo(n-1);

};


//  Fibonacci

function fib(n){
 if(n >= 2){
   return fib(n - 1) + fib(n - 2);
 }else{
   return n;
 }
  
}

console.log(fib(7));

// Check spam in string

function checkSpam(str){
   var toLow = str.toLowerCase();
 
  if(toLow.indexOf('sex') > 0){
    return true;
    
  }else if(toLow.indexOf('spam') > 0){
    return true;
  }else{
    return false;
  }
  
}
console.log(checkSpam('get new Sex videos'));// true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false


// Function slice string more than 20 simbols

function checkSpam(str){ 
  
  if(str.length < 20){
    return str;
    
  }else{
    return str.slice(0,20)+'...';
  }
  
}
console.log(checkSpam('How to earn fast '));
console.log(checkSpam('Everyone should learn how to program a computer because it teaches you how to think?'));
console.log(checkSpam('Everyone should learn how to program a computer because it teaches you how to thinkEveryone should learn how to program a computer because it teaches you how to think?')); 
console.log(checkSpam('12345678901234567890')); 

// 

