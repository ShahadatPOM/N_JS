//Chapter 5
//string in js
//what is array-- a data structure where we can organize multiple data under a single variable

//array declare
//var arr = [1, 2, 3, 4, 5];

//console.log(arr[3]);
//console.log(arr.length);


/*var arr2 = Array('a', 1, 3, 6, 'g', 'h');
console.log(arr2);*/

//45 array traverse
/*var sum = 0;
for(var i=0; i<arr.length; i++){
    sum+=arr[i];
    console.log(arr[i]);
}
console.log('summation is: ', sum);*/

//46 insert remove and replace element in array
//arr[3] = 6;
//arr.push(6);
//arr.pop(6);
//arr.unshift(6);
//arr.shift(6);
//arr.splice(3, 2, 89,43);
//arr[3] = undefined;

//47 search index no of an element
/*var arr3 = [24, 2, 45, 65, 98, 5, 2, 0, 98, 6];
var find = 29;
var isFound = false;
for(var i=0; i<arr3.length; i++){
    if(arr3[i] === find){
        console.log('given value is at index', i);
        isFound = true;
    }
}

if(!isFound){
    console.log('given value not matched')
}*/

//48 multidimensional array
/*var mul_arr = [
    [1, 4, 7, 2, 9],
    [89, 4, 65, 21, 8],
    [55, 63, 97, 6, 2],
];

//console.log(mul_arr[1][4]);
for(var i=0; i<mul_arr.length; i++){
    for(var j=0; j<mul_arr[i].length; j++){
        console.log('mul_arr['+i+']['+j+'] =>', mul_arr[i][j]);

    }
}*/

//49 reverse array
/*var arr = [89, 4, 65, 21];
for(var i=0; i<(arr.length/2); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
}
       console.log(arr);*/
//50 array method

//var arr = [1, 4, 7, 8, 9, 10];
//var arr2 = [18, 59, 70];
//var s = 5;
//console.log(arr.join(' | '));//represent an array in different format
//console.log(arr.fill(4));//fill an array with a specific value
//console.log(arr2.concat(arr));
//console.log(Array.isArray(s));//check var is array or not
//var t = Array.from(arr);// create a duplicate array from an existing array
//t[2] = 9;
//console.log(t, 'and', arr);
//var arr1 =[1,5];
//var arr2 = arr1;// this kind of duplicate create prb when changing one array element then change happen in both array, so should use Array.from()
//arr2[1] = 9;
//console.log(arr1,'and', arr2);