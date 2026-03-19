import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-display font-bold text-xl text-primary tracking-tight">
          🌾 Kumar Feeds & Biotech
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-md bg-secondary text-secondary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all duration-200">
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border pb-4">
          <ul className="container flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 font-body text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
