// 🎯 Floating background hearts
const bg = document.getElementById('floating-hearts');

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.animationDuration = 6 + Math.random() * 5 + 's';
  bg.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createFloatingHeart, 600);

// 🎯 Heart click animation & redirect
const hearts = document.querySelectorAll('.heart');
const sparkleContainer = document.getElementById('sparkle-container');

hearts.forEach((heart, index) => {
  heart.addEventListener('click', (e) => {
    // Turn red ❤️
    heart.textContent = '❤️';
    heart.style.transform = 'scale(1.3)';

    // Sparkles burst effect
    for (let i = 0; i < 15; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 60 + 20;
      sparkle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      sparkleContainer.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 800);
    }

    // Fade out heart
    setTimeout(() => heart.classList.add('fade-out'), 300);

    // Redirect after last heart
    if (index === hearts.length - 1) {
      setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = '../page1/index.html';
        }, 900);
      }, 1000);
    }
  });
});
