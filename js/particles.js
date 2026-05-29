/* ============================================
   全站粒子效果：拖曳尾跡 + 點擊噴發
   效能優化版：移除 createRadialGradient、
   改用 globalAlpha + arc，並限制粒子上限
   ============================================ */

class ParticleSystem {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.lastTrailTime = 0;
    this.trailInterval = 40;   // 拖曳粒子產生間隔（ms）稍微拉長
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.MAX_PARTICLES = 120;  // 粒子總上限，防止過多累積

    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    this.init();
  }

  init() {
    if (this.isTouchDevice) return;
    this.createCanvas();
    this.bindEvents();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9998;
    `;
    // 移除 mix-blend-mode: screen（GPU 合成消耗大）
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // 限制最高 2x，避免 4K 過度耗損
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.ctx.scale(dpr, dpr);
  }

  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 3 && now - this.lastTrailTime > this.trailInterval) {
        if (this.particles.length < this.MAX_PARTICLES) {
          this.createTrailParticle(e.clientX, e.clientY);
        }
        this.lastTrailTime = now;
      }
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    }, { passive: true });

    document.addEventListener('click', (e) => {
      this.createBurstParticles(e.clientX, e.clientY);
    });
  }

  createTrailParticle(x, y) {
    this.particles.push({
      type: 'trail',
      x: x + (Math.random() - 0.5) * 6,
      y: y + (Math.random() - 0.5) * 6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.1,
      size: Math.random() * 2 + 1,
      life: 1,
      decay: 0.022,
      color: '0, 212, 163'
    });
  }

  createBurstParticles(x, y) {
    const count = 14;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const velocity = Math.random() * 3.5 + 1.5;
      this.particles.push({
        type: 'burst',
        x, y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 2 + 1,
        life: 1,
        decay: 0.028,
        color: '0, 212, 163'
      });
    }
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 4 + 2;
      this.particles.push({
        type: 'burst',
        x, y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 1.2 + 0.6,
        life: 1,
        decay: 0.032,
        color: '255, 255, 255'
      });
    }
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.type === 'burst') {
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.vy += 0.07;
      }

      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      // 直接用 globalAlpha + arc，不建立 gradient 物件
      const opacity = p.type === 'burst' ? p.life : p.life * 0.55;
      ctx.globalAlpha = opacity;
      ctx.fillStyle = `rgb(${p.color})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1; // 重設，避免影響其他繪製
    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
});
