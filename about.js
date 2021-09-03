console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form submitted`);
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment(event){
	event.preventDefault()

	alert('You smell pretty good!')
}

let duckcomp = document.querySelector('#duck')

duckcomp.addEventListener('mouseover', compliment)