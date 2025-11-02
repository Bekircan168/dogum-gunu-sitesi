// basit geri sayım (3 Kasım 2025)
const cdEl = document.getElementById('countdown');
const target = new Date('2025-11-03T00:00:00');
function updateCD(){
  const now = new Date();
  let diff = target - now;
  if (diff < 0) diff = 0;
  const s = Math.floor(diff/1000);
  const d = Math.floor(s/86400);
  const h = Math.floor((s%86400)/3600);
  const m = Math.floor((s%3600)/60);
  const sec = s % 60;
  cdEl.textContent = `${String(d).padStart(2,'0')} Gün ${String(h).padStart(2,'0')} Saat ${String(m).padStart(2,'0')} Dakika ${String(sec).padStart(2,'0')} Saniye`;
}
updateCD();
setInterval(updateCD, 1000);

// müzik + görsel bar
const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
const songVisual = document.getElementById('song-visual');
const svTrack = document.getElementById('svTrack');

if (playBtn){
  playBtn.addEventListener('click', async () => {
    if (music.paused){
      try{
        await music.play();
        playBtn.textContent = "⏸ Durdur";
        songVisual.classList.remove('hidden');
      }catch(e){
        alert("Tarayıcı çalmaya izin vermedi, bir kez daha tıkla ❤️");
      }
    }else{
      music.pause();
      playBtn.textContent = "🎵 Şarkımızı Çal";
      songVisual.classList.add('hidden');
    }
  });
}

// şarkı bitince gizle
music.addEventListener('ended', () => {
  songVisual.classList.add('hidden');
  playBtn.textContent = "🎵 Şarkımızı Çal";
});

// mektup aç kapa
const openLetter = document.getElementById('openLetter');
const letterModal = document.getElementById('letterModal');
const closeLetter = document.getElementById('closeLetter');

openLetter.addEventListener('click', () => {
  letterModal.removeAttribute('hidden');
});
closeLetter.addEventListener('click', () => {
  letterModal.setAttribute('hidden', '');
});
letterModal.addEventListener('click', (e) => {
  if (e.target === letterModal) letterModal.setAttribute('hidden','');
});
// ======================
// 3) EVLENME TEKLİFİ MODALI
// ======================
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

if (closeProposal && proposalModal) {
  closeProposal.addEventListener("click", () => {
    proposalModal.hidden = true;
  });
}

// modalın dışına tıklayınca kapat
if (proposalModal) {
  proposalModal.addEventListener("click", (e) => {
    if (e.target === proposalModal) {
      proposalModal.hidden = true;
    }
  });
}


