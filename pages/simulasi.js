import { useEffect } from "react";
import { SimulasiDasar } from "@/lib/simulasi";

export default function SimulasiPage() {
  useEffect(() => {
    const canvas = document.getElementById("scene");
    const konten = canvas.getContext("2d");

    // Buat variabel global sesuai file asli
    window.canvas = canvas;
    window.konten = konten;

    // Contoh: load preview image dari aset archtemp
    const base = "/assets/archtemp/09f13c3460d45ed43862ef43c7ddedb1/";
    const img = new Image();
    img.src = base + "preview.png";

    img.onload = () => {
      SimulasiDasar.hapusLayar("#fefefe");
      SimulasiDasar.teks("Preview Aset", 160, 40);
      SimulasiDasar.gambar(img, 60, 60, 200, 200);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <canvas id="scene" width="400" height="400" className="border" />
      <p className="mt-4 text-sm text-gray-600">Demo gabungan lib + assets</p>
    </main>
  );
}
