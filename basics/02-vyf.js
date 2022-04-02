/* 
Tipo de valor   Resultado
undefined       false
null            false
boolean         true = true & false = false
number          false for 0 or NaN. Otherwise = true
string          If empty = false. Otherwise = true
object          true
*/

function testTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');
   }
   testTruthy(true); //true
   testTruthy(false); //false
   testTruthy(new Boolean(false)); //true (object is always true)
   testTruthy(''); //false
   testTruthy('Packt'); //true
   testTruthy(new String('')); //true (object is always true)
   testTruthy(1); //true
   testTruthy(-1); //true
   testTruthy(NaN); //false
   testTruthy(new Number(NaN)); //true (object is always true)
   testTruthy({}); //true (object is always true)
   var obj = {name:'John'};
   testTruthy(obj); //true
   testTruthy(obj.name); //true
   testTruthy(obj.age); //false (age does not exist)