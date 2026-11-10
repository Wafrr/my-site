const themeButton = document.getElementById('themeButton');
const counterButton = document.getElementById('counterButton');
const counter = document.getElementById('counter');

let count = 0;

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

counterButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});
