//Primitive Types
let isApproved = true;
let firstName = undefined;
let selectedColor = null;

//Objects
let person = {
    name: 'Kevin',
    age: 23
};

person.name = 'John';

let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//Functions
//Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

//Calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
greet('Kevin', 'Sanchez');
greet('Mary', 'Smith');

///////Operators Section/////
//Arithmetic Operators Lesson
let x = 10;
let y =3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);//x^y

//Increment (++)
console.log(x++);
console.log(x);

//Increment (--)
console.log(x--);
console.log(x);

//Assignment Operators Lesson
x++; //x = x + 1
x = x + 5;
x += 5; //same as above
x -= 3;
x *= 4;
x /= 6;
x %= 7;
x **= 8;

//Comparison Operators Lesson
let z = 1;

//Relational operators
console.log(z > 0);
console.log(z >= 1);
console.log(z < 1);
console.log(z <= 1);

//Equality
console.log(z === 1);
console.log(z !== 1);

//Equality Operators Lesson
// Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);


// Lose Equality (Value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

//Ternary Operator Lesson

//If a customer has more than 100 points,
//they are a 'gold' customer, otherwise,
//they are a 'silver' customer

let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//Logical Operators Lesson
//Logical AND (&&)
//Returns TRUE if both operands are TRUE
//Logical OR (||)
//Returns TRUE if one of the operands is TRUE
console.log(false && true);
console.log(false || true);

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible',eligibleForLoan);

//NOT (!)
let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);

//Logical Operators with Non-booleans Lesson
//Falsy (false) Below are the falsey values. Treated like a "boolean false" value
//undefined
//null
//0
//false
//''
//NaN (Not a Number) 

//Anything that is not Falsey -> Truthy. Treated like a "boolean truth".
//Short-circuiting: The first "Truthy" operand will be returned

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

//Bitwise Operators Lesson
// 1 = 00000001
// 2 = 00000010
// R = 00000011 = 3
// S = 00000000 = 0

//Read, Write, Execute
//00000100 (Read)
//00000010 (Read and Write)
//00000001 (Read, Write, and Execute)
console.log( 1 | 2); //Bitwise OR
console.log( 1 & 2); //Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission  | writePermission;
console.log(myPermission);

let message = 
(myPermission & readPermission) ? 'yes': 'no';
console.log(message);

//Operators Precedence Lesson
let ex = (2 + 3) * 4;
console.log(ex);

//Exercise - Swapping Variables
let a = 'red';
let b ='blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//// Control Flow Section ////
//If..else lesson

//Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6am: Good afternoon
//Otherwise: Good evening!

let hour = 20;

if (hour >=6 && hour < 12){
    console.log('Good morning!');

}
else if (hour >=12 && hour < 18){
    console.log('Good afternoon!');
}
else{
    console.log('Good evening!');
}

//Switch...case Lesson

let role = 'guest';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break; 
    default:
        console.log('Unknown User');       
}

if(role === 'guest'){
    console.log('Guest User');
}
else if(role === 'moderator'){
    console.log('Moderator User');
}
else{
    console.log('Unknown User');
}

//For Lesson

for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0)
    console.log(i);
}

//While Lesson
let ix = 0;
while(ix <= 5){
    if(ix % 2 !==0){
        console.log(ix);
    }
    ix++;
}

//Do...while Lecture
let count = 0;
do{
    if(count % 2 !== 0){
        console.log(count);
    }
   count++;
}while(count <= 5);

//Infinite Loops Lecture
//Be careful of infinite loops, they can crash your browser

//For...In Lecture

const persona = {
    name: 'Kevin',
    age: 23
};

for (let key in persona){
    console.log(key, persona[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors){
    console.log(index, colors[index]);
}

//For...of Lecture
for(let color of colors){
    console.log(color);
}

//Break and Continue Lecture
let i = 0;
while (i <= 10)
{
    // if (i === 5){
    //     break;
    // }

    if (i % 2 === 0){
        i++;
        continue;//Jumps to the beginning of the loop
    }
    console.log(i);
    i++;
}
// Exercise 1
let num1 = maxof(8767,8768);
console.log(num1);

function maxof(x1, y1){
    return (x1 > y1) ? x1 : y1;
}

//Exercise 2
console.log(isLandscape(300,600));

function isLandscape(width, height){
    return (width > height);
}

//Exercise 3
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'
const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number'){
        return NaN;
    }
    else if (input % 3 === 0 && input % 5 === 0){
        return 'FizzBuzz';
    }
    else if (input % 3 === 0){
        return 'Fizz';
    }
    else if(input % 5 === 0 ){
        return 'Buzz';
    }
    return input;
}

//Exercise 4
//Speed Limit = 70
//5 -> 1 point
//Math.floor(1.3) = 1
// >12 points -> suspended
checkSpeed(200);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (typeof speed !== 'number'){
        return NaN;
    }
    else if (speed < speedLimit + kmPerPoint){
        console.log('OK');
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12){
        console.log('License suspended');
    }
    else{
        console.log('Points', points);
    }
}

//Exercise 5 
showNumbers(10);

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'EVEN':'ODD';
        console.log(i, message);
    }
}


//Exercise 6
//'Falsy' values include:
//undefined
//null
//''
//false
//0
//NaN
//Everything else is 'Truthy'

const array = [0, null, undefined, '', 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value)
        {
            count++;
        }
    }
    return count;
}

//Exercise 7
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj){
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key]);
        }
    }
}

//Exercise 8
//Multiples of 3: 3,6,9
//Multiples of 5: 5,10

console.log(sum(10));

function sum(limit){
    let total = 0;

    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            total += i;
        }
    }

    return total;
}

//Exercise 9
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const marks = [80, 100, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    const average = calculateAverage(marks);
    if(average < 60){
        return 'F';
    }
    else if(average < 70){
        return 'D';
    }
    else if(average < 80){
        return 'C';
    }
    else if(average < 90){
        return 'B';
    }
    return 'A';
    
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array){
        sum += value;
    }
    return sum / array.length;
}

//Exercise 10
showStars(10);

function showStars(rows){
    for (let row = 1; row < rows; row++){
        let pattern = '';
        for(let i = 0; i < row; i++){
            pattern += '*';
        }
        console.log(pattern);
    }
}
//Exercise 11
//Prime (whose factors are only 1 and itself)
//11 = 1,11
//13 = 1,13

showPrimes(30);

function showPrimes(limit){
    for(let number = 2; number <= limit; number++){        
        if (isPrime(number)){
            console.log(number);
        }
    }
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++){
        if (number % factor === 0){
            return false;
        }
    }
    return true;
}