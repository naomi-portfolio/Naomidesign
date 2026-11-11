const $ = s => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// 「全部作品」是不在首頁選單裡的一條路，內容等案例資料載入後填入
const ORDER = ['UI / UX', '品牌設計', '餐飲品牌全案設計', '平面設計', '活動設計', '活動攝影', '人像攝影', '商品攝影', '微電影', '攝影剪輯'];
const ALL = { id: 'all', all: true, label: '聊聊合作', kicker: '全部作品', bg: 'galaxy-hero.jpg', title: '所有作品都在這裡',
  lead: '可以用分類篩選，點任何一件就能看完整內容', say: '全部都在這，可以用上面的分類篩選',
  picks: [], items: ['品牌與平面', 'UI / UX', '攝影', '影片', '插畫', '音樂'] };
const byId = id => id === 'all' ? ALL : INTENTS.find(i => i.id === id);

// 目前在哪一頁、看哪個需求、第幾件作品、委託問到第幾題
let S = { layer: 0, intent: null, work: 0, step: 0 };
let brief = { items: new Set(), timing: null, note: '' }, builtFor = null;

/* ---- 背景 ---- */
const bgEl = $('#bg'), bgImgs = bgEl.querySelectorAll('img'); let bgI = 0, bgSrc = '';
function setBg(file) {
  const src = IMG + file; if (src === bgSrc) return; bgSrc = src;
  const next = bgImgs[bgI ^= 1], prev = bgImgs[bgI ^ 1];
  next.onload = () => { next.classList.add('on'); prev.classList.remove('on'); };
  next.src = src;
}
for (let i = 0; i < 16; i++) {
  const m = el('i');
  m.style.cssText = `left:${(Math.random() * 100).toFixed(1)}%;animation-duration:${(18 + Math.random() * 20).toFixed(1)}s;animation-delay:${(-Math.random() * 30).toFixed(1)}s`;
  $('#motes').append(m);
}

/* ---- 換頁 ---- */
function go(patch) { const n = { ...S, ...patch }; history.pushState(n, '', '#' + n.layer); render(n); }
function stay(patch) { const n = { ...S, ...patch }; history.replaceState(n, ''); render(n); }
addEventListener('popstate', e => render(e.state || { layer: 0, intent: null, work: 0, step: 0 }));
$('#back').addEventListener('click', () => history.back());
addEventListener('keydown', e => { if (e.key === 'Escape' && S.layer > 0) history.back(); });

function render(n) {
  const from = S.layer; S = n;
  const it = byId(n.intent);
  if (it && builtFor !== it.id) { builtFor = it.id; brief = { items: new Set(), timing: null, note: '' }; buildWorks(it); }
  if (n.layer === 2) buildCase(it);
  if (n.layer === 3) buildBrief(it);
  document.querySelectorAll('.layer').forEach((l, i) => {
    l.classList.toggle('active', i === n.layer);
    l.classList.toggle('passed', i < n.layer);
    l.inert = i !== n.layer;
    if (i === n.layer && i > from) l.scrollTop = 0;
  });
  bgEl.classList.toggle('deep', n.layer >= 2 || (n.layer === 1 && !!it && !!(it.hire || it.all))); // 文字多的頁面，背景要退到後面
  if (n.layer === 0) startTour(); else { stopTour(); setBg(n.layer === 2 ? it.picks[n.work][2] : it.bg); }
  $('#back').hidden = n.layer === 0;
  drawDepth(n);
  if (n.layer !== from) speak(n, it);
  document.querySelectorAll('.l2 video').forEach(v => n.layer === 2 ? v.play().catch(() => {}) : v.pause());
}

function drawDepth(n) {
  const d = $('#depth'); d.innerHTML = '';
  LAYER_NAMES.forEach((name, i) => {
    const label = i === 1 && n.intent === 'hire' ? '關於我' : i === 1 && n.intent === 'all' ? '全部作品' : name;
    const li = el('li'), b = el('button', i === n.layer ? 'now' : i < n.layer ? 'done' : '', `0${i + 1}<span>${label}</span>`);
    if (i === n.layer) b.setAttribute('aria-current', 'step');
    if (i < n.layer) b.addEventListener('click', () => go({ layer: i, step: 0 })); else b.disabled = true;
    li.append(b); d.append(li);
  });
}

