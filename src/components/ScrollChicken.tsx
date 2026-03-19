import { useEffect, useState } from "react";

const ScrollChicken = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setDirection(currentScroll > lastScroll ? "right" : "left");
      setLastScroll(currentScroll);
      setScrollY(currentScroll);
    };

    // Use a ref-like pattern to always have latest lastScroll
    let prev = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setDirection(current > prev ? "right" : "left");
      prev = current;
      setScrollY(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Calculate horizontal position based on scroll
  const maxWidth = typeof window !== "undefined" ? window.innerWidth - 80 : 1200;
  const xPos = (scrollY * 0.5) % (maxWidth * 2);
  const actualX = xPos > maxWidth ? maxWidth * 2 - xPos : xPos;
  const actualDirection = xPos > maxWidth ? "left" : "right";

  // Bobbing motion
  const bobY = Math.sin(scrollY * 0.05) * 6;

  // Leg animation based on scroll
  const isMoving = Math.abs(scrollY - lastScroll) > 0;
  const step = Math.floor(scrollY / 20) % 2 === 0;

  return (
    <div
      className="fixed bottom-4 z-50 pointer-events-none transition-none"
      style={{
        left: `${actualX}px`,
        transform: `translateY(${bobY}px) scaleX(${actualDirection === "left" ? -1 : 1})`,
      }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Body */}
        <ellipse cx="32" cy="36" rx="18" ry="14" className="fill-[hsl(35,90%,90%)]" />
        {/* Wing */}
        <ellipse cx="26" cy="34" rx="8" ry="6" className="fill-[hsl(35,80%,82%)]" />
        {/* Head */}
        <circle cx="44" cy="22" r="9" className="fill-[hsl(35,90%,90%)]" />
        {/* Eye */}
        <circle cx="47" cy="20" r="2" fill="#1a1a1a" />
        <circle cx="47.5" cy="19.5" r="0.7" fill="white" />
        {/* Beak */}
        <polygon points="53,22 58,20 53,18" className="fill-secondary" />
        {/* Comb */}
        <path d="M40 14 Q42 8 44 14 Q46 8 48 14" className="fill-destructive" strokeLinejoin="round" />
        {/* Wattle */}
        <ellipse cx="50" cy="26" rx="2" ry="3" className="fill-destructive" />
        {/* Tail feathers */}
        <path d="M14 30 Q8 22 16 26 Q10 18 18 24" className="fill-[hsl(35,80%,82%)]" />
        {/* Legs - animated based on scroll */}
        <line
          x1="28" y1="48" x2={step ? "24" : "28"} y2="58"
          stroke="hsl(35, 80%, 50%)" strokeWidth="2.5" strokeLinecap="round"
        />
        <line
          x1="36" y1="48" x2={step ? "36" : "40"} y2="58"
          stroke="hsl(35, 80%, 50%)" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Feet */}
        <line
          x1={step ? "24" : "28"} y1="58" x2={step ? "20" : "24"} y2="60"
          stroke="hsl(35, 80%, 50%)" strokeWidth="2" strokeLinecap="round"
        />
        <line
          x1={step ? "36" : "40"} y1="58" x2={step ? "40" : "44"} y2="60"
          stroke="hsl(35, 80%, 50%)" strokeWidth="2" strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ScrollChicken;