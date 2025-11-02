// MÜZİK
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

if (music && playBtn) {
  playBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      playBtn.textContent = "⏸️ Durdur";
    } else {
      music.pause();
      playBtn.textContent = "🎵 Şarkımızı Çal";
    }
  });
}

// MODALLAR
const letterModal = document.getElementById("letterModal");
const proposalModal = document.getElementById("proposalModal");
const openLetter = document.getElementById("openLetter");
const openProposal = document.getElementById("openProposal");
const closeLetter = document.getElementById("closeLetter");
const closeProposal = document.getElementById("closeProposal");

// SAYFA AÇILINCA HEPSİNİ KAPAT
window.addEventListener("DOMContentLoaded", () => {
  if (letterModal) letterModal.style.display = "none";
  if (proposalModal) proposalModal.style.display = "none";
  startCountdown();
});

// MEKTUP AÇ/KAPAT
if (openLetter && letterModal) {
  openLetter.addEventListener("click", () => {
    letterModal.style.display = "flex";
  });
}
if (closeLetter && letterModal) {
  closeLetter.addEventListener("click", () => {
    letterModal.style.display = "none";
  });
}
if (letterModal) {
  letterModal.addEventListener("click", (e) => {
    if (e.target === letterModal) {
      letterModal.style.display = "none";
    }
  });
}

// EVLENME TEKLİFİ AÇ/KAPAT
if (openProposal && proposalModal) {
  openProposal.addEventListener("click", () => {
    proposalModal.style.display = "flex";

    // kalp yağmuru
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("div");
      heart.classList.add("floating-heart");
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  });
}
if (closeProposal && proposalModal) {
  closeProposal.addEventListener("click", () => {
    proposalModal.style.display = "none";
  });
}
if (proposalModal) {
  proposalModal.addEventListener("click", (e) => {
    if (e.target === proposalModal) {
      proposalModal.style.display = "none";
    }
  });
}

// COUNTDOWN (3 Kasım)
function startCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  function update() {
    const now = new Date();
    const year = now.getFullYear();
    // her yıl 3 Kasım
    let target = new Date(`${year}-11-03T00:00:00`);
    if (now > target) {
      target = new Date(`${year + 1}-11-03T00:00:00`);
    }
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    el.textContent =
      (days < 10 ? "0" + days : days) + " Gün " +
      (hours < 10 ? "0" + hours : hours) + " Saat " +
      (mins < 10 ? "0" + mins : mins) + " Dakika " +
      (secs < 10 ? "0" + secs : secs) + " Saniye";
  }

  update();
  setInterval(update, 1000);
}