function speak(n, it) {
  if (n.layer === 0) say('想看什麼，選一個就好');
  else if (n.layer === 1) say(it.say);
  else if (n.layer === 2) say('這裡就是完整的內容，慢慢往下看');
  else say(it.hire ? '想了解什麼都可以選' : '不確定的先不用選，沒關係');
}

/* ---- 第一頁：需求。作品斜著一層一層疊著，滾一下換一層，選到的那一層被抽出來 ---- */
const opts = $('#opts'), blank = $('#blank'), N = INTENTS.length; let hot = -1, tour = null, touring = true, blankTimer, diving = false;
function dive(b, it) {
  if (diving) return;
  const next = () => { go({ layer: 1, intent: it.id, work: 0, step: 0 }); setTimeout(() => { diving = false; b.classList.remove('dive'); $('.l0').classList.remove('diving'); }, 900); };
  diving = true;
  if (reduce) return next();
  b.classList.add('dive'); $('.l0').classList.add('diving'); setTimeout(next, 420);   // 先往那張圖裡靠近，再換頁
}
INTENTS.forEach((it, i) => {
  const li = el('li'), b = el('button', 'opt', `<span class="pic"><img src="${IMG + it.bg}" alt=""></span><span class="tag">我想${it.label}：${it.sub}</span>`);
  // 點最前面那張是進去看，點後面的是把它換到最前面
  b.addEventListener('click', () => { touring = false; if (i === hot) dive(b, it); else setHot(i); });
  b.addEventListener('focus', () => { touring = false; setHot(i); });
  li.append(b); opts.append(li);
});
function setHot(i) {
  if (i === hot) return; const first = hot < 0; hot = i;
  [...opts.children].forEach((li, k) => {
    const d = k - i, a = Math.abs(d);   // 0 是被抽出來的那張，正的排在它後面，負的排在它前面
    li.style.setProperty('--k', d < 0 ? d - .7 : d);   // 前面那幾張多讓開一點，被抽出來的才看得到
    li.style.setProperty('--o', (d < 0 ? Math.max(0, .78 - a * .2) : Math.max(0, 1 - d * .18)).toFixed(2));
    li.style.setProperty('--s', (d < 0 ? Math.min(1.12, .96 + a * .03) : d === 0 ? 1 : Math.max(.7, .93 - d * .03)).toFixed(3));
    li.style.zIndex = N - k;   // 越前面的蓋在越上面
    li.dataset.state = d < 0 ? 'front' : d === 0 ? 'sel' : 'back';
    li.firstChild.classList.toggle('hot', d === 0);
    li.firstChild.tabIndex = a > 3 ? -1 : 0; li.style.pointerEvents = a > 3 ? 'none' : '';
  });
  $('#nOf').textContent = `${String(i + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}`;
  $('#upN').disabled = i === N - 1; $('#downN').disabled = i === 0;
  setBg(INTENTS[i].bg);
  // 標題的字先淡出、換字、再淡入
  clearTimeout(blankTimer);
  if (first || reduce) { blank.textContent = INTENTS[i].label; return; }
  blank.classList.add('out');
  blankTimer = setTimeout(() => { blank.textContent = INTENTS[hot].label; blank.classList.remove('out'); }, 400);
}
const move = d => { touring = false; const n = Math.min(N - 1, Math.max(0, hot + d)); if (n !== hot) setHot(n); };
// 上面的那張排在後面（右上），所以「上」是往後一張
$('#upN').addEventListener('click', () => move(1));
$('#downN').addEventListener('click', () => move(-1));
// 滾輪滾一下換一層；觸控板會連發很多次，所以換完要等一下才接受下一次
const L0 = document.querySelector('.layer[data-layer="0"]'); let wheelAt = 0, touchY = null;
L0.addEventListener('wheel', e => {
  e.preventDefault(); if (Math.abs(e.deltaY) < 8) return;
  const t = Date.now(); if (t - wheelAt < 420) return; wheelAt = t; move(e.deltaY < 0 ? 1 : -1);   // 往上滾，選上面那張
}, { passive: false });
addEventListener('keydown', e => {
  if (S.layer !== 0 || e.altKey || e.ctrlKey || e.metaKey || (e.target.closest && e.target.closest('#guide, .player'))) return;
  if (e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'PageUp') { e.preventDefault(); move(1); }
  else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'PageDown') { e.preventDefault(); move(-1); }
});
// 手機：整個畫面都能滑。那一疊跟著手指走：往下滑，上面（後面）那張下來；往上滑，下面（前面）那張上來。
// 手指還沒放開就開始換，滑得遠就連續換好幾層
const STEP = 46;
document.addEventListener('touchstart', e => { touchY = S.layer !== 0 || e.target.closest('#guide, .player, .top') ? null : e.touches[0].clientY; }, { passive: true });
document.addEventListener('touchmove', e => {
  if (touchY == null || S.layer !== 0) return;
  const y = e.touches[0].clientY, d = y - touchY;
  if (Math.abs(d) >= STEP) { move(d > 0 ? 1 : -1); touchY = y; }
}, { passive: true });
const endTouch = () => { touchY = null; };
document.addEventListener('touchend', endTouch, { passive: true });
document.addEventListener('touchcancel', endTouch, { passive: true });
// 沒人動的時候自己慢慢翻，第一個畫面就是活的
function startTour() {
  if (hot < 0) setHot(0); else setBg(INTENTS[hot].bg);
  if (tour || reduce) return;
  tour = setInterval(() => { if (touring) setHot((hot + 1) % N); }, 3600);
}
function stopTour() { clearInterval(tour); tour = null; }

