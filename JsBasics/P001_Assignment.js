// Assignment 1- Student Information


let str = 'Rohit Prasad';
console.log('Student name is:'  +str);
console.log(typeof str);

let age = 25;
console.log('Sudent age is:'  +age);
console.log(typeof age);

let enrolled = true
console.log('Is the student currently enrolled:' +enrolled);
console.log(typeof enrolled);

let student_grade = 'A+';
console.log('Student Grade is:'  +student_grade);
console.log(typeof student_grade);

let student_email = 'abc123@gmail.com'
console.log('Student email is:' +student_email);
console.log(typeof student_email);

// Assignment 2- Identify the Data Type


let a = 100;
console.log('Value is:' +a);
console.log(typeof a);

let b = "100"
console.log('Value is:' +b);
console.log(typeof b);

let c = true
console.log('Value is:' +c);
console.log(typeof c);

let d;
console.log('Value is:' +d);
console.log(typeof d);

let e = null;
console.log('Value is:' +e);
console.log(typeof e);

let f = 12345678901234567890n;
console.log('Value is:' +f);
console.log(typeof f);

// Assignment 3- var,let and const

let companyName = 'Google';
console.log('companyName is: ' +companyName);

let employmeeName = 'Rohit Prasad';
console.log('employeeName is: ' +employmeeName);

let employeeId = 12345;
console.log('employeeId is: ' +employeeId);

/* 

Using var, let and const & reassigning companyName, employeeName and employeeId 

var companyName = 'HDFC';
console.log('companyName is: ' +companyName);

let employmeeName = 'John';
console.log('employeeName is: ' +employmeeName);

const employeeId = 7890;
console.log('employeeId is: ' +employeeId);

*/

// Assignment 4- Predict the Output

var x =10;
let y =20;
const z =30;

console.log(x);
console.log(y);
console.log(z);

x=100;
y=200;

console.log(x);
console.log(y);
console.log(z);

// Assignment 5- Find the error

var g = 10;
g = 20;

let h = 30;
h = 40;

//const c = 50;
//c = 60; //TypeError: Assignment to constant variable.

console.log(g);
console.log(h);
//console.log(c);


// Assignment 6- Mixed data types

    let eName  = 'Rohit';
    const eId  =  10;
    var salary =  2000000;
    let Is_employee_permanent = true;
    const joining_date = '01-11-2024';
    let manager_name = 'John';

console.log(eName);
console.log(typeof eName);
console.log(eId);
console.log(typeof eId);
console.log(salary);
console.log(typeof salary);
console.log(Is_employee_permanent);
console.log(typeof Is_employee_permanent);
console.log(joining_date);
console.log(typeof joining_date);
console.log(manager_name);
console.log(typeof manager_name);


// Assignment 7- Employee Profile.

  let  employee = {
   id: 101,
   name: "Rohit",
   age: 30,
}

console.log('id');


//JavaScript - Find the error questions
//Question 1

let name = "Rahul";
let name = "Amit";
console.log(name);//SyntaxError: Identifier 'name' has already been declared

//Question 2

const age = 25;
age = 30;
console.log(age);//TypeError: Assignment to constant variable.

//Question 3

const city;
city="Pune";
console.log(city);//SyntaxError: Missing initializer in const declaration

//Question 4

let salary = 50000;
salary = 60000;
console.log(salary);//60000

//Question 5

var company="ABC";
var company="XYZ";
console.log(company);// XYZ

//Question 6

let age=25;
var age=30;
console.log(age);//SyntaxError: Identifier 'age' has already been declared


//Question 7

let age = 25;
age = "Twenty Five"
console.log(age);//Twenty Five

//Question 8

const value = 100;
value = "Hello";
console.log(value);//TypeError: Assignment to constant variable.

// Tricky Questions
//Question 1

var x=10;
{
    var x=20;
}
console.log(x); //20

//Question 2

let x=10;
{
    let x=20;
}
console.log(x); //10

//Question 3

const x = 10;
{
    const x=20;
}
console.log(x); //10

//Question 4

let age = 25;
{
    let age=30;
    console.log(age);
}
console.log(age); // 30,25

//Question 5

var x=10;
{
    var x = 20;
    console.log(x);
}
console.log(x); // 20,20

//Question 6

console.log(age);
let age=25; // ReferenceError: Cannot access 'age' before initialization

//Question 7

console.log(age);
var age=25; // undefined

//Question 8

var x=10;
{
    let x=20;
    console.log(x);
}
console.log(x); //20, 10

//Question 9

let x = 10;
{
    var x=20;
}
console.log(x); // SyntaxError: Identifier 'x' has already been declared

//Question 10

const x=10;
{
    var x=20;
}
console.log(x); // SyntaxError: Identifier 'x' has already been declared



//Interview Questions
1.
What is a variable in JavaScript?

JavaScript variables are containers for data.
or
Name of stoarge location is called variable.

2.
What is the difference between declaration and initialization?



3.
What is the difference between var, let, and const?

var is older way of declaring.
let & const is modern way of declaring.

4.
Can a const variable be reassigned?

5.
Can a let variable be reassigned?

6.
Can a var variable be reassigned?

7.
What are the seven primitive data types?

Number
string
Boolean
undefined
null
BigInt
Symbol

8.
What is the result of typeof null?
object

9.
Why does typeof null return "object"?

10.
What is the difference between undefined and null?

11.
What is BigInt?

12.
How do you create a BigInt?

13.
What is the purpose of Symbol?

14.
What does typeof do?

15.
What is Number.MAX_SAFE_INTEGER?

16.
Explain Hoisting with example

17.
What happens when you try to reassign a const variable?

18.
Can a variable declared with let be declared again in the same scope?

19.
Can a variable declared with var be declared again in the same scope?

20.
Which is generally preferred for variables whose value should not change: let or const?





















