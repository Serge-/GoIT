// Trying to catch an exception
try {
    console.log('Start');
    lalal;

}catch(e){
    console.log('Error '+e.name+':'+e.message+'\n'+e.stack);
}
console.log('sdsd');

//recursion timout
var timerId = setTimeout(function tick() {   console.log( 'пиу' );
    timerId = setTimeout(tick, 2000);  }, 2000);


//Try Catch with error
var data = '{ age: 30 }'; // данные неполны

try {
    var user = JSON.parse(data); // <-- выполнится без ошибок

    if (!user.name) {
        throw new SyntaxError('Данные некорректны');
    }
    console.log( user.name );

} catch (e) {
    console.log(e);
    console.log( 'Извините, в данных ошибка');
}
//JSON parse
var numbers = '[0, 1, 2, 3]';   numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1
var user = '{ "name": "Вася", "age": 35,"isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1


// JSON stringify
var event = {
    title: 'Конференция',
    date: 'сегодня'  };
var str = JSON.stringify(event);
alert( str ); // {"title":"Конференция","date":"сегодня"}
// Обратное преобразование.  event = JSON.parse(str);