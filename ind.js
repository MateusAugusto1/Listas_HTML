// script.js

document.addEventListener('DOMContentLoaded', () => {
    const h2 = document.getElementById('h2');

    setInterval(() => {
        h2.style.boxShadow = `0 0 ${Math.random() * 30 + 20}px #00ffff, 0 0 ${Math.random() * 60 + 40}px #00ffff, 0 0 ${Math.random() * 90 + 60}px #00ffff`;
    }, 1000);
});
