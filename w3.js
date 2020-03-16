console.log('16.03.2020');

function displayDate(){
	document.getElementById('para').innerHTML = Date();
}

function randomSort(){
	var number = [1, 2, 33, 14, 75,23, 65, 56]	
	/*number.sort(
		function(a, b) { 
			return 0.5 - Math.random() 
		})*/
	document.getElementById('random').innerHTML = max(number);

}

function max(num){
	let len = num.length;
	let max = -Infinity;
	while(len--){
		if(num[len] > max){
			max = num[len];
		}
	}
	return max;
}

// find the heighest or lowest array vlue

