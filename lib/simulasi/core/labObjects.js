// /lib/simulasi/core/labObjects.js
// ------------------------------------------------------
// Bagian objek eksperimen dari file asli: termometer, pegas, tabung reaksi, burner, dsb
// ------------------------------------------------------

function termometer(x, y, tinggi, suhu) {
  var warna = "#ff3333";
  if (suhu < 0) warna = "#3333ff";
  else if (suhu < 30) warna = "#66ccff";
  else if (suhu < 60) warna = "#ff9933";

  // tabung
  konten.beginPath();
  konten.rect(x, y - tinggi, 20, tinggi);
  konten.fillStyle = "#dddddd";
  konten.fill();
  konten.strokeStyle = "#000000";
  konten.stroke();

  // cairan
  var isi = (suhu / 100) * tinggi;
  konten.beginPath();
  konten.rect(x, y - isi, 20, isi);
  konten.fillStyle = warna;
  konten.fill();
  konten.stroke();

  // bola bawah
  konten.beginPath();
  konten.arc(x + 10, y, 15, 0, 2 * Math.PI);
  konten.fillStyle = warna;
  konten.fill();
  konten.stroke();
}

function pegas(x, y, panjang, lilitan, warna) {
  if (warna == undefined) warna = "#000000";
  var dx = panjang / (lilitan * 2);
  konten.beginPath();
  konten.moveTo(x, y);
  for (var i = 0; i < lilitan * 2; i++) {
    var py = y + Math.pow(-1, i) * 10;
    konten.lineTo(x + dx * i, py);
  }
  konten.lineTo(x + panjang, y);
  konten.strokeStyle = warna;
  konten.lineWidth = 2;
  konten.stroke();
}

function tabung(x, y, tinggi, warnaIsi, isiPersen) {
  if (warnaIsi == undefined) warnaIsi = "#00bfff";
  if (isiPersen == undefined) isiPersen = 0.5;

  var isiTinggi = tinggi * isiPersen;

  // badan tabung
  konten.beginPath();
  konten.rect(x, y - tinggi, 40, tinggi);
  konten.fillStyle = "#f0f0f0";
  konten.fill();
  konten.strokeStyle = "#000000";
  konten.stroke();

  // isi cairan
  konten.beginPath();
  konten.rect(x, y - isiTinggi, 40, isiTinggi);
  konten.fillStyle = warnaIsi;
  konten.fill();
  konten.stroke();

  // pantulan atas
  konten.beginPath();
  konten.ellipse(x + 20, y - isiTinggi, 20, 6, 0, 0, 2 * Math.PI);
  konten.fillStyle = "rgba(255,255,255,0.3)";
  konten.fill();
}

function burner(x, y, aktif) {
  // badan
  konten.beginPath();
  konten.rect(x, y - 50, 20, 50);
  konten.fillStyle = "#777777";
  konten.fill();
  konten.strokeStyle = "#000000";
  konten.stroke();

  // api
  if (aktif) {
    var grad = konten.createRadialGradient(x + 10, y - 60, 0, x + 10, y - 60, 20);
    grad.addColorStop(0, "rgba(255,255,0,1)");
    grad.addColorStop(0.5, "rgba(255,140,0,0.8)");
    grad.addColorStop(1, "rgba(255,0,0,0)");
    konten.beginPath();
    konten.arc(x + 10, y - 60, 20, 0, 2 * Math.PI);
    konten.fillStyle = grad;
    konten.fill();
  }
}

function penyangga(x, y, tinggi) {
  konten.beginPath();
  konten.rect(x, y - tinggi, 8, tinggi);
  konten.fillStyle = "#555555";
  konten.fill();
  konten.strokeStyle = "#000000";
  konten.stroke();

  konten.beginPath();
  konten.rect(x - 20, y, 48, 8);
  konten.fillStyle = "#444444";
  konten.fill();
  konten.stroke();
}

function penyanggaL(x, y, panjang) {
  konten.beginPath();
  konten.rect(x, y, panjang, 8);
  konten.fillStyle = "#666666";
  konten.fill();
  konten.strokeStyle = "#000000";
  konten.stroke();
}

function statif(x, y, tinggi, panjang) {
  penyangga(x, y, tinggi);
  penyanggaL(x - panjang / 2, y - tinggi / 2, panjang);
}
