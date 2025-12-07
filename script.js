const heartsContainer = document.querySelector('.hearts-container');
const title = document.getElementById('animatedTitle');
const text = 'Good Byeee 2025';

text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${i * 0.1}s`;
    span.style.color = '#ff1493';
    title.appendChild(span);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    const colors = ['#ff1493', '#ff69b4', '#ff85c1', '#ffa0d2', '#ffb3e6', '#ff6b9d', '#ff4da6', '#ff0080', '#ff33aa', '#ff99cc'];
    const startPos = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 200;
    heart.style.left = startPos + '%';
    heart.style.setProperty('--drift', drift + 'px');
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 1 + 's';
    heart.style.fontSize = (Math.random() * 24 + 20) + 'px';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.textShadow = `0 0 10px ${heart.style.color}, 0 0 20px ${heart.style.color}`;
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 12000);
}

function createFloatingText() {
    const messages = ['i luv u all', 'muha', 'i luv girls', 'hehe'];
    const text = document.createElement('div');
    text.classList.add('float-text');
    text.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    const startPos = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 150;
    text.style.left = startPos + '%';
    text.style.setProperty('--drift', drift + 'px');
    text.style.animationDuration = (Math.random() * 3 + 8) + 's';
    text.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(text);
    
    setTimeout(() => {
        text.remove();
    }, 12000);
}

setInterval(createHeart, 200);
setInterval(createFloatingText, 1500);

for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}

for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingText, i * 1000);
}

setInterval(() => {
    const spans = title.querySelectorAll('span');
    spans.forEach((span, i) => {
        setTimeout(() => {
            span.style.transform = 'scale(1.5)';
            setTimeout(() => span.style.transform = '', 200);
        }, i * 50);
    });
}, 4000);
