// Balloon burst loop
document.querySelectorAll('.balloon').forEach(balloon => {
  balloon.addEventListener('animationiteration', () => {
    // Restart animation after burst
    balloon.style.animation = 'none';
    setTimeout(() => {
      balloon.style.animation = 'float 7s ease-in infinite, burst 7s ease-in infinite';
    }, 100);
  });
});

// 🎁 Fade-out transition when clicking the gift
document.getElementById("giftLink").addEventListener("click", (e) => {
  e.preventDefault(); // stop default behavior
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "../page2/index.html"; // ✅ correct relative path
  }, 700);
});

// 🎆 Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function Firework(x, y) {
  this.x = x;
  this.y = y;
  this.particles = [];

  for (let i = 0; i < 30; i++) {
    const angle = (Math.PI * 2 * i) / 30;
    const speed = random(2, 6);
    this.particles.push({
      x: this.x,
      y: this.y,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      alpha: 1,
      color: `hsl(${random(0, 360)}, 100%, 70%)`,
    });
  }
}

Firework.prototype.update = function () {
  this.particles.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.02;
  });
  this.particles = this.particles.filter((p) => p.alpha > 0);
};

Firework.prototype.draw = function () {
  this.particles.forEach((p) => {
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
};

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    fireworks.push(new Firework(random(100, canvas.width - 100), random(100, canvas.height / 2)));
  }

  fireworks.forEach((fw) => {
    fw.update();
    fw.draw();
  });

  requestAnimationFrame(animateFireworks);
}

animateFireworks();

// Resize fireworks when window resizes
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
