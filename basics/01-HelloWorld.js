console.log('Hello, World!');

var num = 1;
num = 3;

var price = 1.5;
var nombre = 'Packet';
var trueValue = true;
var nullVar = null;
var und;

console.log("num: "+ num);
console.log("name: "+ nombre);
console.log("trueValue: "+ trueValue);
console.log("price: "+ price);
console.log("nullvar: "+ nullVar);
console.log("und: "+ und);

//variable scope

var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction(){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    var myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());

console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);


//Operators
var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num ++;
num --;

console.log(typeof num);

num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

console.log('packt' ? true : false);

console.log('packt' == true);

/* 
    Arithmetic operator
    + Addition
    - Subtraction
    * Multiplication
    / Division
    % Modulus (remainder of a division operation)
    ++ Increment
    -- Decrement
*/

/*
    Assignment operator
    = Assignment
    += Addition assignment (x += y) == (x = x + y)
    -= Subtraction assignment (x -= y) == (x = x - y)
    *= Multiplication assignment (x *= y) == (x = x * y)
    /= Division assignment (x /= y) == (x = x / y)
    %= Remainder assignment (x %= y) == (x = x % y
*/

/*
    Comparison operator
    == Equal to
    === Equal to (value and object type both)
    != Not equal to
    > Greater than
    >= Greater than or equal to
    < Less than
    <= Less than or equal to
*/

/* 
    Logical operator
    && And
    || Or
    ! Not
*/

/* 
    Bitwise operator
    & And
    | Or
    ~ Not
    ^ Xor
    << Left shift
    >> Right shift
*/

//El resultado es verdadero ya que string.length > 1. Si string.length < 1 = false
//console.log('packt' ? true : false);


//El resultado es falso, ya que convierte boolean y string a number, por ende true = 1 y 'packt' = NaN, por lo que es false.
//console.log('packt' == true);
