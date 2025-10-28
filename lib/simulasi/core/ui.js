// /lib/simulasi/core/ui.js
// ------------------------------------------------------
// Bagian interaktif dari file asli: tombol, slider, input teks, drag objek
// ------------------------------------------------------

function tombol(nama, x, y, w, h, teksnya, fungsi) {
  konten.beginPath();
  konten.rect(x, y, w, h);
  konten.fillStyle = "#f2f2f2";
  konten.fill();
  konten.lineWidth = 1;
  konten.strokeStyle = "#000000";
  konten.stroke();

  konten.font = "bold 10pt Calibri";
  konten.fillStyle = "#000000";
  konten.textAlign = "center";
  konten.textBaseline = "middle";
  konten.fillText(teksnya, x + w / 2, y + h / 2);

  var obj = {};
  obj.nama = nama;
  obj.x = x;
  obj.y = y;
  obj.w = w;
  obj.h = h;
  obj.fungsi = fungsi;
  tombolDB.push(obj);
}

function cekTombol(x, y) {
  for (var i = 0; i < tombolDB.length; i++) {
    var t = tombolDB[i];
    if (x > t.x && x < t.x + t.w && y > t.y && y < t.y + t.h) {
      t.fungsi();
    }
  }
}

function slider(nama, x, y, w, min, max, nilai, fungsi) {
  konten.beginPath();
  konten.rect(x, y - 2, w, 4);
  konten.fillStyle = "#dddddd";
  konten.fill();

  var posisi = ((nilai - min) / (max - min)) * w;

  konten.beginPath();
  konten.arc(x + posisi, y, 8, 0, 2 * Math.PI);
  konten.fillStyle = "#666666";
  konten.fill();

  var sld = {};
  sld.nama = nama;
  sld.x = x;
  sld.y = y;
  sld.w = w;
  sld.min = min;
  sld.max = max;
  sld.nilai = nilai;
  sld.fungsi = fungsi;
  sliderDB.push(sld);
}

function cekSlider(x, y) {
  for (var i = 0; i < sliderDB.length; i++) {
    var s = sliderDB[i];
    if (x >= s.x && x <= s.x + s.w && y >= s.y - 10 && y <= s.y + 10) {
      var prop = (x - s.x) / s.w;
      s.nilai = s.min + prop * (s.max - s.min);
      s.fungsi(s.nilai);
    }
  }
}

function teksInput(nama, x, y, w, h, nilaiAwal) {
  var obj = {};
  obj.nama = nama;
  obj.x = x;
  obj.y = y;
  obj.w = w;
  obj.h = h;
  obj.teks = nilaiAwal;
  obj.focus = false;
  inputDB.push(obj);

  konten.beginPath();
  konten.rect(x, y, w, h);
  konten.fillStyle = "#ffffff";
  konten.fill();
  konten.strokeStyle = "#000000";
  konten.stroke();

  konten.font = "10pt Calibri";
  konten.fillStyle = "#000000";
  konten.textAlign = "left";
  konten.textBaseline = "middle";
  konten.fillText(nilaiAwal, x + 5, y + h / 2);
}

function cekTeksInput(x, y) {
  for (var i = 0; i < inputDB.length; i++) {
    var t = inputDB[i];
    if (x > t.x && x < t.x + t.w && y > t.y && y < t.y + t.h) {
      t.focus = true;
      inputAktif = t.nama;
    } else {
      t.focus = false;
    }
  }
}

function updateTeksInput(teksBaru) {
  for (var i = 0; i < inputDB.length; i++) {
    var t = inputDB[i];
    if (t.nama == inputAktif) {
      t.teks += teksBaru;
      teksInput(t.nama, t.x, t.y, t.w, t.h, t.teks);
    }
  }
}

function hapusKarakterInput() {
  for (var i = 0; i < inputDB.length; i++) {
    var t = inputDB[i];
    if (t.nama == inputAktif && t.teks.length > 0) {
      t.teks = t.teks.substring(0, t.teks.length - 1);
      teksInput(t.nama, t.x, t.y, t.w, t.h, t.teks);
    }
  }
}

function setDrag(nama, x, y, w, h, fungsi) {
  var d = {};
  d.nama = nama;
  d.x = x;
  d.y = y;
  d.w = w;
  d.h = h;
  d.drag = false;
  d.fungsi = fungsi;
  dragDB.push(d);
}

function cekDrag(x, y) {
  for (var i = 0; i < dragDB.length; i++) {
    var d = dragDB[i];
    if (x > d.x && x < d.x + d.w && y > d.y && y < d.y + d.h) {
      d.drag = true;
      d.offsetX = x - d.x;
      d.offsetY = y - d.y;
      dragAktif = d.nama;
    }
  }
}

function gerakDrag(x, y) {
  for (var i = 0; i < dragDB.length; i++) {
    var d = dragDB[i];
    if (d.drag) {
      d.x = x - d.offsetX;
      d.y = y - d.offsetY;
      d.fungsi(d.x, d.y);
    }
  }
}

function lepasDrag() {
  for (var i = 0; i < dragDB.length; i++) {
    dragDB[i].drag = false;
  }
}
