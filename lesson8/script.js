// chaining method
var ladder = {
    step: 0,
    up: function() { // up
        this.step++;
        return this;
    },
    down: function() { // down
        this.step--;
        return this;
    },
    showStep: function() { // show
        console.log( this.step );
        return this;
    }
};

ladder.up().up().down().up().down().showStep(); // 1


// Calculator
function Calculator(){

    calc = {
        '+' : function(a,b){
            return a+b;
        },
        '-' : function(a,b){
            return a-b;
        }
    };

    this.calculate = function(NumStr){
        NumStr.split(' ');

        var firstNum =+ NumStr[0];
        var op = NumStr[2];
        var secondNum =+ NumStr[4];

        return calc[op](firstNum,secondNum);

    };

    this.addMethod = function(name, func){
        calc[name] = func;
    };
}

var powerCalc = new Calculator();

powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});


var result = powerCalc.calculate('6 / 2');
console.log( result ); // 8


// Collect function call number and showing date creating
function Article() {
    Article.count++;
    Article.created = +new Date();
}

Article.count = 0;

Article.showStats = function(){
    console.log( Article.count + ' ' + this.created );
};

new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
new Article();
new Article();
new Article();
new Article();
new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
