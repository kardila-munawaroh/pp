# Portofolio Bintang Pamungkas Nusantara

Situs statis (tanpa build step) — siap di-push ke repo `bintangpamungkasnusantara.github.io`.

1. Ganti isi repo dengan semua file di folder ini (`index.html`, `css/`, `js/`, `assets/`, `favicon.png`).
2. Commit & push ke branch `main`. GitHub Pages akan memuat otomatis.

- Lanyard 3D: `js/lanyard.js` (three.js, sudah ter-bundle). Tarik & lempar kartu, ketuk untuk Henshin.
- Foto transform: `assets/me.webp` ↔ `assets/ultra.webp` (pose sudah disejajarkan).

## Pembaruan tampilan
- Tema aksen merah–hitam (kartu 3D & tali lanyard ikut berubah warna).
- UI kaca (liquid glass) ala iOS, layout dioptimalkan untuk HP (safe-area, tap target 48px, proyek bisa digeser horizontal).
- Link media sosial memakai ikon aplikasi (Instagram, TikTok, YouTube, LinkedIn, GitHub, WhatsApp, Gmail).
- Logo pendidikan & pengalaman: `assets/edu-*.webp` dan `assets/exp-*.webp` (latar transparan). Logo Website Maker belum ada — tambahkan `assets/edu-websitemaker.webp` lalu ganti elemen `.logo-tile.txt` di `index.html`.
