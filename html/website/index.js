//console.log("Hello");
//console.log("I like pizza");
//window.alert("This is an alert");
//window.alert("I like pizza");
//This a comment line
/*
This is a comment line

document.getElementById("myH1").textContent="Hello";
document.getElementById("myP").textContent="I like pizza";
*/
/* variable=A container that stores a value.Behaves as if it were the value it contains.
    1.declaration lex x ;
    2.assignment x = 100;
*/
/*
let x ;
x = 100;
console.log(x);

let age=25;
console.log(age);
console.log(`You are ${age} years old`  );
console.log(typeof age);

let price=10.99;
console.log(price);
console.log(`The price is ${price} `);
console.log(typeof price);

let gpa=2.1;
console.log(gpa);
console.log(`The gpa is ${gpa}`);
console.log(typeof gpa);

let firsName="Tuba";
console.log(typeof firsName);
console.log(`Your name is ${firsName}`);

let online=true;
console.log(typeof online);
console.log(`Bro is online:${online} `);

let forSale=false;
console.log(`This is not sale: ${forSale}`);
*/
/*
let fullName="Bro Code";
let age=25;
let student=false;
document.getElementById("p1").textContent = ` Yor name is ${fullName}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;
*/
/*
let userName;
userName = window.prompt("What is your username:");
console.log(userName); */

/*
let userName;
document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`
    console.log(userName);
}
*/

/*
let age = window.prompt("How old are you ?")
age=Number(age);
age +=1;
console.log(age,typeof age );
*/

//console.log(Math.E);
//console.log(Math.PI);

//let x=3.21;
//let y = 2;
//let z=1 ;
//z = Math.round(x);
//z= Math.floor(x);
//z=Math.ceil(x);
//z=Math.trunc();
//z=Math.pow(x,y);
//z=Math.sqrt(x);
//z=Math.log(x)
/*
let max =Math.max(x,y,z);
let min =Math.min(x,y,z);
console.log(max);
console.log(min);

let randomNum=Math.floor(Math.random() * 100 ) + 1;
console.log(randomNum);
*/
/*
const min = 50;
const max= 100;
let randomNum=Math.floor(Math.random() * max) + min;
console.log(randomNum);
*/

/*
let age = 25;
if(age >= 18){
    console.log("You are old enough to enter this site ");
}
else if (age < 0){
    console.log("Your age can not be below 0")
}
else{
    console.log("You must be +18 to enter this wibsite ");
}
*/
/*
// ternary operator = a shortcut to if{} and else statements helps to assign a variable based on a condition.  condition? codeIfFalse;

let age = 21;
let message = age >=18 ? "You're an adult " : "You're a minor";
console.log(message);
*/

//SWITCH = can be an efficient replacement to many else if statements 
/*
let day = 1;
switch(day){
    case 1 :
        console.log("It is Monday");
        break;
    case 2 :
        console.log("It is Tuesday");
        break;
    case 3 :
        console.log("Today is Wednesday");
        break;
    case 4 :
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6 :
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break; 
    default:
        console.log(`${day} is not valid `);
}
*/

//string methods= allow you to manipulate and work with text(strings)