/* ---- 第二頁：作品，一件一件往下看 ---- */
const seen = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('seen', 'visible'); seen.unobserve(e.target); } }), { threshold: .06 });
// 關於我：版面直接取現有 about.html 的區塊（樣式用原本的 about.css），文字取 common.js 的中文文案
let T = null, ABOUT = null;
const loadText = Promise.all([
  fetch('js/common.js', { cache: 'no-cache' }).then(r => r.text()).then(src => { T = new Function(src.slice(0, src.indexOf('\n};') + 3) + '; return translations;')()['zh-TW']; }),
  fetch('about.html', { cache: 'no-cache' }).then(r => r.text()).then(html => { ABOUT = new DOMParser().parseFromString(html, 'text/html'); }),
]).catch(() => {});

function aboutBlocks() {
  const t = k => T[k] || '';
  const pick = sel => {
    const n = ABOUT.querySelector(sel); if (!n) return '';
    const c = n.cloneNode(true);
    c.querySelectorAll('[data-i18n]').forEach(e => { const v = T[e.dataset.i18n]; if (v != null) e.innerHTML = v; });
    c.querySelectorAll('img[src], a[href]').forEach(e => { const k = e.tagName === 'IMG' ? 'src' : 'href', v = e.getAttribute(k); if (v && !/^(https?:|mailto:|tel:|#|\.\.\/)/.test(v)) e.setAttribute(k, '' + v); });
    return c.outerHTML;
  };
  return `<div class="about-top swap"><span class="section-eyebrow">${t('about.hero.eyebrow')}</span>
      <h2 class="about-name">${t('about.hero.title2')}<br>${t('about.hero.title3')}</h2><p class="lead">${t('about.hero.tagline')}</p></div>
    ${pick('.story-section')}${pick('.professional-section')}${pick('.experience-section')}`;
}

function buildWorks(it) {
  const about = it.hire && T && ABOUT;
  const L = $('#L1'); L.className = 'inner l1' + (about ? ' wide' : ''); L.innerHTML = '';
  const head = about ? el('div', 'about-live', aboutBlocks() + `<div class="works-head reveal"><span class="section-eyebrow">代表作品</span><h2 class="section-title">${it.title}</h2><p class="lead">${it.lead}</p></div>`)
                     : el('div', 'head swap', `<span class="mono">${it.kicker || '我想' + it.label}</span><h2>${it.title}</h2><p class="lead">${it.lead}</p>`);
  head.querySelectorAll('.reveal').forEach(x => seen.observe(x));
  const list = el('div', 'works' + (it.all ? ' grid' : ''));
  if (it.all) {
    // 分類篩選：只顯示選到的那一類
    const cats = ['全部', ...ORDER.filter(c => it.picks.some(p => p[1] === c))], bar = el('div', 'chips filter');
    cats.forEach((c, k) => {
      const ch = el('button', 'chip', c); ch.setAttribute('aria-pressed', k === 0);
      ch.addEventListener('click', () => {
        [...bar.children].forEach(x => x.setAttribute('aria-pressed', x === ch));
        [...list.children].forEach((w, i) => { w.hidden = k !== 0 && it.picks[i][1] !== c; if (!w.hidden) w.classList.add('seen'); });
      });
      bar.append(ch);
    });
    head.append(bar);
  }
  it.picks.forEach(([t, why, img, , vid], i) => {
    const c = el('button', 'work', `<span class="shot"><img src="${IMG + img}" alt="" loading="lazy">${vid ? `<video src="${IMG + vid}" muted loop playsinline preload="none"></video>` : ''}</span><span class="cap"><b>${t}</b><span class="why">${why}</span><span class="open">點進去看 →</span></span>`);
    c.addEventListener('click', () => go({ layer: 2, work: i }));
    list.append(c); seen.observe(c);
  });
  const end = el('div', 'ending', `<p>${it.hire ? '看完了，想多聊一點嗎？' : '看完了，有沒有喜歡的？'}</p>`);
  const cta = el('button', 'btn primary', it.hire ? '約時間聊聊' : it.all ? '聊聊合作' : '我也想做這樣的');
  cta.addEventListener('click', () => go({ layer: 3, step: 0 }));
  end.append(cta);
  if (about) { const li = el('a', 'btn', 'LinkedIn ↗'); li.href = 'https://www.linkedin.com/in/%E7%AD%B1%E7%92%87-%E9%99%B3-86a71436a/'; li.target = '_blank'; li.rel = 'noopener'; end.append(li); }
  L.append(head, list, end);
}

/* ---- 第三頁：案例，點進來就是完整內容 ---- */
// 完整案例的資料沿用現有網站的 work-detail.js，只取資料的部分
let CASES = null;
fetch('js/work-detail.js', { cache: 'no-cache' }).then(r => r.text()).then(src => {
  const end = src.indexOf('/* === 作品詳情頁渲染器');
  CASES = new Function(src.slice(0, end) + '; return WORKS_DATA;')();
  const rank = w => { const k = ORDER.indexOf(zh(w.categoryLabel)); return k < 0 ? ORDER.length : k; };
  ALL.picks = Object.values(CASES).sort((a, b) => rank(a) - rank(b)).map(w => {
    const cover = w.featureImage || (w.gallery[0] && w.gallery[0].src) || '';
    return [zh(w.title), zh(w.categoryLabel), cover.replace(/^images\//, ''), D(w.id)];
  });
  if (S.intent === 'all') { builtFor = null; render(S); }
  if (S.layer === 2) buildCase(byId(S.intent));
}).catch(() => {});
const zh = v => (v && typeof v === 'object' ? v['zh-TW'] : v) || '';
const embed = src => `<div class="embed reveal"><iframe src="${src}" title="影片" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;

function buildCase(it) {
  const [t, why, img, href, vid] = it.picks[S.work], n = it.picks.length, L = $('#L2');
  const id = (href.match(/work-detail\.html\?id=([\w-]+)/) || [])[1], w = CASES && id && CASES[id];
  const ext = href.startsWith('http');
  const hero = vid ? `<video src="${IMG + vid}" poster="${IMG + img}" muted loop playsinline controls></video>`
                   : `<img src="${w && w.featureImage ? '' + w.featureImage : IMG + img}" alt="${t}">`;
  let body = '';
  if (w) {
    const info = [['客戶', zh(w.info.client)], ['年份', w.info.year], ['角色', zh(w.info.role)], ['工具', w.info.tools]].filter(([, v]) => v && v !== '—');
    const paras = (w.description.paragraphs['zh-TW'] || []).filter(p => p && p !== zh(w.tagline));
    // 跟現有網站同一套規則：設計類是一長條無縫接起來，攝影與插畫才有間距
    const style = w.galleryStyle === 'masonry' ? 'masonry' : w.galleryStyle === 'spaced' ? 'spaced' : 'seamless';
    const shots = w.gallery.filter(g => '' + g.src !== (w.featureImage ? '' + w.featureImage : ''));
    body = `${info.length ? `<dl class="info reveal">${info.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>` : ''}
      ${zh(w.description.heading) || paras.length ? `<div class="desc reveal">${zh(w.description.heading) ? `<h3>${zh(w.description.heading)}</h3>` : ''}${paras.map(p => `<p>${p}</p>`).join('')}</div>` : ''}
      ${w.embedVideo ? embed(w.embedVideo) : ''}
      <div class="gallery ${style}">${shots.map(g => `<figure class="${style === 'seamless' ? '' : 'reveal'}"><div class="pic"><img src="${g.src}" alt="${zh(g.caption)}" loading="lazy">${(g.overlays || []).map(o => `<img class="over" src="${o.gif}" alt="" loading="lazy" style="top:${o.top}%;left:${o.left}%;width:${o.width}%;height:${o.height}%">`).join('')}</div></figure>`).join('')}</div>
      ${w.galleryEndVideo ? embed(w.galleryEndVideo) : ''}`;
  }
  L.className = 'inner l2';
  L.innerHTML = `<div class="swap"><div class="frame">${hero}</div>
      <span class="mono count">${S.work + 1} / ${n}　${it.label}</span><h2>${w ? zh(w.title) : t}</h2><p class="lead">${w ? zh(w.tagline) : why}</p></div>
    ${body}
    <div class="ending">
      <p>${w ? '看完了，喜歡這件嗎？' : ''}</p>
      <div class="stack">
        <button class="btn primary" id="want">${it.hire ? '約時間聊聊' : '我也想做這樣的'}</button>
        ${it.all ? '<button class="btn" id="backlist">回到全部作品</button>' : ''}
        ${w ? '' : `<a class="btn" href="${href}" target="_blank" rel="noopener">${ext ? '前往網站' : '看更多'} ↗</a>`}
        <div class="row"><button class="btn" id="pw" ${S.work === 0 ? 'disabled' : ''}>← 上一件</button><button class="btn" id="nw" ${S.work === n - 1 ? 'disabled' : ''}>下一件 →</button></div>
      </div>
    </div>`;
  L.querySelectorAll('.reveal').forEach(x => seen.observe(x));
  $('#want').addEventListener('click', () => go({ layer: 3, step: 0 }));
  if (it.all) $('#backlist').addEventListener('click', () => history.back());
  const step = d => { stay({ work: S.work + d }); document.querySelector('.layer.active').scrollTo({ top: 0, behavior: 'auto' }); };
  $('#pw').addEventListener('click', () => step(-1));
  $('#nw').addEventListener('click', () => step(1));
}

/* ---- 第四頁：委託，一次只問一題 ---- */
function briefText(it) {
  const items = [...brief.items].join('、') || '（還沒選）';
  const extra = brief.note.trim() ? `\n備註：${brief.note.trim()}` : '';
  return (it.hire ? `您好 Naomi，我在看您的作品集，想約時間聊聊\n想了解：${items}`
                  : `您好 Naomi，我想${it.label}\n需要：${items}\n時程：${brief.timing || '（還沒選）'}`) + extra;
}
function buildBrief(it) {
  const L = $('#L3'), last = it.hire ? 1 : 2, step = Math.min(S.step, last);
  L.className = 'inner l3 swap';
  L.innerHTML = `<span class="mono">${step + 1} / ${last + 1}　${it.hire ? '面談' : '委託'}</span>`;
  const nav = (backFn, nextFn) => {
    const r = el('div', 'row'), b = el('button', 'btn', '← 上一步'), x = el('button', 'btn primary', '下一步 →');
    b.addEventListener('click', backFn); x.addEventListener('click', nextFn); r.append(b, x); return r;
  };
  const chips = (list, isOn, toggle) => {
    const c = el('div', 'chips');
    list.forEach(v => {
      const ch = el('button', 'chip', v); ch.setAttribute('aria-pressed', isOn(v));
      ch.addEventListener('click', () => { toggle(v); [...c.children].forEach((x, i) => x.setAttribute('aria-pressed', isOn(list[i]))); });
      c.append(ch);
    });
    return c;
  };
  if (step === 0) {
    L.append(
      el('h2', '', it.hire ? '你最想了解哪些面向？' : '你需要哪些？'),
      el('p', 'hint', it.hire ? '可以複選，我會在面談時優先準備' : `「${it.label}」通常包含這些，可以複選`),
      chips(it.items, v => brief.items.has(v), v => { brief.items.has(v) ? brief.items.delete(v) : brief.items.add(v); nudge(it); }),
      nav(() => history.back(), () => stay({ step: 1 })));
  } else if (step === 1 && !it.hire) {
    L.append(
      el('h2', '', '大概什麼時候要？'),
      el('p', 'hint', '只是讓我先有個概念，之後都可以再談'),
      chips(TIMING, v => brief.timing === v, v => { brief.timing = brief.timing === v ? null : v; }),
      nav(() => stay({ step: 0 }), () => stay({ step: 2 })));
  } else {
    const note = el('div', 'note'); note.textContent = briefText(it);
    const r = el('div', 'row'), copy = el('button', 'btn', '複製內容'), send = el('a', 'btn primary', '寄給 Naomi');
    const sync = () => { note.textContent = briefText(it); send.href = 'mailto:buzzdesign2023@gmail.com?subject=' + encodeURIComponent(it.hire ? '面談邀約' : `合作詢問：${it.label}`) + '&body=' + encodeURIComponent(briefText(it)); };
    // 備註：讓對方用自己的話補充
    const memo = el('label', 'memo', '<span>備註（選填）</span>'), ta = el('textarea');
    ta.rows = 3; ta.maxLength = 500; ta.placeholder = it.hire ? '例如：方便的時間、想聊的職位' : '例如：預算範圍、參考的品牌或網站、想要的感覺';
    ta.value = brief.note; ta.addEventListener('input', () => { brief.note = ta.value; sync(); });
    memo.append(ta); sync();
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(briefText(it)); copy.textContent = '已複製'; } catch { copy.textContent = '無法複製'; }
      setTimeout(() => copy.textContent = '複製內容', 1800);
    });
    r.append(copy, send);
    const edit = el('button', 'edit', '← 回去修改'); edit.addEventListener('click', () => stay({ step: last - 1 }));
    L.append(el('h2', '', '這樣就夠我開始了'), el('p', 'hint', '確認一下內容，想補充的可以寫在備註'), note, memo, r, edit);
    say('寫好了，Naomi 收到會很開心');
  }
}
function nudge(it) {
  const n = brief.items.size;
  if (n === it.items.length) say('全部都要，那就是全案了');
  else if (n === 3) say('選了三項，整包一起做風格會比較一致');
}

/* ---- 點下去冒出的小光點 ---- */
addEventListener('click', e => {
  if (reduce || !e.target.closest('.opt, .work, .btn, .chip, .pbtn')) return;
  for (let i = 0; i < 7; i++) {
    const s = el('i', 'spark'), a = Math.random() * Math.PI * 2, d = 24 + Math.random() * 34;
    s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--dx:${(Math.cos(a) * d).toFixed(1)}px;--dy:${(Math.sin(a) * d - 14).toFixed(1)}px`;
    document.body.append(s); setTimeout(() => s.remove(), 950);
  }
});

/* ---- 兔兔：會說話，可以拖到任何地方放著 ---- */
const guide = $('#guide'), bunny = $('#bunny'), bubble = $('#bubble'), bunnyImg = $('#bunnyImg');
const GIF = { idle: IMG + 'galaxy-gif-idle.gif', wave: IMG + 'galaxy-gif-wave.gif', walk: IMG + 'galaxy-gif-walk.gif' };
new Image().src = GIF.wave; new Image().src = GIF.walk;
let hideTimer, poseTimer, pos = null;

function pose(name, ms) {
  if (reduce) return;
  if (!bunnyImg.src.endsWith(GIF[name].slice(2))) bunnyImg.src = GIF[name];
  clearTimeout(poseTimer); if (ms) poseTimer = setTimeout(() => { bunnyImg.src = GIF.idle; }, ms);
}
function say(msg) {
  bubble.textContent = msg; bubble.classList.remove('hide'); pose('wave', 2600);
  clearTimeout(hideTimer); hideTimer = setTimeout(() => bubble.classList.add('hide'), 5200);
}
// 放在哪裡：限制在畫面內，並讓對話框朝有空間的那一邊
function place(x, y) {
  const w = guide.offsetWidth, h = guide.offsetHeight;
  x = Math.max(4, Math.min(innerWidth - w - 4, x)); y = Math.max(4, Math.min(innerHeight - h - 4, y));
  pos = { x, y }; guide.style.left = x + 'px'; guide.style.top = y + 'px';
  guide.classList.toggle('flip-x', x + w / 2 < innerWidth / 2);
  guide.classList.toggle('flip-y', y < 120);
}
function savePos() { try { localStorage.setItem('bunny-pos', JSON.stringify({ rx: pos.x / innerWidth, ry: pos.y / innerHeight })); } catch {} }
function restorePos() {
  let p = null; try { p = JSON.parse(localStorage.getItem('bunny-pos')); } catch {}
  if (p && typeof p.rx === 'number') place(p.rx * innerWidth, p.ry * innerHeight);
  else place(innerWidth - guide.offsetWidth - 10, innerHeight - guide.offsetHeight - 6);
}
restorePos();
addEventListener('resize', () => place(pos.x, pos.y));

const DROPS = ['這裡不錯，我待在這', '好，我在這裡陪你', '換個位置看得比較清楚', '謝謝你帶我過來'];
const IDLE = ['你好呀', '我是星塵領域的兔兔，今天來幫 Naomi 帶路', '想回上一頁，按左上角或 Esc', '左下角可以聽 Naomi 寫的歌'];
let dropAt = 0, idleAt = 0, drag = null;
bunny.addEventListener('pointerdown', e => {
  drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y, moved: false };
  bunny.setPointerCapture(e.pointerId);
});
bunny.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
  if (!drag.moved && Math.hypot(dx, dy) < 6) return;
  if (!drag.moved) { drag.moved = true; guide.classList.remove('placed', 'landed'); guide.classList.add('dragging'); bubble.classList.add('hide'); pose('walk'); }
  place(drag.ox + dx, drag.oy + dy);
});
const endDrag = e => {
  if (!drag || e.pointerId !== drag.id) return;
  const moved = drag.moved; drag = null;
  if (!moved) return say(IDLE[idleAt++ % IDLE.length]);
  guide.classList.remove('dragging'); guide.classList.add('landed'); setTimeout(() => guide.classList.remove('landed'), 650);
  savePos(); say(DROPS[dropAt++ % DROPS.length]);
};
bunny.addEventListener('pointerup', endDrag);
bunny.addEventListener('pointercancel', endDrag);
// 鍵盤也能移動兔兔
bunny.addEventListener('keydown', e => {
  const k = { ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] }[e.key];
  if (k) { e.preventDefault(); guide.classList.add('placed'); place(pos.x + k[0], pos.y + k[1]); savePos(); }
  else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); say(IDLE[idleAt++ % IDLE.length]); }
});

