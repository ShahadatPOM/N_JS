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
/*let youAge =23;//number
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
console.log(fruit.split(','));//split by a given separator*/

// Array
/*let fruits = ['banana', 'apple', 'orange', 'blackberry'];
let cars = new Array('BMW', 'MBNZ', 'OD', 'FRI');
console.log(fruits[1]);// access the array value
fruits[1] = 'Custom';// change or add array value
console.log(fruits[1]);
for(let i=0; i<=fruits.length; i++){

	console.log(i);
}

// Array common methods

console.log(fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),  fruits);//remove last item of an array
console.log(fruits.push('blackberry'), fruits);//appends
console.log(fruits.shift(), fruits); //remove first item of an array
console.log(fruits.unshift('banana'), fruits);

let vegetables = ['tomato', 'asparagus', 'broccoli'];
let news = ['tomato', 'asparagus'];
let allGroceries = fruits.concat(vegetables, news);
console.log(allGroceries);
console.log(allGroceries.slice(2, 5));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());//sorted in ascending order

let someNumbers = [1, 2 ,54, 76, 4, 77, 111, 3434, 8, 64, 55, 943, 87];
console.log(someNumbers.sort(function(a,b) {return(a-b)}));//sorted in ascending order
console.log(someNumbers.sort(function(a,b) {return(b-a)}));//sorted in descending order

let emptyArray = [];
for(let num=0; num < 10; num++){
	emptyArray.push(num);
}
console.log(emptyArray);
*/

// object in JS
/*let student = {
	first: 'Md.',
	last: 'Naiem',
	age: 23,
	height: 5.3,
	studentInfo: function(){
		return this.first + '\n' + this.last + '\n' + this.age;
	}
};
console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);

student.last = 'Shahadat';

console.log(student.last);//change attribute value
student.age++;
console.log(student.age);
console.log(student.studentInfo());*/

// Conditionals control flows(if, else)
/*
let age = prompt('what is your age?');
if((age >=18) && (age <=35)){
	status = 'my way';
	console.log(status);
}else{
	status = 'not my way';
	console.log(status);
}*/

// Switch statements
// differentiate between weekday vs. weekend
let day = prompt('which day you want to check?');
switch(day){
	case 'Friday':
		text = 'Weekend';
		break;
	case 'saturday':
		text = 'Weekend';
		break;
	case 'sunday':
		text = 'Weekend';
		break;
	default:
		text = 'Weekday';
		break;
}
console.log(text);