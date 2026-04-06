import { useState, useEffect, useRef } from 'react';

const COUNTERS = [
  { label: 'Citizens Impacted', target: 1000000100, suffix: '+' },
  { label: 'Urban Local Bodies', target: 3500, suffix: '+' },
  { label: 'States & UTs', target: 32, suffix: '' },
  { label: 'Active Modules', target: 45, suffix: '+' },
];

function formatNumber(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toString();
}

function Counter({ target, label, suffix, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [animate, target]);

  return (
    <div className="counter-item">
      <span className="counter-number">
        {formatNumber(count)}
        {suffix}
      </span>
      <span className="counter-label">{label}</span>
    </div>
  );
}

function ImpactCounter() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="impact-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          Our <span className="text-blue">Impact</span>
        </h2>
        <div className="counter-grid">
          {COUNTERS.map((c) => (
            <Counter key={c.label} {...c} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactCounter;