//Chapter 5
//string in js
//what is array-- a data structure where we can organize multiple data under a single variable

//array declare
var arr = [1, 2, 3, 4, 5];

console.log(arr[3]);
console.log(arr.length);


var arr2 = Array('a', 1, 3, 6, 'g', 'h');
console.log(arr2);

//45 array traverse
var sum = 0;
for(var i=0; i<arr.length; i++){
    sum+=arr[i];
    console.log(arr[i]);
}
console.log('summation is: ', sum);