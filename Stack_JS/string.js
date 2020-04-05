//Chapter 5
//string in js
//what is string

//37 'string' or "string"
//38 literal
/*var str = 'string';
// constractor
var str = String('string');*/ //use for store a no as string
// ex:
//var n= 10;
//var n =String(10);//or
/*var n= 10 + '';
console.log(n);*/

//39what is escape notation
/*\''
\n-New Line
\t-tab
\v-vertical tab
\r-Carriage Return
\b-backspace
\f-form feed*/
/*
var str = 'this is stack \n\'j\ts\'';
console.log(str);*/

// 40 compare string
// follow lexicographic system; order by(large<-z,y,x...a,Z,Y,X...A->small)
/*var a = 'aas';
var b = 'aax';
console.log(a > b);
console.log('005' == 5);*/

// 41 string methods
/*var a = 'I am';
var b = 'Md. Shahadat Hossain';

var c = a.concat(' '+ b);*/
 // console.log(c.endsWith('Hossain'));
// console.log(c.startsWith('I'));
//  console.log(c.substr(5, 5));
// console.log('   spacee'.trim());
// console.log(c.split(' '));

// 42 get length of a string
/*
var abc = 'lest find string length';

var len = 0;
while(true){
	if(abc.charAt(len) == ''){
		break;
	}
	else{
		len++;
	}
}
console.log(len);*/
