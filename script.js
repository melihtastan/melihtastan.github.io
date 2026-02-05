const text = "Robotik & Yapay Zeka Öğrencisi · Yazılım Geliştirici";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();
