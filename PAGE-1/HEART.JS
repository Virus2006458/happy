// ============================
// 💕 PAGE -1 HEART.JS (WORKING VERSION)
// ============================

// Select elements
const heartBtn = document.getElementById("heartBtn");
const ftAwal = document.getElementById("ftAwal");
const tapText = document.getElementById("tapText");
const countdown = document.getElementById("countdown");

// 🎯 Target date – November 12, 2025
const targetDate = new Date("Nov 12, 2025 00:00:00").getTime();

// Countdown function
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `⏳ ${days} days left until November 12 💕`;
  } else {
    countdown.innerHTML = "🎉 It's November 12! 🎈";
    startBalloons();
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// 🎈 Balloons animation (triggered only on Nov 12)
function startBalloons() {
  for (let i = 0; i < 25; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.setProperty("--hue", Math.random() * 360);
    balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
  }
}

// 💖 Heart click → fade-out → open Page 0
heartBtn.addEventListener("click", () => {
  // Add fade-out effect
  ftAwal.style.transition = "all 0.5s ease";
  heartBtn.style.transition = "all 0.5s ease";
  tapText.style.transition = "all 0.5s ease";
  countdown.style.transition = "all 0.5s ease";

  ftAwal.style.opacity = "0";
  heartBtn.style.opacity = "0";
  tapText.style.opacity = "0";
  countdown.style.opacity = "0";

  // 🩷 Redirect to page0 after fade-out
  setTimeout(() => {
    window.location.href = "../page0/index.html"; // ✅ correct path
  }, 800);
});
