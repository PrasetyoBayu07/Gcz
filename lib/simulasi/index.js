// /lib/simulasi/index.js
// ------------------------------------------------------
// Integrasi semua bagian dari file asli "Tidak berjudul.txt"
// + tambahan fungsi setGame(), jalankan(), dan loop() dengan kontrol penuh
// ------------------------------------------------------

// Import seluruh bagian core
import * as Canvas from "./core/canvas.js";
import * as UI from "./core/ui.js";
import * as Shapes from "./core/shapes.js";
import * as Particles from "./core/particles.js";
import * as Lab from "./core/labObjects.js";
import * as Utils from "./core/utils.js";
import * as Preload from "./core/preload.js";

// Namespace utama
export const SimulasiDasar = {
  ...Canvas,
  ...UI,
  ...Shapes,
  ...Particles,
  ...Lab,
  ...Utils,
  ...Preload,
};

// ------------------------------------------------------
// Tambahan fungsi kompatibilitas untuk game klasik (seperti game.js)
// ------------------------------------------------------

/**
 * Mengatur ukuran canvas game, contoh: setGame("1200x600")
 * Fungsi ini akan otomatis mengatur width/height canvas aktif
 */
SimulasiDasar.setGame = function (ukuran) {
  try {
    const [w, h] = ukuran.split("x").map(Number);
    if (window.canvas) {
      window.canvas.width = w;
      window.canvas.height = h;
      console.log(`[SimulasiDasar] setGame: ${w}x${h}`);
    } else {
      console.warn("[SimulasiDasar] canvas global belum terdefinisi.");
    }
  } catch (err) {
    console.error("[SimulasiDasar] setGame gagal:", err);
  }
};

/**
 * Menjalankan fungsi callback seperti engine game klasik.
 * Misal: jalankan(gameLoop)
 */
SimulasiDasar.jalankan = function (fungsi) {
  try {
    if (typeof fungsi === "function") {
      fungsi();
      console.log(`[SimulasiDasar] jalankan: ${fungsi.name}`);
    } else {
      console.warn("[SimulasiDasar] jalankan() dipanggil tanpa fungsi valid.");
    }
  } catch (err) {
    console.error("[SimulasiDasar] jalankan gagal:", err);
  }
};

// ------------------------------------------------------
// Sistem loop penuh (jalankan game/simulasi dengan kontrol FPS)
// ------------------------------------------------------

/**
 * Loop sistem untuk menjalankan fungsi terus-menerus dengan kontrol pause/resume/stop
 * @param {Function} callback - fungsi yang dijalankan tiap frame
 * @param {number} fps - target frame per detik (default 60)
 * @returns {Object} kontrol: { pause, resume, stop, isRunning }
 */
SimulasiDasar.loop = function (callback, fps = 60) {
  if (typeof callback !== "function") {
    console.warn("[SimulasiDasar] loop() dipanggil tanpa fungsi valid.");
    return;
  }

  const frameInterval = 1000 / fps;
  let lastTime = performance.now();
  let paused = false;
  let stopped = false;
  let requestId = null;

  function frame(now) {
    if (stopped) return;

    const delta = now - lastTime;
    if (!paused && delta >= frameInterval) {
      lastTime = now - (delta % frameInterval);
      callback();
    }
    requestId = requestAnimationFrame(frame);
  }

  // mulai loop
  requestId = requestAnimationFrame(frame);
  console.log(`[SimulasiDasar] loop() dimulai (${fps} FPS)`);

  // kontrol loop
  return {
    pause() {
      if (!paused) {
        paused = true;
        console.log("[SimulasiDasar] loop dijeda (pause)");
      }
    },
    resume() {
      if (paused) {
        paused = false;
        console.log("[SimulasiDasar] loop dilanjutkan (resume)");
      }
    },
    stop() {
      stopped = true;
      if (requestId) cancelAnimationFrame(requestId);
      console.log("[SimulasiDasar] loop dihentikan (stop)");
    },
    get isRunning() {
      return !paused && !stopped;
    },
  };
};

// ------------------------------------------------------
// Export individual juga agar bisa diimport terpisah jika perlu
// ------------------------------------------------------

export {
  Canvas,
  UI,
  Shapes,
  Particles,
  Lab,
  Utils,
  Preload,
};

