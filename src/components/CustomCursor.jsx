import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const trailRef = useRef([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      trailRef.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
      setTrail([...trailRef.current]);
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      {trail.map((point, i) => (
        <div
          key={i}
          className="cursor-trail"
          style={{
            transform: `translate(${point.x - 3}px, ${point.y - 3}px)`,
            opacity: (i + 1) / trail.length * 0.5,
            scale: (i + 1) / trail.length,
          }}
        />
      ))}
    </>
  );
}