/*      == TABLE
Type(x)     Type(y)     Result
null        undefined   true
undefined   null        true
Number      String      x == toNumber(y)
String      Number      toNumber(x) == y
Boolean     Any         toNumber(x) == y
Any         Boolean     x == toNumber(y)
Str or num  Object      x == toPrimitive(y)
Object      Str or Num  toPrimitive(x) == y */

/* 
=== means if the values are the same type, then the result is true, otherwise is false
Type(x)     Values                                      Result
Number      x has the same value as y (but not NaN)     true
String      x and y are identical characters            true
Boolean     x and y are both true or both false         true
Object      x and y reference the same object           true
*/
//variacion 1
var num = 0;
if (num === 1) {
 console.log("num is equal to 1");
} else {
 console.log("num is not equal to 1, the value of num is " + num);
}

//variacion 2
(num === 1) ? num-- : num++;

