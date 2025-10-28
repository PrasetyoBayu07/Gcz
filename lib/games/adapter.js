// lib/games/game-adapter.js
// ------------------------------------------------------
// Adaptor untuk menghubungkan game.js ke engine SimulasiDasar
// Tanpa ubah satu baris pun dari file game.js asli kamu
// ------------------------------------------------------

import { SimulasiDasar } from "@/lib/simulasi";
import { startGame } from "./game.js";

// ------------------------------------------------------
// 1️⃣ Mapping fungsi global ke engine SimulasiDasar
// ------------------------------------------------------

// fungsi dasar kanvas
window.hapusLayar = SimulasiDasar.hapusLayar;
window.gambarFull = SimulasiDasar.gambarFull;
window.tampilkanGambar = SimulasiDasar.gambar;
window.resizeBtn = SimulasiDasar.resizeBtn;

// UI dan interaksi
window.tombol = SimulasiDasar.tombol;
window.tekan = SimulasiDasar.tekan;

// preload gambar & suara
window.loading = SimulasiDasar.siapkanGambar;

// fungsi utilitas (kalau dibutuhkan)
window.acak = SimulasiDasar.acak;
window.jarak = SimulasiDasar.jarak;

// ------------------------------------------------------
// 2️⃣ Stub / placeholder untuk fungsi yang belum ada di engine
// ------------------------------------------------------

// kamu bisa isi nanti kalau sudah ada versi Simulasi-nya
window.setGame = function (ukuran) {
  console.log("[Adaptor] setGame:", ukuran);
};
window.jalankan = function (fungsi) {
  console.log("[Adaptor] jalankan fungsi:", fungsi.name);
  if (typeof fungsi === "function") fungsi();
};
window.game = {};
window.dataGambar = {}; // tempat menyimpan hasil loading

// ------------------------------------------------------
// 3️⃣ Jalankan game kamu
// ------------------------------------------------------

export function runGame() {
  console.log("[Adaptor] Menjalankan game.js dengan SimulasiDasar...");
  startGame();
}
