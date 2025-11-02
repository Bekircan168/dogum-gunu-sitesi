// === MÜZİK ===
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

if (playBtn && music) {
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

// === MEKTUP MODALI ===
const openLetter = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");

if (openLetter && letterModal) {
  openLetter.addEventListener("click", () => {
    letterModal.hidden = false;
  });
}

if (closeLetter) {
  closeLetter.addEventListener("click", () => {
    letterModal.hidden = true;
  });
}

if (letterModal) {
  letterModal.addEventListener("click", (e) => {
    if (e.target === letterModal) {
      letterModal.hidden = true;
    }
  });
}

// === EVLENME TEKLİFİ MODALI ===
const openProposal = document.getElementById("openProposal");
const proposalModal = document.getElementById("proposalModal");
const closeProposal = document.getElementById("closeProposal");

if (openProposal && proposalModal) {
  openProposal.addEventListener("click", () => {
    proposalModal.hidden = false;

    // kalp yağdır
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

if (closeProposal) {
  closeProposal.addEventListener("click", () => {
    proposalModal.hidden = true;
  });
}

if (proposalModal) {
  proposalModal.addEventListener("click", (e) => {
    if (e.target === proposalModal) {
      proposalModal.hidden = true;
    }
  });
}
