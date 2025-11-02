// Müzik kontrolü
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸️ Durdur";
  } else {
    music.pause();
    playBtn.textContent = "🎵 Şarkımızı Çal";
  }
});

// Mektup modalı
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");

openLetter.addEventListener("click", () => (letterModal.hidden = false));
closeLetter.addEventListener("click", () => (letterModal.hidden = true));
letterModal.addEventListener("click", (e) => {
  if (e.target === letterModal) letterModal.hidden = true;
});

// Evlenme teklifi modalı
const openProposal = document.getElementById("openProposal");
const proposalModal = document.getElementById("proposalModal");
const closeProposal = document.getElementById("closeProposal");

openProposal.addEventListener("click", () => {
  proposalModal.hidden = false;

  // Kalp yağmuru
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

closeProposal.addEventListener("click", () => (proposalModal.hidden = true));
proposalModal.addEventListener("click", (e) => {
  if (e.target === proposalModal) proposalModal.hidden = true;
});
