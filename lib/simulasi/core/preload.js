// /lib/simulasi/core/preload.js
// ------------------------------------------------------
// Bagian loading gambar dari file asli: preloader & progress bar
// ------------------------------------------------------

function siapkanGambar(arrGambar, fungsiSetelahSelesai) {
  var total = arrGambar.length;
  var selesai = 0;
  var hasil = [];

  for (var i = 0; i < total; i++) {
    hasil[i] = new Image();
    hasil[i].onload = function () {
      selesai++;
      var persen = Math.floor((selesai / total) * 100);
      tampilkanProgress(persen);
      if (selesai == total) {
        hapusLayar("#ffffff");
        fungsiSetelahSelesai(hasil);
      }
    };
    hasil[i].src = arrGambar[i];
  }
}

function tampilkanProgress(persen) {
  hapusLayar("#ffffff");
  var lebar = 300;
  var tinggi = 20;
  var x = canvas.width / 2 - lebar / 2;
  var y = canvas.height / 2 - tinggi / 2;
  kotak(x, y, lebar, tinggi, 2, "#000000", "none");
  kotak(x, y, (persen / 100) * lebar, tinggi, 0, "none", "#33cc33");

  konten.font = "12pt Calibri";
  konten.fillStyle = "#000000";
  konten.textAlign = "center";
  konten.fillText(persen + "%", canvas.width / 2, canvas.height / 2 - 10);
}
