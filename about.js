console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('test form submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let rubberDuck = document.querySelector('img');
rubberDuck.addEventListener('mouseover', () => {
    alert('You are amazing')
}) 
