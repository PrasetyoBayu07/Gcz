// /lib/simulasi/core/shapes.js
// ------------------------------------------------------
// Bagian bentuk kompleks dari file asli: grid, grafik kartesius, gear, roda, bar, dan bentuk turunan
// ------------------------------------------------------

function gridV(x, y, w, h, jarak, warna) {
  if (jarak == undefined) jarak = 10;
  if (warna == undefined) warna = "#e0e0e0";
  konten.beginPath();
  konten.strokeStyle = warna;
  for (var i = 0; i <= w; i += jarak) {
    konten.moveTo(x + i, y);
    konten.lineTo(x + i, y + h);
  }
  for (var j = 0; j <= h; j += jarak) {
    konten.moveTo(x, y + j);
    konten.lineTo(x + w, y + j);
  }
  konten.stroke();
}

function grafik(x, y, w, h, step, warnaGrid, warnaAxis, label) {
  if (warnaGrid == undefined) warnaGrid = "#dddddd";
  if (warnaAxis == undefined) warnaAxis = "#000000";
  if (step == undefined) step = 50;

  konten.beginPath();
  konten.strokeStyle = warnaGrid;
  for (var i = 0; i <= w; i += step) {
    konten.moveTo(x + i, y);
    konten.lineTo(x + i, y - h);
  }
  for (var j = 0; j <= h; j += step) {
    konten.moveTo(x, y - j);
    konten.lineTo(x + w, y - j);
  }
  konten.stroke();

  konten.beginPath();
  konten.lineWidth = 2;
  konten.strokeStyle = warnaAxis;
  konten.moveTo(x, y);
  konten.lineTo(x + w, y);
  konten.moveTo(x, y);
  konten.lineTo(x, y - h);
  konten.stroke();

  if (label != undefined && label == true) {
    konten.font = "10pt Calibri";
    konten.fillStyle = warnaAxis;
    konten.textAlign = "center";
    for (var i = step; i < w; i += step)
      konten.fillText(i / step, x + i, y + 15);
    for (var j = step; j < h; j += step)
      konten.fillText(j / step, x - 15, y - j + 5);
  }
}

function roda(x, y, r, warna, jari) {
  if (warna == undefined) warna = "#999999";
  if (jari == undefined) jari = 6;

  konten.beginPath();
  konten.arc(x, y, r, 0, 2 * Math.PI);
  konten.fillStyle = warna;
  konten.fill();
  konten.strokeStyle = "#444444";
  konten.lineWidth = 2;
  konten.stroke();

  konten.beginPath();
  konten.arc(x, y, r * 0.2, 0, 2 * Math.PI);
  konten.fillStyle = "#555555";
  konten.fill();

  for (var i = 0; i < jari; i++) {
    var a = (i * 2 * Math.PI) / jari;
    konten.beginPath();
    konten.moveTo(x, y);
    konten.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
    konten.strokeStyle = "#222222";
    konten.stroke();
  }
}

function gear(x, y, r, gigi, warna) {
  if (warna == undefined) warna = "#888888";
  if (gigi == undefined) gigi = 12;
  var step = (2 * Math.PI) / gigi;
  var luar = r * 1.15;
  var dalam = r * 0.85;
  konten.beginPath();
  for (var i = 0; i < gigi; i++) {
    var ang = i * step;
    var x1 = x + luar * Math.cos(ang);
    var y1 = y + luar * Math.sin(ang);
    var x2 = x + dalam * Math.cos(ang + step / 2);
    var y2 = y + dalam * Math.sin(ang + step / 2);
    if (i == 0) konten.moveTo(x1, y1);
    konten.lineTo(x1, y1);
    konten.lineTo(x2, y2);
  }
  konten.closePath();
  konten.fillStyle = warna;
  konten.fill();
  konten.strokeStyle = "#444444";
  konten.stroke();

  konten.beginPath();
  konten.arc(x, y, r * 0.2, 0, 2 * Math.PI);
  konten.fillStyle = "#555555";
  konten.fill();
}

function bar(x, y, w, h, warna, label, nilai) {
  if (warna == undefined) warna = "#4caf50";
  if (label == undefined) label = "";
  if (nilai == undefined) nilai = 0;
  konten.fillStyle = warna;
  konten.fillRect(x, y - h, w, h);
  if (label != "") {
    konten.font = "10pt Calibri";
    konten.fillStyle = "#000000";
    konten.textAlign = "center";
    konten.fillText(label + ": " + nilai, x + w / 2, y - h - 10);
  }
}
