// /lib/simulasi/core/canvas.js
// ------------------------------------------------------
// Bagian inti dari file asli "Tidak berjudul.txt"
// Fungsinya: pengelolaan canvas, pewarnaan, teks, garis, kotak, lingkaran, panah, gambar
// ------------------------------------------------------

function hapusLayar(warna) {
  if (warna == undefined) warna = "#ffffff";
  konten.fillStyle = warna;
  konten.fillRect(0, 0, canvas.width, canvas.height);
}

function teks(teksnya, px, py, fnt, clr, al) {
  if (fnt == undefined) fnt = "bold 12pt Calibri";
  if (clr == undefined) clr = "#2f2f2f";
  if (al == undefined) al = "center";
  konten.font = fnt;
  konten.fillStyle = clr;
  konten.textAlign = al;
  konten.fillText(teksnya, px, py);
}

function garis(x1, y1, x2, y2, tebal, warna, tipe) {
  if (tebal == undefined) tebal = 1;
  if (warna == undefined) warna = "#000000";
  konten.beginPath();
  if (tipe == "dash") konten.setLineDash([5]);
  konten.moveTo(x1, y1);
  konten.lineTo(x2, y2);
  konten.lineWidth = tebal;
  konten.strokeStyle = warna;
  konten.stroke();
  konten.setLineDash([]);
}

function kotak(x, y, w, h, tebal, warna, isi) {
  if (tebal == undefined) tebal = 1;
  if (warna == undefined) warna = "#000000";
  if (isi == undefined) isi = "none";
  konten.beginPath();
  konten.rect(x, y, w, h);
  if (isi != "none") {
    konten.fillStyle = isi;
    konten.fill();
  }
  konten.lineWidth = tebal;
  konten.strokeStyle = warna;
  konten.stroke();
}

function lingkaran(x, y, r, tebal, warna, isi) {
  if (tebal == undefined) tebal = 1;
  if (warna == undefined) warna = "#000000";
  if (isi == undefined) isi = "none";
  konten.beginPath();
  konten.arc(x, y, r, 0, 2 * Math.PI);
  if (isi != "none") {
    konten.fillStyle = isi;
    konten.fill();
  }
  konten.lineWidth = tebal;
  konten.strokeStyle = warna;
  konten.stroke();
}

function gambar(objek, x, y, w, h, rotasi) {
  if (rotasi == undefined) {
    konten.drawImage(objek, x, y, w, h);
  } else {
    konten.save();
    konten.translate(x + w / 2, y + h / 2);
    konten.rotate((rotasi * Math.PI) / 180);
    konten.drawImage(objek, -w / 2, -h / 2, w, h);
    konten.restore();
  }
}

function panah(x1, y1, x2, y2, warna, tebal) {
  if (warna == undefined) warna = "#000000";
  if (tebal == undefined) tebal = 2;
  var headlen = 10;
  var angle = Math.atan2(y2 - y1, x2 - x1);
  konten.beginPath();
  konten.moveTo(x1, y1);
  konten.lineTo(x2, y2);
  konten.strokeStyle = warna;
  konten.lineWidth = tebal;
  konten.stroke();
  konten.beginPath();
  konten.moveTo(x2, y2);
  konten.lineTo(
    x2 - headlen * Math.cos(angle - Math.PI / 6),
    y2 - headlen * Math.sin(angle - Math.PI / 6)
  );
  konten.lineTo(
    x2 - headlen * Math.cos(angle + Math.PI / 6),
    y2 - headlen * Math.sin(angle + Math.PI / 6)
  );
  konten.lineTo(x2, y2);
  konten.fillStyle = warna;
  konten.fill();
}
