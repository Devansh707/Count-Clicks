var a1 = document.getElementById('box');
var count = 0;
var a2 = document.getElementById('a1');

a1.addEventListener('click', function(){
	count++;
	a2.innerText = count;
})