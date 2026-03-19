import { useEffect, useState } from "react";

const ScrollChicken = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rotation = scrollY * 2;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <ellipse cx="32" cy="36" rx="18" ry="14" className="fill-[hsl(35,90%,90%)]" />
        <ellipse cx="26" cy="34" rx="8" ry="6" className="fill-[hsl(35,80%,82%)]" />
        <circle cx="44" cy="22" r="9" className="fill-[hsl(35,90%,90%)]" />
        <circle cx="47" cy="20" r="2" fill="#1a1a1a" />
        <circle cx="47.5" cy="19.5" r="0.7" fill="white" />
        <polygon points="53,22 58,20 53,18" className="fill-secondary" />
        <path d="M40 14 Q42 8 44 14 Q46 8 48 14" className="fill-destructive" strokeLinejoin="round" />
        <ellipse cx="50" cy="26" rx="2" ry="3" className="fill-destructive" />
        <path d="M14 30 Q8 22 16 26 Q10 18 18 24" className="fill-[hsl(35,80%,82%)]" />
        <line x1="28" y1="48" x2="28" y2="58" stroke="hsl(35,80%,50%)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="48" x2="36" y2="58" stroke="hsl(35,80%,50%)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default ScrollChicken;