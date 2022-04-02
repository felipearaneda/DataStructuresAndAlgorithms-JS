var daysOfWeek = new Array(); //{1}
var daysOfWeek = new Array(7); //{2}
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 
'Thursday', 'Friday', 'Saturday'); //{3}

/* 
We can simply declare and instantiate a new array by using the keyword new (line {1}). 
Also, using the keyword new, we can create a new array specifying the length 
of the array (line {2}). And a third option would be passing the array elements 
directly to its constructor (line {3}).

However, using the new keyword is not a best practice. If you want to create an array 
in JavaScript, simply use brackets ([]) like in the following example:
*/
var daysOfWeek = [];
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
'Thursday', 'Friday', 'Saturday'];


// output all elements from the array
for (var i=0; i<daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

for (var i=0; i<daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
   }

//Página 46
var fibonacci = []; //{1} declaring array
fibonacci[1] = 1; //{2} assing 1st number of fibonacci sequence
fibonacci[2] = 1; //{3} assing 2nd number of fibonacci sequence

/*Este bucle se encargará de en cada iteración, sumar el valor que esté en cada posición
 * donde la resta dentro de [] indica que la posición actual menos 1 y 2 (las dos posiciones
    antes de este mismo) se sumarán. dando como resultado la suma correlativa de los números
    anteriores.
 */
for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; //{4} 
    console.log(fibonacci[i])
    console.log("2. " + fibonacci[i]);
};

for(var i = 1; i<fibonacci.length; i++){ //{5}
    console.log("3. " + fibonacci[i]); //{6}
};

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(var i = 0; i<numbers.length; i++){
    console.log("posicion: " + i + " valor: " + numbers[i]);
}

numbers[numbers.length - 2] = 10; //añade valor nuevo después de la posición indicada
numbers.push(11); //añade valor a la última posición del array
numbers.push(12, 13)
console.log("")


for(var i = 0; i<numbers.length; i++){
    console.log("posicion: " + i + " valor: " + numbers[i]);
}
console.log("");


for(var i = numbers.length; i>=0; i--){
    console.log("posicion: " + i + " valor: " + numbers[i] + " L");
    numbers[i] = numbers[i - 1];
    console.log("posicion: " + i + " valor: " + numbers[i] + " R");
}

console.log("");
numbers[0] = -1;

for(var i = numbers.length; i>=0; i--){
    console.log("posicion: " + i + " valor: " + numbers[i]);
}

numbers.unshift(-2); //inserta valores al incio del array
numbers.unshift(-4, -3);
numbers.pop() //elimina el último valor del array

for (var i=0; i<numbers.length; i++){
    numbers[i] = numbers[i+1];
   }