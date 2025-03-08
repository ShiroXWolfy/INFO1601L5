let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 10 elements

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let radius = 7;
//const pi = 3.14;

//let area = radius * pi;

//console.log(area);

let first_name = "Bob";
let age = 24;

console.log(typeof first_name);
console.log(typeof age);

console.log(`Hello, my name is ${first_name}, I'm ${age} years old.`);

console.log(`I was born in ${2020 - age}`);

console.log("1" === 1);
console.log(1 === true);
console.log("true" === true);

let grade = 67;

if (grade < 50) console.log("Failed");
else console.log("Passed");

let num = 0;

while (num < 10) {
    console.log(num);
    num++;
}

for (let i = 0; i < 10; i++) console.log(i);

let x = 1;

while (x <= 50) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("fizzbuzz");
    } else if (x % 3 === 0) {
        console.log("fizz");
    } else if (x % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(x);
    }

    x++;
}

let now_time_stamp = Date.now();
console.log(now_time_stamp);

let now = new Date(now_time_stamp);
console.log(now);

let date = new Date(2019, 11, 17, 3, 24, 0);
console.log(date.toLocaleDateString("en-US"));
console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()}`);

let difference = now - date;

let day_between = difference * 1.15741e-8;
console.log(day_between);

let root = Math.sqrt(9);

let cubed = Math.pow(2, 3);

let round_down = Math.floor(12.3453);

let round_up = Math.ceil(12.3452);

let rand_num = Math.random();

let pi = Math.pi;

function rand_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function hello() {
    console.log("hello");
}

function add(a, b) {
    return a + b;
}

let ans = add(6, 1);
console.log(ans);

let ans_2 = add();
console.log(ans_2);

function add_v2(a, b = 10) {
    //fall back value
    return a + b;
}

console.log(add_v2(5, 11));

console.log(add_v2(2));

function happy_print(string) {
    console.log("😀 : " + string);
}

function sad_print(string) {
    console.log("😭 : " + string);
}

function add(a, b /*, callback*/) {
    let ans = a + b;
    //    callback(ans);
    console.log(ans);
}

add(5, 10 /*, happy_print*/);
add(11, 12 /*, sad_print*/);

function printDate() {
    console.log(date.toLocaleTimeString());
}

//setInterval(printDate, 1000);

setTimeout(printDate, 1000);

let arr_1 = [];
let arr_2 = [1, 2, 3, 4, 5, 6, 7];
let arr_3 = [1, 12.9, "Hi", "🌹"];

console.log(arr[0]);
console.log(arr_3[3]);

let arr_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr_4.length; i++) {
    console.log(arr_4[i]);
}

for (let item of arr_3) {
    console.log(item);
}

let arr_5 = [-5, 16, 33, 42, 103, 344];

console.log(arr_5.includes(-5)); //true

arr_5.push(11); //adds item to the end

console.log(arr_5); //[ -5, 16, 33, 42, 103, 344, 11];

let lastItem = arr_5.pop(); //removes last item

console.log(lastItem, arr_5); //11, [ -5, 16, 33, 42, 103, 344]

arr_5.unshift(22); //adds item to the front

console.log(arr_5); //[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr_5.shift(); //removes first item
console.log(firstItem, arr_5); //22, [-5, 16, 33, 42, 103, 344]

let reversed = arr_5.reverse(); //creates a new array in reverse order
console.log(reversed); //[344, 103, 42, 33, 16, -5]
console.log(arr_5.join("-")); //"-5-103-16-33-344-42" joins array with provided separator

let arr_6 = [12, 33, 4, 5, -4, 8, 19, 25];

//map() creates a new array from the elements of one without changing the old one
function double(num) {
    return num * 2;
}

let doubledArr = arr_6.map(double);
console.log(doubledArr);

function isOdd(num) {
    let element;
    return element % 2 !== 0;
}
//Filter takes a test condition and returns only the element which
//make the condition true
let odds = arr_6.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array
//meets a specified condition
function has5Factor() {
    let ele;
    return ele % 5 === 0;
}

let hasFiveFactor = arr_6.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b) {
    return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr_6.sort(intCompare);
console.log(ascending);

//Create a constructor a functions which builds object for us
function createPerson(name, height, weight) {
    return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
    return weight / (height * height);
}

function avgBMI(people) {
    let sum = 0;
    for (let person of people) {
        //sum the bmi of each person
        sum += calcBMI(person.weight, person.height);
    }
    //calculate average
    return sum / people.length;
}

//create a collection of people
let people = [
    createPerson("Sally", 60, 2.5),
    createPerson("Ben", 81, 3),
    createPerson("Shelly", 50, 1.7),
];

console.log(avgBMI(people));
