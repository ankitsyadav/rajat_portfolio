import { useEffect, useRef } from 'react';

const STAR_COUNT = 60;

export function SubtleBackground() {
  const canvasRef = useRef(null);
  const st = useRef({
    mx: 0, my: 0, stars: [], aid: null,
  });

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const s = st.current;
    const ca = canvasRef.current;
    const ctx = ca.getContext('2d');
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;

    for (let i = 0; i < STAR_COUNT; i++) {
      s.stars.push({
        x: Math.random() * ca.width,
        y: Math.random() * ca.height,
        size: Math.random() * 0.8 + 0.2,
        speed: 0.2 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        layer: Math.random(),
      });
    }

    const mm = (e) => { s.mx = e.clientX; s.my = e.clientY; };
    window.addEventListener('mousemove', mm);

    const resize = () => { ca.width = window.innerWidth; ca.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    let t = 0;

    const anim = () => {
      t += 0.002;
      const pw = ca.width;
      const ph = ca.height;

      ctx.clearRect(0, 0, pw, ph);

      // Hero glow — large radial at top-center
      const hg = ctx.createRadialGradient(pw * 0.5, ph * 0.15, 0, pw * 0.5, ph * 0.15, ph * 0.6);
      hg.addColorStop(0, 'rgba(139, 92, 246, 0.025)');
      hg.addColorStop(0.3, 'rgba(139, 92, 246, 0.012)');
      hg.addColorStop(0.6, 'rgba(99, 102, 241, 0.006)');
      hg.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = hg;
      ctx.fillRect(0, 0, pw, ph);

      // Nebula blobs
      const n1x = pw * 0.7 + Math.sin(t * 0.15) * pw * 0.06;
      const n1y = ph * 0.3 + Math.cos(t * 0.12) * ph * 0.05;
      const g1 = ctx.createRadialGradient(n1x, n1y, 0, n1x, n1y, 250);
      g1.addColorStop(0, 'rgba(139, 92, 246, 0.012)');
      g1.addColorStop(0.5, 'rgba(139, 92, 246, 0.006)');
      g1.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, pw, ph);

      const n2x = pw * 0.25 + Math.cos(t * 0.14) * pw * 0.05;
      const n2y = ph * 0.7 + Math.sin(t * 0.1) * ph * 0.04;
      const g2 = ctx.createRadialGradient(n2x, n2y, 0, n2x, n2y, 200);
      g2.addColorStop(0, 'rgba(139, 92, 246, 0.008)');
      g2.addColorStop(0.6, 'rgba(139, 92, 246, 0.004)');
      g2.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, pw, ph);

      // Blue fog
      const f1x = pw * 0.5 + Math.sin(t * 0.08) * pw * 0.08;
      const f1y = ph * 0.5 + Math.cos(t * 0.06) * ph * 0.06;
      const gf = ctx.createRadialGradient(f1x, f1y, 0, f1x, f1y, 300);
      gf.addColorStop(0, 'rgba(99, 102, 241, 0.006)');
      gf.addColorStop(0.5, 'rgba(99, 102, 241, 0.003)');
      gf.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = gf;
      ctx.fillRect(0, 0, pw, ph);

      // Stars
      const px = s.mx / pw;
      const py = s.my / ph;

      for (const star of s.stars) {
        const parallax = star.layer * 0.015;
        const sx = star.x - (px - 0.5) * parallax * pw;
        const sy = star.y - (py - 0.5) * parallax * ph;
        const twinkle = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * star.speed * 4 + star.phase));

        ctx.beginPath();
        ctx.arc(sx, sy, star.size * (0.5 + twinkle * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.25})`;
        ctx.fill();
      }

      s.aid = requestAnimationFrame(anim);
    };

    s.aid = requestAnimationFrame(anim);

    return () => {
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('resize', resize);
      if (s.aid) cancelAnimationFrame(s.aid);
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true" style={{
      position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
    }} />
  );
}

