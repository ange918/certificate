// Mondukpè Montcho — réservation de rendez-vous
const OFFERS = [
  { min: 15,  price: 20,  title: 'Échange express',    sub: 'Question ciblée',        tags: ['Visio', 'Avis rapide', 'Orientation'], c: ['#3b5a7a', '#1c2b3c'] },
  { min: 30,  price: 35,  title: 'Échange découverte', sub: 'Premier tour du projet', tags: ['Visio', 'Diagnostic', 'Pistes'],       c: ['#7a4b3b', '#2c1a14'] },
  { min: 45,  price: 50,  title: 'Échange approfondi', sub: 'Analyse détaillée',      tags: ['Visio', 'Stratégie', 'Conseils'],      c: ['#3f6b4f', '#16281d'] },
  { min: 60,  price: 65,  title: 'Séance complète',    sub: 'Une heure dédiée',       tags: ['Tous modes', 'Plan d’action', 'Suivi'], c: ['#5a4a7a', '#201a2e'] },
  { min: 90,  price: 90,  title: 'Atelier de projet',  sub: 'Travail en profondeur',  tags: ['Tous modes', 'Atelier', 'Livrable'],   c: ['#7a6a3b', '#2c2514'] },
  { min: 120, price: 120, title: 'Session intensive',  sub: 'Deux heures, un cap',    tags: ['Tous modes', 'Feuille de route', 'Suivi'], c: ['#3b7a76', '#142b29'] }
];
const HOURS = { start: 9, end: 18 };           // créneaux 9h–18h, du lundi au vendredi
const STEP = 15;                                // pas de réservation (minutes)
const STORE = 'montcho_bookings';

