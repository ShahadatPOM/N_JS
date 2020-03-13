console.log('began 11/3/20');

// variable
/*var a = 'something';
console.log(a);

var num = 43;
console.log(num);

var ques = prompt('What is your goal');


document.getElementById('para').innerHTML = "today is js day 2";

// numbers in js
var num1 = 4;
num1++;
console.log(num1);*/

// function in js

/*function fun(){
	alert('this is a function');
	console.log('this is from console');
}


fun();

function greeting(){
	var name = prompt('what is your name');
	return "Hello"+ ' ' + name;
}
document.getElementById('para').innerHTML = greeting();

function sum(num1, num2){
	var result = num1+num2;
	console.log(result);
}

sum(4, 6);*/

// while vs for

// while loops
/*
var num = 0;
while(num < 100){
	 num += 30;
	console.log(num);
}

// for loop
for(var i=1; i<=10; i++){
	console.log(i);
}*/
// Data types
let youAge =23;//number
let yourName = 'Naiem';//string
let fullName = {first: 'Md. Shahadat Hossain', last: 'Naiem'}; //object
let truth = false; //boolean
let groceries = ['apple', 'dab', 'banana', 'oranges'];//array
let random; //undefined
let nothing = null;//value null

// String in JS
let fruit = 'banana, blackberry';
let moreFruit = 'banana\napple'; //new line
console.log(fruit);
console.log(moreFruit);
console.log(fruit.length);//find the length of a string
console.log(moreFruit.length);//find the length of a string
console.log(fruit.indexOf('a'));//find the position of an alphabet within a string
console.log(moreFruit.indexOf('l'));//find the position of an alphabet within a string
console.log(fruit.slice(1, 5));//slice the string by given start and end index number(substring not include end index no alphabet)
console.log(fruit.replace('nana', '3112'));//replacing a string value
console.log(fruit.charAt(0));
console.log(fruit[2]);
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());//
console.log(fruit.split(','));//split by a given separator
