var calculator = {
    read: function (){
        this.a = parseInt(prompt());
        this.b = parseInt(prompt());

    },
    sum: function (){
        return this.a + this.b;
    },
    mul: function (){
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
//****************************************************