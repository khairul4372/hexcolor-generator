document.querySelector('#button').addEventListener('click', function(){
	const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

	let color = '#'

	for (let i=0; i<6; i++){
		let num1 = Math.round(Math.random() * 15)
		let num2 = hexCodes[num1]
		color += num2
	}
	
	document.querySelector('#output').innerHTML = color
	document.querySelector('#output').style.color = color
	document.getElementById('container').style.backgroundColor = color
})