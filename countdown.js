function updateCountdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 10, 24);
  if (now > target) {
    target = new Date(now.getFullYear() + 1, 10, 24);
  }
  const diff = target - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").textContent =
    `🎉 Zeynebim’in doğum gününe ${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye kaldı!`;
}
updateCountdown();
setInterval(updateCountdown, 1000);