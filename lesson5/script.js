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
