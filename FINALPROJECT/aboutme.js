// FINAL PROJECT: javascript file (ABOUT ME)

// nightmode

let hour = new Date().getHours();
console.log(hour);

let text = document.querySelector('p');
let navigation= document.querySelector('nav');
let header1= document.querySelector('h1');
let header3= document.querySelector('h3');
let background= document.querySelector('body');
let links= document.querySelector('a');
let list= document.querySelector('ul');

if (hour >= 18 || hour < 6) {
    text.style.color = 'white';
    header1.style.color = 'white';
    header3.style.color = 'white';
    links.style.color = 'white';
    list.style.color = 'white';
    navigation.style.color = 'white';
    background.style.backgroundColor = 'black';
}