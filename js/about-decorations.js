/* ============================================
   全站飄浮裝飾元素系統
   - 所有元素持續自動往上飄
   - 滑鼠靠近時閃躲到安全距離外，再繼續往上飄
   - 滑鼠拖尾綠點效果
   ============================================ */

class FloatingDecorations {
  constructor() {
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    this.elements = [];
    this.mouseX = -9999;
    this.mouseY = -9999;
    this.REPEL_RADIUS = 120;    // 閃躲感應半徑（px）
    this.REPEL_DIST   = 160;    // 閃躲後最小距離（px）

    if (!this.isTouchDevice) {
      this.initStyles();
      this.initContainer();
      this.initMouseTrail();
      document.addEventListener('mousemove', e => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      });
      requestAnimationFrame(() => this.tick());
    }
  }

  /* === CSS 動畫注入 === */
  initStyles() {
    if (document.getElementById('fd-style')) return;
    const s = document.createElement('style');
    s.id = 'fd-style';
    s.textContent = `
      @keyframes fdRise {
        0%   { transform: translateY(0); }
        100% { transform: translateY(calc(-100vh - 200px)); }
      }
    `;
    document.head.appendChild(s);
  }

  /* === 容器 === */
  initContainer() {
    this.container = document.createElement('div');
    this.container.id = 'floating-decorations';
    this.container.style.cssText = `
      position: fixed;
      top: -1px; left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
      border: none;
      outline: none;
    `;
    document.body.insertBefore(this.container, document.body.firstChild);

    /* 元素配置 */
    const configs = [
      { type: 'circle', count: 6,  size: [50, 120] },
      { type: 'ring',   count: 5,  size: [65, 150] },
      { type: 'dot',    count: 22, size: [3, 9]    },
      { type: 'square', count: 4,  size: [8, 18]   }   // ← 縮小：原本 16-32
    ];

    configs.forEach(({ type, count, size }) => {
      for (let i = 0; i < count; i++) {
        this.spawnElement(type, size, true);
      }
    });
  }

  /* 產生單一飄浮元素 */
  spawnElement(type, sizeRange, randomStart = false) {
    const sz = this.rand(sizeRange[0], sizeRange[1]);

    /* 起始 Y：隨機分散在畫面中（第一次），之後從底部出現 */
    const startY = randomStart
      ? this.rand(0, window.innerHeight + 200)
      : window.innerHeight + sz + 50;

    const baseX = this.rand(0, window.innerWidth);
    const speed = this.rand(40, 100);       // px/s，越小越慢
    const swayAmp = this.rand(15, 40);      // 左右搖擺幅度
    const swayFreq = this.rand(0.3, 0.8);  // 搖擺頻率

    const el = document.createElement('div');
    el.style.cssText = `
      position: absolute;
      width: ${sz}px; height: ${sz}px;
      pointer-events: none;
      will-change: transform;
    `;
    this.applyStyle(el, type);
    this.container.appendChild(el);

    const item = {
      el, type, sizeRange,
      sz,
      baseX,               // 正常路徑的 X 中心（會因搖擺變動）
      x: baseX,            // 目前實際 X
      y: startY,           // 目前實際 Y（從畫面下方或隨機）
      vy: -speed,          // 每秒向上的速度（負值＝往上）
      swayAmp,
      swayFreq,
      swayPhase: Math.random() * Math.PI * 2,
      repelX: 0,           // 閃躲位移 X
      repelY: 0,           // 閃躲位移 Y
      dead: false
    };
    this.elements.push(item);
    return item;
  }

  /* 套用視覺樣式 */
  applyStyle(el, type) {
    switch (type) {
      case 'circle':
        el.style.background = 'radial-gradient(circle, rgba(0,212,163,0.07) 0%, rgba(0,212,163,0) 70%)';
        el.style.borderRadius = '50%';
        break;
      case 'ring':
        el.style.border = '1px solid rgba(0,212,163,0.08)';
        el.style.borderRadius = '50%';
        el.style.boxSizing = 'border-box';
        break;
      case 'dot':
        el.style.background = 'rgba(0,212,163,0.35)';
        el.style.borderRadius = '50%';
        el.style.boxShadow = '0 0 10px rgba(0,212,163,0.45)';
        break;
      case 'square':
        el.style.border = '1px solid rgba(255,255,255,0.09)';
        el.style.transform = `rotate(${Math.random() * 45}deg)`;
        break;
    }
  }

  /* === 主循環 === */
  lastTime = 0;
  tick(now = 0) {
    const dt = Math.min((now - this.lastTime) / 1000, 0.05); // delta time，秒
    this.lastTime = now;

    for (let i = this.elements.length - 1; i >= 0; i--) {
      const item = this.elements[i];

      /* 1. 基礎上升 + 左右搖擺 */
      item.y += item.vy * dt;
      item.swayPhase += item.swayFreq * dt;
      const swayX = Math.sin(item.swayPhase) * item.swayAmp;
      item.x = item.baseX + swayX;

      /* 2. 計算滑鼠排斥力 */
      const cx = item.x + item.sz / 2;    // 元素中心 X（以 fixed 座標）
      const cy = item.y + item.sz / 2;    // 元素中心 Y（以 fixed 座標）
      const dx = cx - this.mouseX;
      const dy = cy - this.mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.REPEL_RADIUS) {
        /* 閃躲：推離到 REPEL_DIST 距離 */
        const angle = Math.atan2(dy, dx);
        const targetDist = this.REPEL_DIST;
        const pushX = Math.cos(angle) * targetDist - dx;
        const pushY = Math.sin(angle) * targetDist - dy;
        item.repelX += (pushX - item.repelX) * 0.25;
        item.repelY += (pushY - item.repelY) * 0.25;
      } else {
        /* 恢復 */
        item.repelX *= 0.88;
        item.repelY *= 0.88;
      }

      /* 3. 最終位置 */
      const finalX = item.x + item.repelX;
      const finalY = item.y + item.repelY;
      item.el.style.transform = `translate(${finalX}px, ${finalY}px)`;

      /* 4. 超出畫面上方 → 重生於底部 */
      if (item.y + item.sz < -200) {
        item.baseX = this.rand(0, window.innerWidth);
        item.y = window.innerHeight + item.sz + 10;
        item.vy = -(this.rand(40, 100));
        item.repelX = 0;
        item.repelY = 0;
        item.swayPhase = Math.random() * Math.PI * 2;
      }
    }

    requestAnimationFrame(t => this.tick(t));
  }

  /* === 滑鼠拖尾綠點 === */
  initMouseTrail() {
    const count = 8;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;';
    document.body.appendChild(wrap);

    const dots = [];
    for (let i = 0; i < count; i++) {
      const sz = Math.max(2, 6 - i * 0.6);
      const d = document.createElement('div');
      d.style.cssText = `
        position:absolute; width:${sz}px; height:${sz}px;
        border-radius:50%;
        background:rgba(0,212,163,${0.75 - i * 0.08});
        box-shadow:0 0 ${7 - i}px rgba(0,212,163,0.6);
        transform:translate(-50%,-50%);
        pointer-events:none;
        transition:opacity 0.3s;
        opacity:0;
      `;
      wrap.appendChild(d);
      dots.push({ el: d, x: 0, y: 0 });
    }

    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dots.forEach(d => d.el.style.opacity = '1'); });
    document.addEventListener('mouseleave', () => dots.forEach(d => d.el.style.opacity = '0'));

    let lt = 0;
    const loop = (t) => {
      if (t - lt > 14) {
        dots[0].x = mx; dots[0].y = my;
        for (let i = 1; i < dots.length; i++) {
          dots[i].x += (dots[i-1].x - dots[i].x) * 0.35;
          dots[i].y += (dots[i-1].y - dots[i].y) * 0.35;
        }
        dots.forEach(d => { d.el.style.left = d.x + 'px'; d.el.style.top = d.y + 'px'; });
        lt = t;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  rand(min, max) { return Math.random() * (max - min) + min; }
}

document.addEventListener('DOMContentLoaded', () => { new FloatingDecorations(); });