// ------------------------------------------------------
// Catatan:
// Semua fungsi masih mempertahankan perilaku global (canvas, konten, dsb).
// Jadi sebelum dipakai, pastikan variabel berikut sudah didefinisikan:
//   const canvas = document.getElementById("canvasId");
//   const konten = canvas.getContext("2d");
// ------------------------------------------------------// /lib/simulasi/index.js
// ------------------------------------------------------
// Integrasi semua bagian dari file asli "Tidak berjudul.txt"
// + tambahan fungsi setGame(), jalankan(), dan loop() dengan kontrol penuh
// ------------------------------------------------------

// Import seluruh bagian core
import * as Canvas from "./core/canvas.js";
import * as UI from "./core/ui.js";
import * as Shapes from "./core/shapes.js";
import * as Particles from "./core/particles.js";
import * as Lab from "./core/labObjects.js";
import * as Utils from "./core/utils.js";
import * as Preload from "./core/preload.js";

// Namespace utama
export const SimulasiDasar = {
  ...Canvas,
  ...UI,
  ...Shapes,
  ...Particles,
  ...Lab,
  ...Utils,
  ...Preload,
};

// ------------------------------------------------------
// Tambahan fungsi kompatibilitas untuk game klasik (seperti game.js)
// ------------------------------------------------------

/**
 * Mengatur ukuran canvas game, contoh: setGame("1200x600")
 * Fungsi ini akan otomatis mengatur width/height canvas aktif
 */
SimulasiDasar.setGame = function (ukuran) {
  try {
    const [w, h] = ukuran.split("x").map(Number);
    if (window.canvas) {
      window.canvas.width = w;
      window.canvas.height = h;
      console.log(`[SimulasiDasar] setGame: ${w}x${h}`);
    } else {
      console.warn("[SimulasiDasar] canvas global belum terdefinisi.");
    }
  } catch (err) {
    console.error("[SimulasiDasar] setGame gagal:", err);
  }
};

/**
 * Menjalankan fungsi callback seperti engine game klasik.
 * Misal: jalankan(gameLoop)
 */
SimulasiDasar.jalankan = function (fungsi) {
  try {
    if (typeof fungsi === "function") {
      fungsi();
      console.log(`[SimulasiDasar] jalankan: ${fungsi.name}`);
    } else {
      console.warn("[SimulasiDasar] jalankan() dipanggil tanpa fungsi valid.");
    }
  } catch (err) {
    console.error("[SimulasiDasar] jalankan gagal:", err);
  }
};

// ------------------------------------------------------
// Sistem loop penuh (jalankan game/simulasi dengan kontrol FPS)
// ------------------------------------------------------

/**
 * Loop sistem untuk menjalankan fungsi terus-menerus dengan kontrol pause/resume/stop
 * @param {Function} callback - fungsi yang dijalankan tiap frame
 * @param {number} fps - target frame per detik (default 60)
 * @returns {Object} kontrol: { pause, resume, stop, isRunning }
 */
SimulasiDasar.loop = function (callback, fps = 60) {
  if (typeof callback !== "function") {
    console.warn("[SimulasiDasar] loop() dipanggil tanpa fungsi valid.");
    return;
  }

  const frameInterval = 1000 / fps;
  let lastTime = performance.now();
  let paused = false;
  let stopped = false;
  let requestId = null;

  function frame(now) {
    if (stopped) return;

    const delta = now - lastTime;
    if (!paused && delta >= frameInterval) {
      lastTime = now - (delta % frameInterval);
      callback();
    }
    requestId = requestAnimationFrame(frame);
  }

  // mulai loop
  requestId = requestAnimationFrame(frame);
  console.log(`[SimulasiDasar] loop() dimulai (${fps} FPS)`);

  // kontrol loop
  return {
    pause() {
      if (!paused) {
        paused = true;
        console.log("[SimulasiDasar] loop dijeda (pause)");
      }
    },
    resume() {
      if (paused) {
        paused = false;
        console.log("[SimulasiDasar] loop dilanjutkan (resume)");
      }
    },
    stop() {
      stopped = true;
      if (requestId) cancelAnimationFrame(requestId);
      console.log("[SimulasiDasar] loop dihentikan (stop)");
    },
    get isRunning() {
      return !paused && !stopped;
    },
  };
};

// ------------------------------------------------------
// Export individual juga agar bisa diimport terpisah jika perlu
// ------------------------------------------------------

export {
  Canvas,
  UI,
  Shapes,
  Particles,
  Lab,
  Utils,
  Preload,
};

// ------------------------------------------------------
// Catatan:
// Semua fungsi masih mempertahankan perilaku global (canvas, konten, dsb).
// Jadi sebelum dipakai, pastikan variabel berikut sudah didefinisikan:
//   const canvas = document.getElementById("canvasId");
//   const konten = canvas.getContext("2d");
// ------------------------------------------------------
