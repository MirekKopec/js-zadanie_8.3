// scripts.js
document.addEventListener("DOMContentLoaded", function() {
var title = document.getElementsByTagName('h1')[0].textContent;
var name = prompt('Enter your name');
if (name =='') {
name = 'Anonymus';
}
alert('Hello, ' + name);
var tekst = title + ', ' + name + '!';
document.getElementsByTagName('h1')[0].textContent = tekst;

function windowAlert() {
    alert('Nothing here yet...under construction;)');
}
document.getElementsByTagName('button')[0].addEventListener('click', windowAlert);

console.log('Hello, ' + name);
console.log(tekst);
});