const $ = (s) => document.querySelector(s);
const fmtDur = (m) => (m < 60 ? `${m} min` : m % 60 ? `${Math.floor(m / 60)} h ${m % 60}` : `${m / 60} h`);
const fmtPrice = (p) => `${p} €`;
const pad = (n) => String(n).padStart(2, '0');
const toLabel = (min) => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`;

const load = () => { try { return JSON.parse(localStorage.getItem(STORE)) || []; } catch { return []; } };
const save = (list) => { try { localStorage.setItem(STORE, JSON.stringify(list)); } catch {} };

let mode = 'Visio';
let pending = null;

// --- Offers grid + duration select
const durSel = $('#duration');
OFFERS.forEach((o) => durSel.add(new Option(`${fmtDur(o.min)} — ${fmtPrice(o.price)}`, o.min)));
$('#offers').innerHTML = OFFERS.map((o) => `
  <button class="offer" data-min="${o.min}">
    <div class="pic" style="background:linear-gradient(135deg,${o.c[0]},${o.c[1]})"><span>${o.min < 60 ? o.min : o.min / 60}</span><em>${o.min < 60 ? 'min' : 'h'}</em></div>
    <div class="meta"><div><b>${o.title}</b><small>${o.sub}</small></div><span class="p">${fmtPrice(o.price)}</span></div>
    <ul>${o.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
  </button>`).join('');

document.querySelectorAll('.offer').forEach((el) => el.addEventListener('click', () => {
  durSel.value = el.dataset.min;
  update();
  $('#reserver').scrollIntoView({ behavior: 'smooth', block: 'center' });
}));

// --- Date / time
const dateInp = $('#date');
const timeSel = $('#time');
const today = new Date();
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
dateInp.min = iso(today);

const current = () => OFFERS.find((o) => o.min === +durSel.value);

function update() {
  $('#price').textContent = fmtPrice(current().price);
  const val = dateInp.value;
  timeSel.innerHTML = '';
  if (!val) { timeSel.add(new Option('Choisir une date', '')); return; }
  const d = new Date(val + 'T00:00');
  if ([0, 6].includes(d.getDay())) { timeSel.add(new Option('Week-end indisponible', '')); return; }

  const dur = current().min;
  const taken = load().filter((b) => b.date === val);
  const now = iso(today) === val ? today.getHours() * 60 + today.getMinutes() + 30 : 0;
  const slots = [];
  for (let t = HOURS.start * 60; t + dur <= HOURS.end * 60; t += STEP) {
    const free = t >= now && taken.every((b) => t + dur <= b.start || t >= b.start + b.min);
    if (free) slots.push(t);
  }
  if (!slots.length) { timeSel.add(new Option('Aucun créneau libre', '')); return; }
  timeSel.add(new Option('Choisir une heure', ''));
  slots.forEach((t) => timeSel.add(new Option(`${toLabel(t)} – ${toLabel(t + dur)}`, t)));
}
durSel.addEventListener('change', update);
dateInp.addEventListener('change', update);
update();

document.querySelectorAll('.chip').forEach((c) => c.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach((x) => x.classList.remove('on'));
  c.classList.add('on');
  mode = c.dataset.mode;
}));

// --- Booking flow
const modal = $('#modal');
const longDate = (v) => new Date(v + 'T00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

$('#bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!dateInp.value || !timeSel.value) { (dateInp.value ? timeSel : dateInp).focus(); return; }
  const o = current();
  pending = { date: dateInp.value, start: +timeSel.value, min: o.min, price: o.price, mode };
  $('#recap').innerHTML = `${fmtDur(o.min)} · <b>${fmtPrice(o.price)}</b><br>${longDate(pending.date)} à ${toLabel(pending.start)}<br>${mode}`;
  $('#step1').hidden = false; $('#step2').hidden = true;
  modal.hidden = false;
  $('#name').focus();
});

$('#detailsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const list = load();
  if (list.some((b) => b.date === pending.date && pending.start < b.start + b.min && b.start < pending.start + pending.min)) {
    alert('Ce créneau vient d’être réservé. Merci d’en choisir un autre.');
    modal.hidden = true; update(); return;
  }
  list.push({ ...pending, name: $('#name').value.trim(), email: $('#email').value.trim(), msg: $('#msg').value.trim(), at: Date.now() });
  save(list);
  $('#done').innerHTML = `Merci ${$('#name').value.trim().split(' ')[0]} !<br>${longDate(pending.date)} à ${toLabel(pending.start)}<br>${fmtDur(pending.min)} · ${fmtPrice(pending.price)} · ${pending.mode}`;
  $('#step1').hidden = true; $('#step2').hidden = false;
  e.target.reset(); update();
});

const closeModal = () => { modal.hidden = true; };
$('#close').addEventListener('click', closeModal);
$('#ok').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// --- Stat bars
document.querySelectorAll('.bars').forEach((el) => {
  let s = +el.dataset.seed * 97;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const rising = el.dataset.seed === '2';
  el.innerHTML = Array.from({ length: 10 }, (_, i) => `<i style="height:${rising ? 25 + i * 7 + rnd() * 8 : 30 + rnd() * 70}%"></i>`).join('');
});

// --- Testimonials slider
const PEOPLE = [
  { n: 'Master Class « Maîtrise ton argent »', r: '13 juin 2026 · CCIB Ganhi', t: 'Animation du panel 1 : « Construis ta planification et tes finances personnelles ».', img: 'images/conference.jpg' },
  { n: 'Meet-up et rencontre presse', r: '15 août 2026 · Golden Tulip Le Diplomate, Cotonou', t: 'Modération du panel 2 : « Création, identité et performance dans le domaine du cosplay au Bénin ».', img: 'images/hero.jpg' },
  { n: 'Label musical OCULUS', r: 'Oculus Music Group', t: 'Secrétaire exécutive et porte-parole : conception, coordination et valorisation de projets médiatiques et artistiques.', img: 'images/oculus.jpg' },
  { n: 'Voix des femmes', r: 'Médias, réseaux et débat public', t: 'Une approche critique et accessible de l\u2019information, attentive à la voix des femmes et aux réalités sociales africaines.', img: 'images/yodun.jpg' }
];
let offset = 0;
const slider = $('#slider');
function renderPeople() {
  slider.classList.remove('swap'); void slider.offsetWidth; if (renderPeople.ran) slider.classList.add('swap');
  renderPeople.ran = true;
  slider.innerHTML = [0, 1, 2].map((i) => PEOPLE[(offset + i) % PEOPLE.length]).map((p) => `
    <article class="person"><div class="face" style="background-image:url('${p.img}')"></div><h5>${p.n}</h5><small>${p.r}</small><p>${p.t}</p></article>`).join('');
}
$('#prev').addEventListener('click', () => { offset = (offset + PEOPLE.length - 1) % PEOPLE.length; renderPeople(); });
$('#next').addEventListener('click', () => { offset = (offset + 1) % PEOPLE.length; renderPeople(); });
renderPeople();

// ===== Animations =====
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  // Smooth inertial scroll (Lenis)
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.075, wheelMultiplier: 0.9, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const el = id.length > 1 && document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -40, duration: 1.6 }); }
    }));
  }

  // Split the giant hero name into letters (per line)
  const giant = document.querySelector('.hero-giant');
  let n = 0;
  giant.querySelectorAll('.ln').forEach((ln) => {
    ln.innerHTML = [...ln.textContent].map((c) => `<span class="l" style="--i:${n++}">${c}</span>`).join('');
  });
  document.querySelectorAll('.pill-nav li').forEach((li, i) => li.style.setProperty('--i', i));
  document.querySelectorAll('.bars').forEach((b) => b.querySelectorAll('i').forEach((el, i) => el.style.setProperty('--i', i)));

  // Hero entrance once fonts are ready
  const start = () => requestAnimationFrame(() => requestAnimationFrame(() => document.querySelector('.hero').classList.add('loaded')));
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(start);

  // Scroll reveals, staggered inside each group
  const groups = [
    ['.head h2', '.head .small'],
    ['.search-card'],
    ['#offers .offer'],
    ['.about-photo', '.about-body > *'],
    ['.stats .stat'],
    ['.why .why-card'],
    ['.row-head'],
    ['#slider .person'],
    ['.cta-card > *'],
    ['.cols > div']
  ];
  const items = [];
  groups.forEach((sel) => sel.forEach((s) => document.querySelectorAll(s).forEach((el) => items.push(el))));
  const seenParents = new Map();
  items.forEach((el) => {
    el.classList.add('rv');
    const key = el.parentElement;
    const n = seenParents.get(key) || 0;
    seenParents.set(key, n + 1);
    el.style.setProperty('--d', `${Math.min(n, 5) * 0.12}s`);
  });
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    io.unobserve(en.target);
    setTimeout(() => en.target.classList.add('done'), 2000);
  }), { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
  const wm = document.querySelector('.watermark');
  io.observe(wm);

  // Parallax on the hero (driven by scroll position)
  const set = (y) => document.querySelector('.hero-stage').style.setProperty('--p', Math.min(y, 900));
  if (lenis) lenis.on('scroll', ({ scroll }) => set(scroll));
  else addEventListener('scroll', () => set(scrollY), { passive: true });
})();
