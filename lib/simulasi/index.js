// /lib/simulasi/index.js
// ------------------------------------------------------
// Integrasi semua bagian dari file asli "Tidak berjudul.txt"
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

// Atau bisa juga export individual:
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
