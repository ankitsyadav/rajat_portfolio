import { useMemo, useState, useEffect } from 'react';

const particleSeeds = [
  { x: 5, y: 10, size: 3, duration: 20, delay: 0 },
  { x: 15, y: 25, size: 2, duration: 18, delay: 2 },
  { x: 25, y: 5, size: 4, duration: 22, delay: 1 },
  { x: 35, y: 30, size: 3, duration: 19, delay: 3 },
  { x: 45, y: 15, size: 2, duration: 21, delay: 0.5 },
  { x: 55, y: 40, size: 4, duration: 17, delay: 2.5 },
  { x: 65, y: 8, size: 3, duration: 23, delay: 1.5 },
  { x: 75, y: 35, size: 2, duration: 20, delay: 3.5 },
  { x: 85, y: 20, size: 3, duration: 18, delay: 0.8 },
  { x: 95, y: 45, size: 4, duration: 22, delay: 2.2 },
  { x: 10, y: 55, size: 3, duration: 19, delay: 1.2 },
  { x: 20, y: 70, size: 2, duration: 21, delay: 3.2 },
  { x: 30, y: 60, size: 4, duration: 17, delay: 0.3 },
  { x: 40, y: 80, size: 3, duration: 23, delay: 2.8 },
  { x: 50, y: 65, size: 2, duration: 20, delay: 1.8 },
  { x: 60, y: 75, size: 4, duration: 18, delay: 3.8 },
  { x: 70, y: 50, size: 3, duration: 22, delay: 0.6 },
  { x: 80, y: 85, size: 2, duration: 19, delay: 2.6 },
  { x: 90, y: 55, size: 3, duration: 21, delay: 1.6 },
  { x: 8, y: 90, size: 4, duration: 17, delay: 3.6 },
  { x: 18, y: 95, size: 3, duration: 23, delay: 0.9 },
  { x: 38, y: 88, size: 2, duration: 20, delay: 2.1 },
  { x: 58, y: 92, size: 4, duration: 18, delay: 1.1 },
  { x: 78, y: 98, size: 3, duration: 22, delay: 3.1 },
  { x: 88, y: 82, size: 2, duration: 19, delay: 0.4 },
  { x: 12, y: 42, size: 3, duration: 21, delay: 2.4 },
  { x: 32, y: 48, size: 4, duration: 17, delay: 1.4 },
  { x: 52, y: 38, size: 2, duration: 23, delay: 3.4 },
  { x: 72, y: 58, size: 3, duration: 20, delay: 0.7 },
  { x: 92, y: 68, size: 4, duration: 18, delay: 2.7 },
];

export function GradientOrbs() {
  return (
    <div className="gradient-orbs">
      <div className="orb orb--1"></div>
      <div className="orb orb--2"></div>
      <div className="orb orb--3"></div>
    </div>
  );
}

export function FloatingParticles() {
  const particles = useMemo(() => particleSeeds, []);

  return (
    <div className="particles">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}