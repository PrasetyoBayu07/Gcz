// /lib/games/game-adapter.js
// ------------------------------------------------------
// Adaptor penghubung game.js ke engine SimulasiDasar
// Sekarang 100% terhubung (tanpa placeholder)
// ------------------------------------------------------

import { SimulasiDasar } from "@/lib/simulasi";
import { startGame } from "./game.js";

// ------------------------------------------------------
// 1️⃣ Mapping fungsi global langsung ke engine SimulasiDasar
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

// fungsi utilitas
window.acak = SimulasiDasar.acak;
window.jarak = SimulasiDasar.jarak;

// fungsi engine inti
window.setGame = SimulasiDasar.setGame;
window.jalankan = SimulasiDasar.jalankan;
window.loop = SimulasiDasar.loop;

// variabel global umum yang dipakai game
window.game = {};
window.dataGambar = {};

// ------------------------------------------------------
// 2️⃣ Jalankan game
// ------------------------------------------------------

export function runGame() {
  console.log("[Adaptor] Menjalankan game.js dengan engine SimulasiDasar...");
  startGame();
}
