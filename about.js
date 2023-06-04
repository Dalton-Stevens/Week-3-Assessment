console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const hoverOver = evt => {
	alert(`You Rock`);
};

let pic = document.querySelector(`#cat-picture`)

pic.addEventListener(`mouseover`, hoverOver);