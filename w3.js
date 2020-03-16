console.log('16.03.2020');

function displayDate(){
	document.getElementById('para').innerHTML = Date();
}

function randomSort(){
	var number = [1, 2, 33, 14, 75,23, 65]	
	number.sort(
		function(a, b) { 
			return 0.5 - Math.random() 
		})
	document.getElementById('random').innerHTML = number;

}