/* ---- 音樂：循環播放、可調音量 ----
 * 每首歌先找 audio/ 裡的 mp3；檔案還沒放進去時，暫時改用 YouTube（一樣能調音量、會循環）。 */
const aud = new Audio(); aud.preload = 'none';
const pframe = $('#pframe'), pvol = $('#pvol');
let ti = 0, playing = false, viaYT = false, vol = 25;
try { const v = +localStorage.getItem('music-vol'); if (v >= 0 && v <= 100 && localStorage.getItem('music-vol') !== null) vol = v; } catch {}
pvol.value = vol;
const ytSend = (func, args = []) => { const f = pframe.querySelector('iframe'); if (f) f.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args }), '*'); };
function applyVol() { aud.volume = vol / 100; ytSend('setVolume', [vol]); pvol.style.setProperty('--v', vol + '%'); }
function stopAll() { aud.pause(); pframe.innerHTML = ''; pframe.hidden = true; viaYT = false; }
function playYT() {
  // 還沒有 mp3 時的替代：單曲循環，載入後把音量調到設定值
  viaYT = true; pframe.hidden = false; const id = TRACKS[ti][0];
  pframe.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&loop=1&playlist=${id}&enablejsapi=1" title="${TRACKS[ti][1]}" allow="autoplay; encrypted-media"></iframe>`;
  const f = pframe.querySelector('iframe');
  f.addEventListener('load', () => { let n = 0; const k = setInterval(() => { f.contentWindow && f.contentWindow.postMessage('{"event":"listening"}', '*'); ytSend('setVolume', [vol]); if (++n > 8) clearInterval(k); }, 400); });
}
function playTrack() {
  stopAll(); playing = true; drawPlayer();
  aud.src = 'audio/' + TRACKS[ti][2]; aud.volume = vol / 100;
  aud.play().catch(() => { if (playing && !viaYT) playYT(); });
}
aud.addEventListener('ended', () => { ti = (ti + 1) % TRACKS.length; playTrack(); });   // 一首播完接下一首，最後一首接回第一首
aud.addEventListener('error', () => { if (playing && !viaYT) playYT(); });
function drawPlayer() {
  $('#ptitle').textContent = TRACKS[ti][1];
  $('#picon').setAttribute('d', playing ? 'M2.5 1.5h3.2v11H2.5zM8.3 1.5h3.2v11H8.3z' : 'M3 1.5v11l9-5.5z');
  $('#pplay').setAttribute('aria-label', playing ? '暫停' : '播放');
}
$('#pplay').addEventListener('click', () => {
  if (playing) { playing = false; stopAll(); drawPlayer(); }
  else { playTrack(); say('這首是 Naomi 自己寫的'); }
});
$('#pnext').addEventListener('click', () => { ti = (ti + 1) % TRACKS.length; if (playing) playTrack(); else drawPlayer(); });
pvol.addEventListener('input', () => { vol = +pvol.value; applyVol(); try { localStorage.setItem('music-vol', vol); } catch {} });
applyVol(); drawPlayer();

/* ---- 頂部：商標回到第一頁，「看全部作品」留在站內 ---- */
$('#home').addEventListener('click', e => { e.preventDefault(); if (S.layer !== 0) go({ layer: 0, step: 0 }); });
$('#skip').addEventListener('click', e => {
  if (!CASES) return;           // 資料還沒載入時，照原本的連結走
  e.preventDefault(); if (!(S.layer === 1 && S.intent === 'all')) go({ layer: 1, intent: 'all', work: 0, step: 0 });
});

/* ---- 開始 ---- */
history.replaceState(S, '', location.pathname);
render(S);
// 文字載入後，如果已經停在「認識這位設計師」，重畫一次
loadText.then(() => { if (S.intent === 'hire') { builtFor = null; const keep = brief; render(S); brief = keep; } });
setTimeout(() => say('你好，我來帶路。選一個，我們慢慢看'), 2000);
