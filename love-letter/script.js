const envelope = document.getElementById("envelope");
const letterContainer = document.getElementById("letterContainer");
const textEl = document.getElementById("text");
const glow = document.getElementById("endGlow");

let player;
let ready = false;
let started = false;

const message = `Hello baby, it makes my heart a little heavy knowing that our first Christmas, our first monthsary, and our New Year will only be spent through video calls, because all I want is to hold you, look at you, and celebrate these moments with you in person, but even with the distance my heart feels so full because loving you has already become one of the most beautiful things in my life. I thank God every single day for making our paths cross, because after everything we’ve been through, all the pain and all the lessons, He made sure that the timing was finally right and shaped me through my past so that now I can love you better, take care of you, hold you gently, and love you with all my heart the way you truly deserve. The search is over, my love, because I finally found the one and it’s you, everything I ever searched for and prayed for I found in you, and I see you as God’s gift in my life. Knowing about your past didn’t scare me, it made me love you even more, because it made me want to protect your heart and give you the kind of love that feels safe, patient, and real. Every day that we talk I want you to feel how deeply I love you and how important you are to me, because I see myself in you and with you everything feels light and easy, like my heart is finally at home, and because of you I learned to appreciate even the smallest moments since every second feels precious when it’s with you. I don’t want to waste a single moment, I want every second, every hour, and every day with you to truly matter, and I believe with everything in me that our love story is God’s will, because nothing this pure could ever be an accident. The moment you said yes, a song started playing in my mind—“Habang nakatingin sa’yo, wala na akong ibang mahihiling, saksi ang langit sa’tin”—and in that moment, I knew my heart had finally found its home. You became my Theodore, my answered prayer, my God-given gift, the love I never knew I was capable of feeling. No matter the distance, no matter the time, I will choose you every day, I will hold you in my prayers, and I will love you with a heart that only beats for you. You are my now, my always, and every future I dream of, and I promise to treasure you for as long as God allows me to love.`;

let i = 0;

function typeText() {
  if (i < message.length) {
    textEl.textContent += message.charAt(i);
    i++;
    setTimeout(typeText, 30);
  } else {
    glow.classList.add("showGlow");
  }
}

/* YouTube AUDIO ONLY (hidden) */
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "l5ta60yfryc",
    playerVars: {
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      playlist: "l5ta60yfryc"
    },
    events: {
      onReady: () => ready = true
    }
  });
}

envelope.onclick = () => {
  if (started || !ready) return;
  started = true;

  envelope.classList.add("hide");

  setTimeout(() => {
    letterContainer.classList.add("show");
    player.playVideo();
    typeText();
    startHearts();
  }, 700);
};

/* HEART SHAPES */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function startHearts() {
  setInterval(() => {
    hearts.push({
      x: Math.random() * canvas.width,
      y: canvas.height + 30,
      size: Math.random() * 14 + 10,
      speed: Math.random() * 1.2 + 0.6
    });
  }, 300);

  animateHearts();
}

function drawHeart(x, y, size) {
  ctx.fillStyle = "rgba(255, 105, 180, 0.8)";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size, y - size, x - size * 1.5, y + size / 2, x, y + size);
  ctx.bezierCurveTo(x + size * 1.5, y + size / 2, x + size, y - size, x, y);
  ctx.fill();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, index) => {
    drawHeart(h.x, h.y, h.size);
    h.y -= h.speed;
    if (h.y < -50) hearts.splice(index, 1);
  });
  requestAnimationFrame(animateHearts);
}
