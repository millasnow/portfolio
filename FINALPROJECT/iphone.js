// FINAL PROJECT: javascript file (SHOT ON IPHONE)

// border around images when hovered

let images = document.querySelectorAll('img');
let header = document.querySelector('h3')

function borders() {
	this.style.outline = '3px #6200FF solid ';
	header.style.color = '#6200FF';
}

function resetborders() {
	this.style.outline = 'none';
	header.style.color = 'black';
}

images[0].addEventListener('pointerover', borders);
images[1].addEventListener('pointerover', borders);
images[2].addEventListener('pointerover', borders);
images[3].addEventListener('pointerover', borders);
images[4].addEventListener('pointerover', borders);
images[5].addEventListener('pointerover', borders);
images[6].addEventListener('pointerover', borders);
images[7].addEventListener('pointerover', borders);
images[8].addEventListener('pointerover', borders);
images[9].addEventListener('pointerover', borders);
images[10].addEventListener('pointerover', borders);
images[11].addEventListener('pointerover', borders);

images[0].addEventListener('pointerout', resetborders);
images[1].addEventListener('pointerout', resetborders);
images[2].addEventListener('pointerout', resetborders);
images[3].addEventListener('pointerout', resetborders);
images[4].addEventListener('pointerout', resetborders);
images[5].addEventListener('pointerout', resetborders);
images[6].addEventListener('pointerout', resetborders);
images[7].addEventListener('pointerout', resetborders);
images[8].addEventListener('pointerout', resetborders);
images[9].addEventListener('pointerout', resetborders);
images[10].addEventListener('pointerout', resetborders);
images[11].addEventListener('pointerout', resetborders);