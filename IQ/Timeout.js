//***************************************
// This for will show 10*10, incorrect
var i;
for (i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    },1000);
}
// Will show correct results recursion
var i;
for (i = 0; i < 10; i++) {
    setTimeout(function(i) {
        console.log(i);
    },1000,i);
}
// Different solution
var i;
for (i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function() {
            console.log(i);
        },0);
    })(i);

}
//***************************************