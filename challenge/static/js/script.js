console.log("17 mar 2020");

function ageTaker() {
	var birthYear = prompt('What year you were born?');
	var ageInYears = (2019 - birthYear);
	var ageInDays = (2019 - birthYear) * 365;

	var h1 = document.createElement('h1');
	var text = document.createTextNode('You are ' + ageInDays + " days or " + ageInYears + " years old");
	h1.setAttribute('id', 'text');
	h1.appendChild(text);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
	document.getElementById('text').remove();
}

function catGenerator() {
	var img = document.createElement('img');
	img.setAttribute('src', 'static/images/cat3.gif');
	document.getElementById('img-container').appendChild(img);

}


