import { useEffect, useRef, useState } from 'react';

export function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    const currentRef = ref.current;
    
    if (currentRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(currentRef);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}