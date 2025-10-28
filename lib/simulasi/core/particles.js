// /lib/simulasi/core/particles.js
// ------------------------------------------------------
// Bagian efek partikel dari file asli: api, air, gelembung, dan uap
// ------------------------------------------------------

function api(data) {
  for (var i = 0; i < data.length; i++) {
    var p = data[i];
    p.y -= p.v;
    p.size -= 0.3;
    p.life -= 1;
    if (p.life <= 0 || p.size <= 0) {
      data.splice(i, 1);
      continue;
    }
    var grad = konten.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
    grad.addColorStop(0, "rgba(255, 200, 0, 1)");
    grad.addColorStop(0.5, "rgba(255, 100, 0, 0.7)");
    grad.addColorStop(1, "rgba(255, 0, 0, 0)");
    konten.fillStyle = grad;
    konten.beginPath();
    konten.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    konten.fill();
  }

  if (Math.random() < 0.5) {
    data.push({
      x: Math.random() * canvas.width,
      y: canvas.height - 20,
      size: 10 + Math.random() * 10,
      v: 1 + Math.random() * 2,
      life: 50 + Math.random() * 50,
    });
  }
}

function air(data) {
  for (var i = 0; i < data.length; i++) {
    var p = data[i];
    p.y += p.vy;
    p.x += p.vx;
    p.vy += 0.05;
    if (p.y > canvas.height) {
      p.y = canvas.height - 10;
      p.vy *= -0.5;
    }
    konten.beginPath();
    konten.arc(p.x, p.y, 3, 0, 2 * Math.PI);
    konten.fillStyle = "rgba(0, 100, 255, 0.5)";
    konten.fill();
  }
  if (Math.random() < 0.3) {
    data.push({
      x: Math.random() * canvas.width,
      y: 10,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 2,
    });
  }
}

function gelembung(data) {
  for (var i = 0; i < data.length; i++) {
    var p = data[i];
    p.y -= p.vy;
    p.x += Math.sin(p.life / 10) * 0.5;
    p.life--;
    if (p.life <= 0) {
      data.splice(i, 1);
      continue;
    }
    konten.beginPath();
    konten.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    konten.fillStyle = "rgba(150, 200, 255, 0.3)";
    konten.fill();
    konten.strokeStyle = "rgba(180, 220, 255, 0.6)";
    konten.stroke();
  }

  if (Math.random() < 0.2) {
    data.push({
      x: Math.random() * canvas.width,
      y: canvas.height - 10,
      vy: 1 + Math.random() * 1.5,
      size: 3 + Math.random() * 4,
      life: 80 + Math.random() * 40,
    });
  }
}

function uap(data) {
  for (var i = 0; i < data.length; i++) {
    var p = data[i];
    p.y -= p.vy;
    p.x += (Math.random() - 0.5) * 0.5;
    p.alpha -= 0.01;
    if (p.alpha <= 0) {
      data.splice(i, 1);
      continue;
    }
    konten.beginPath();
    konten.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    konten.fillStyle = "rgba(200, 200, 200," + p.alpha + ")";
    konten.fill();
  }

  if (Math.random() < 0.4) {
    data.push({
      x: Math.random() * canvas.width,
      y: canvas.height - 20,
      vy: 0.5 + Math.random(),
      size: 5 + Math.random() * 5,
      alpha: 0.8 + Math.random() * 0.2,
    });
  }
}
