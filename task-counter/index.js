const value = document.getElementById('value');
const button1 = document.getElementById('decrease');
const button2 = document.getElementById('reset');
const button3 = document.getElementById('increase');

let cavab = 0;
button1.addEventListener('click',function() {
    value.innerText = --cavab;
})
button2.addEventListener('click',function() {
    cavab = 0;
    value.innerText = cavab;
})
button3.addEventListener('click',function() {
    value.innerText = ++cavab;
})