/* 互動效果：滑鼠光暈與視差、卡片傾斜、影片滑過播放、圖片點開放大、捲動時的層次
 * 全部用事件委派，不需要知道頁面內容是什麼時候畫出來的。 */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = s => document.querySelector(s);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ---- 滑鼠：一團柔光跟著走，背景和首頁的漂浮物依遠近錯開移動 ---- */
  if (fine && !reduce) {
    const glow = document.createElement('div'); glow.className = 'glow'; glow.setAttribute('aria-hidden', 'true'); document.body.append(glow);
    const bg = $('#bg'), opts = $('#opts');
    let tx = innerWidth / 2, ty = innerHeight / 2, x = tx, y = ty, raf = 0;
    const tick = () => {
      x += (tx - x) * .09; y += (ty - y) * .09;
      glow.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      const mx = (x / innerWidth - .5) * 2, my = (y / innerHeight - .5) * 2;
      for (const e of [bg, opts]) { e.style.setProperty('--mx', mx.toFixed(4)); e.style.setProperty('--my', my.toFixed(4)); }
      raf = Math.abs(tx - x) + Math.abs(ty - y) > .3 ? requestAnimationFrame(tick) : 0;
    };
    addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY; glow.classList.add('on');
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => glow.classList.remove('on'));

    /* ---- 作品卡片：跟著滑鼠微微傾斜，表面有一道光 ---- */
    let tilted = null;
    const untilt = () => { if (!tilted) return; const s = tilted; tilted = null; s.classList.remove('tilt'); s.style.removeProperty('--rx'); s.style.removeProperty('--ry'); };
    document.addEventListener('pointermove', e => {
      const w = e.target.closest && e.target.closest('.work'), s = w && w.querySelector('.shot');
      if (s !== tilted) untilt();
      if (!s || e.pointerType !== 'mouse') return;
      const r = s.getBoundingClientRect(), px = clamp((e.clientX - r.left) / r.width, 0, 1), py = clamp((e.clientY - r.top) / r.height, 0, 1);
      tilted = s; s.classList.add('tilt');
      s.style.setProperty('--ry', ((px - .5) * 7).toFixed(2) + 'deg');
      s.style.setProperty('--rx', ((.5 - py) * 6).toFixed(2) + 'deg');
      s.style.setProperty('--sx', (px * 100).toFixed(1) + '%');
      s.style.setProperty('--sy2', (py * 100).toFixed(1) + '%');
    }, { passive: true });
    document.addEventListener('pointerleave', untilt);

    /* ---- 有影片的作品：滑過去就播 ---- */
    document.addEventListener('pointerover', e => {
      const v = e.target.closest && e.target.closest('.work') && e.target.closest('.work').querySelector('video');
      if (v && v.paused) { v.classList.add('on'); v.play().catch(() => {}); }
    });
    document.addEventListener('pointerout', e => {
      const w = e.target.closest && e.target.closest('.work'); if (!w || w.contains(e.relatedTarget)) return;
      const v = w.querySelector('video'); if (v) { v.classList.remove('on'); v.pause(); }
    });
  }

  /* ---- 攝影、插畫的圖片：點開放大，左右鍵換下一張 ---- */
  const lb = document.createElement('div'); lb.className = 'lb'; lb.hidden = true;
  lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', '放大檢視');
  lb.innerHTML = '<button class="lb-x" aria-label="關閉">✕</button><button class="lb-nav prev" aria-label="上一張">←</button><img alt=""><button class="lb-nav next" aria-label="下一張">→</button><span class="lb-n mono"></span>';
  document.body.append(lb);
  const lbImg = lb.querySelector('img'); let set = [], at = 0, lastFocus = null, closeTimer;
  const show = i => {
    at = (i + set.length) % set.length; lbImg.classList.add('swap');
    setTimeout(() => { lbImg.src = set[at].currentSrc || set[at].src; lbImg.alt = set[at].alt; lbImg.onload = () => lbImg.classList.remove('swap'); }, reduce ? 0 : 180);
    lb.querySelector('.lb-n').textContent = `${at + 1} / ${set.length}`;
    lb.querySelectorAll('.lb-nav').forEach(b => b.hidden = set.length < 2);
  };
  const open = (imgs, i) => {
    set = imgs; lastFocus = document.activeElement; clearTimeout(closeTimer);
    lbImg.removeAttribute('src'); lb.hidden = false; show(i);
    requestAnimationFrame(() => lb.classList.add('on')); lb.querySelector('.lb-x').focus();
  };
  const close = () => {
    lb.classList.remove('on'); closeTimer = setTimeout(() => { lb.hidden = true; }, reduce ? 0 : 450);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };
  document.addEventListener('click', e => {
    const pic = e.target.closest && e.target.closest('.gallery.spaced .pic, .gallery.masonry .pic'); if (!pic) return;
    const pics = [...pic.closest('.gallery').querySelectorAll('.pic')];
    open(pics.map(p => p.querySelector('img:not(.over)')), pics.indexOf(pic));
  });
  lb.addEventListener('click', e => {
    if (e.target.closest('.prev')) show(at - 1); else if (e.target.closest('.next')) show(at + 1); else if (e.target !== lbImg) close();
  });
  // 放大時 Esc 只關掉大圖，不要連頁面一起退回去
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') { e.stopImmediatePropagation(); close(); }
    else if (e.key === 'ArrowLeft') show(at - 1);
    else if (e.key === 'ArrowRight') show(at + 1);
    else if (e.key === 'Tab') { e.preventDefault(); const f = [...lb.querySelectorAll('button:not([hidden])')]; f[(f.indexOf(document.activeElement) + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
  }, true);
  addEventListener('popstate', () => { if (!lb.hidden) close(); });
  let sx0 = null;
  lb.addEventListener('touchstart', e => { sx0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => { if (sx0 == null) return; const d = e.changedTouches[0].clientX - sx0; sx0 = null; if (Math.abs(d) > 50) show(at + (d < 0 ? 1 : -1)); }, { passive: true });

  /* ---- 捲動：頂端的進度線；作品圖在框裡慢半拍移動；手機上捲到中間的影片自己播 ---- */
  const prog = document.createElement('div'); prog.className = 'prog'; prog.setAttribute('aria-hidden', 'true'); document.body.append(prog);
  let queued = false;
  const update = () => {
    queued = false;
    const l = $('.layer.active'); if (!l) return;
    const max = l.scrollHeight - l.clientHeight;
    prog.style.setProperty('--p', max > 40 ? (l.scrollTop / max).toFixed(4) : 0);
    const vh = innerHeight;
    l.querySelectorAll('.work:not([hidden]) .shot').forEach(s => {
      const r = s.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return;
      const c = clamp(((r.top + r.height / 2) - vh / 2) / (vh / 2), -1, 1);
      if (!reduce) s.style.setProperty('--sy', (-c).toFixed(3));
      const v = !fine && s.querySelector('video');
      if (v) { const mid = Math.abs(c) < .45; v.classList.toggle('on', mid); if (mid) v.play().catch(() => {}); else v.pause(); }
    });
  };
  const ask = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  document.querySelectorAll('.layer').forEach(l => {
    l.addEventListener('scroll', ask, { passive: true });
    new MutationObserver(ask).observe(l, { attributes: true, attributeFilter: ['class'], childList: true, subtree: true });
  });
  addEventListener('resize', ask); ask();
})();
