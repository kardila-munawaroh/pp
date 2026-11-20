(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Ikon aplikasi & tautan ---------- */
  const G = (inner) => `<svg viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>`;
  const TT_NOTE = 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.64v13.67a2.9 2.9 0 0 1-2.9 2.75 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.88.14V9.05a6.5 6.5 0 1 0 5.66 6.45V8.53a8.4 8.4 0 0 0 4.91 1.58V6.69h-1.14Z';
  const ICON = {
    github: ['app-gh', G('<path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>')],
    instagram: ['app-ig', G('<rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.25" fill="#fff"/>')],
    tiktok: ['app-tt', G(`<path fill="#25f4ee" transform="translate(-.8 .7)" d="${TT_NOTE}"/><path fill="#fe2c55" transform="translate(.8 -.7)" d="${TT_NOTE}"/><path fill="#fff" d="${TT_NOTE}"/>`)],
    youtube: ['app-yt', G('<rect x="1.5" y="4.5" width="21" height="15" rx="4.4" fill="#fff"/><path d="M10 8.9l5.4 3.1-5.4 3.1z" fill="#f00"/>')],
    linkedin: ['app-li', G('<rect x="3.5" y="9" width="3.4" height="11" fill="#fff"/><circle cx="5.2" cy="5.2" r="2" fill="#fff"/><path fill="#fff" d="M10 9h3.2v1.5c.6-1 1.8-1.8 3.5-1.8 3.1 0 3.8 2 3.8 4.8V20h-3.4v-5.6c0-1.3-.1-2.5-1.7-2.5s-2 1.2-2 2.4V20H10z"/>')],
    whatsapp: ['app-wa', G('<path fill="#fff" d="M12 2.4a9.6 9.6 0 0 0-8.2 14.6L2.5 21.6l4.8-1.3A9.6 9.6 0 1 0 12 2.4z"/><path fill="#1faa52" transform="translate(6.9 6.9) scale(.43)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>')],
    mail: ['app-gm', G('<path fill="#ea4335" d="M2.6 7.3c0-1.5 1.7-2.3 2.9-1.4L12 10.8l6.5-4.9c1.2-.9 2.9-.1 2.9 1.4V19h-3.6v-8.1L12 15.2l-5.8-4.3V19H2.6z"/>')],
  };
  const appIcon = (k) => `<span class="app-ic ${ICON[k][0]}">${ICON[k][1]}</span>`;
  const LINKS = {
    whatsapp: ['WhatsApp', 'https://wa.me/6282124587092?text=Halo%20Bintang,%20saya%20tertarik%20dengan%20portofolio%20Anda'],
    mail: ['Email', 'mailto:pamungkasbepe23@gmail.com'],
    linkedin: ['LinkedIn', 'https://www.linkedin.com/in/bintang-pamungkas-nusantara-78b368415/'],
    github: ['GitHub', 'https://github.com/semangatbintang9'],
    instagram: ['Instagram', 'https://www.instagram.com/bepe.enn'],
    youtube: ['YouTube', 'https://www.youtube.com/@nusantar45'],
    tiktok: ['TikTok', 'https://tiktok.com/@b1ntangz'],
  };
  const ext = (k) => (k === 'mail' ? '' : ' target="_blank" rel="noopener noreferrer"');
  $$('[data-socials]').forEach((el) => {
    el.innerHTML = ['github', 'instagram', 'tiktok', 'youtube', 'linkedin']
      .map((k) => `<a href="${LINKS[k][1]}"${ext(k)} aria-label="${LINKS[k][0]}" title="${LINKS[k][0]}">${appIcon(k)}</a>`).join('');
  });
  const contactText = { whatsapp: '+62 821-2458-7092', mail: 'pamungkasbepe23@gmail.com', linkedin: 'LinkedIn', github: 'GitHub', instagram: '@bepe.enn', youtube: '@nusantar45', tiktok: '@b1ntangz' };
  $$('[data-contacts]').forEach((el) => {
    el.innerHTML = Object.keys(LINKS).map((k) => `<a href="${LINKS[k][1]}"${ext(k)}>${appIcon(k)}<span>${contactText[k]}</span></a>`).join('');
  });
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Typewriter ---------- */
  const roles = ['Digital Creative Specialist', 'Web Developer', 'Informatics Student', 'Creative Content Maker'];
  const typed = $('#typed');
  let ri = 0, ci = 0, del = false;
  (function type() {
    const word = roles[ri];
    if (!del) { typed.textContent = word.slice(0, ++ci); if (ci === word.length) { del = true; return setTimeout(type, 1900); } }
    else { typed.textContent = word.slice(0, --ci); if (ci === 0) { del = false; ri = (ri + 1) % roles.length; } }
    setTimeout(type, del ? 38 : 85);
  })();

  /* ---------- SFX (WebAudio, default mati) ---------- */
  const sfx = {
    on: false, ctx: null,
    ensure() {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    },
    tone(c, type, f0, f1, t, dur, vol) {
      const o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f0, t);
      if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.12, dur / 3)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.05);
    },
    henshin() {
      if (!this.on) return;
      const c = this.ensure(), t = c.currentTime;
      this.tone(c, 'sawtooth', 160, 1600, t, 0.95, 0.1);
      this.tone(c, 'sine', 80, 400, t, 0.9, 0.18);
      [880, 1318, 1760].forEach((f, i) => this.tone(c, 'triangle', f, f, t + 0.68 + i * 0.045, 0.7, 0.09));
    },
    revert() {
      if (!this.on) return;
      const c = this.ensure(), t = c.currentTime;
      this.tone(c, 'triangle', 1400, 220, t, 0.55, 0.1);
    },
  };
  const sfxBtn = $('#sfx-toggle');
  sfxBtn.addEventListener('click', () => {
    sfx.on = !sfx.on;
    sfxBtn.setAttribute('aria-pressed', String(sfx.on));
    sfxBtn.title = sfx.on ? 'Matikan suara SFX' : 'Nyalakan suara SFX';
    sfxBtn.setAttribute('aria-label', sfxBtn.title);
    if (sfx.on) sfx.tone(sfx.ensure(), 'sine', 660, 990, sfx.ctx.currentTime, 0.18, 0.08);
  });

  /* ---------- Henshin (state bersama: kartu, foto, tombol) ---------- */
  const portrait = $('#portrait');
  const portraitInner = $('.portrait', portrait);
  const ring = $('#portrait-ring');
  const flash = $('#stage-flash');
  const henshinBtn = $('#henshin-btn');
  const henshinLabel = $('#henshin-label');
  const hint = $('#lanyard-hint');
  let lanyard = null;
  let ultra = false;

  function setUltra(on) {
    ultra = on;
    document.documentElement.classList.toggle('ultra', on);
    henshinBtn.setAttribute('aria-pressed', String(on));
    henshinLabel.textContent = on ? 'Kembali jadi manusia' : 'Henshin!';
    portrait.classList.toggle('locked', on);
    if (on) portrait.classList.remove('peek');
    portrait.setAttribute('aria-pressed', String(on));
    if (lanyard) lanyard.setUltra(on);
    flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
    ring.classList.remove('burst'); void ring.offsetWidth; ring.classList.add('burst');
    on ? sfx.henshin() : sfx.revert();
    hint.classList.add('gone');
  }
  henshinBtn.addEventListener('click', () => setUltra(!ultra));

  // foto di bagian Tentang: kursor = senter Ultraman, klik/ketuk = berubah penuh
  portrait.setAttribute('role', 'button'); portrait.setAttribute('tabindex', '0'); portrait.setAttribute('aria-pressed', 'false');
  portrait.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const r = portraitInner.getBoundingClientRect();
    portrait.style.setProperty('--x', `${e.clientX - r.left}px`);
    portrait.style.setProperty('--y', `${e.clientY - r.top}px`);
    if (!ultra) portrait.classList.add('peek');
  });
  portrait.addEventListener('pointerleave', () => portrait.classList.remove('peek'));
  portrait.addEventListener('click', () => setUltra(!ultra));
  portrait.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setUltra(!ultra); } });

  /* ---------- Lanyard 3D ---------- */
  const stage = $('#lanyard-stage');
  const fallback = $('#lanyard-fallback');
  function showFallback() { fallback.hidden = false; hint.hidden = true; $('#flip-btn').hidden = true; }
  async function startLanyard() {
    try {
      const probe = document.createElement('canvas');
      if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) throw new Error('WebGL tidak tersedia');
      lanyard = await window.LanyardApp.initLanyard(stage);
      if (ultra) lanyard.setUltra(true);
    } catch (err) {
      console.warn('[lanyard] fallback:', err);
      showFallback();
    }
  }
  stage.addEventListener('lanyard:tap', () => setUltra(!ultra));
  $('#flip-btn').addEventListener('click', () => lanyard && lanyard.flip());
  setTimeout(() => hint.classList.add('gone'), 14000);

  /* ---------- Navbar ---------- */
  const burger = $('#nav-burger'), mobileNav = $('#nav-mobile');
  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('a', mobileNav).forEach((a) => a.addEventListener('click', () => { mobileNav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
  const closeMenu = () => { mobileNav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
  document.addEventListener('pointerdown', (e) => { if (mobileNav.classList.contains('open') && !e.target.closest('.nav-root')) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('scroll', () => { if (mobileNav.classList.contains('open')) closeMenu(); }, { passive: true });
  const navLinks = $$('.nav-links a, .nav-mobile a[data-sec]');
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.dataset.sec === en.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  $$('main section[id]').forEach((s) => secObs.observe(s));

  /* ---------- Reveal saat scroll ---------- */
  function startReveal() {
    $$('.reveal').forEach((el) => {
      const sibs = Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal'));
      el.style.transitionDelay = `${(sibs.indexOf(el) % 6) * 70}ms`;
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  }

  /* ---------- Loader ---------- */
  const loader = $('#loader'), bar = $('.loader-bar i');
  const preload = (src) => new Promise((res) => { const im = new Image(); im.onload = im.onerror = res; im.src = src; });
  const tasks = [
    preload('assets/me.webp'),
    preload('assets/ultra.webp'),
    (document.fonts && document.fonts.ready) || Promise.resolve(),
    startLanyard(),
  ];
  let done = 0;
  tasks.forEach((t) => Promise.resolve(t).then(() => { done++; bar.style.width = `${(done / tasks.length) * 100}%`; }));
  Promise.race([Promise.all(tasks), new Promise((r) => setTimeout(r, 5000))]).then(() => {
    bar.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('hide');
      document.body.classList.add('ready');
      startReveal();
      if (lanyard) lanyard.kick(1);
    }, 250);
  });
})();
