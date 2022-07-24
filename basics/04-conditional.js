var num = 0;
if (num === 1) {
    console.log("num is equal to 1");
} else {
    console.log("num is not equal to 1, the value of num is " + num);
}

var month = 4;
if (month === 1) {
    console.log("May");
} else if (month === 2){
    console.log("June");
} else if (month === 3){
    console.log("July");
} else {
    console.log("Month is not May, June or July");
}

var month = 5;
switch(month) {
    case 1:
        console.log("January");
    break;
    case 2:
        console.log("February");
    break;
    case 3:
        console.log("March");
    break;
    default:
        console.log("Month is not January, February or March");
}

/* 
One thing that is very important in a switch statement is the usage of case and
break keywords. The case clause determines whether the value of switch is equal
to the value of the case clause. The break statement stops the switch statement
from executing the rest of the statement (otherwise, it will execute all the scripts from
all case clauses below the matched case until a break statement is found in one of
the case clauses).
*/