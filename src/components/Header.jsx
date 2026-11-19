import { useState, useEffect } from "react";
import { navLinks } from "../data/games.js";

export default function Header({ page, go }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect + cleanup: listen to scroll, remove the listener when we leave
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    go(id);
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="container nav-bar">
        <a href="#" className="logo" onClick={(e) => handleClick(e, "home")}>
          <img src="/images/logo.png" alt="Lugx" />
        </a>

        <button
          className="menu-trigger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className={page === link.id ? "active" : ""}
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="sign-in">
            <a href="#" onClick={(e) => e.preventDefault()}>Sign In</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
