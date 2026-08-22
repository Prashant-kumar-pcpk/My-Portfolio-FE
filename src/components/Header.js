import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", id: "home", path: "/Home" },
  { name: "About", id: "about", path: "/About" },
  { name: "Skills", id: "skills", path: "/Skills" },
  { name: "Projects", id: "work", path: "/Work" },
  { name: "Achievements", id: "achievements", path: "/Achievements" },
  { name: "Contact Us", id: "contact", path: "/Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item.id);
      window.history.replaceState(null, "", `#${item.id}`);
    } else {
      navigate(`/Home#${item.id}`);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection("home");
      window.history.replaceState(null, "", "#home");
    } else {
      navigate("/Home#home");
    }
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full border border-amber-400 bg-slate-950/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={handleLogoClick}
          className="text-lg  font-bold tracking-wide text-white transition hover:text-cyan-400"
        >
         <i> Prashant</i> <span className="text-cyan-400">.</span>
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-slate-950/95 md:bg-transparent rounded-2xl md:rounded-none border border-white/10 md:border-none p-6 md:p-0 items-center gap-6 md:gap-8 shadow-2xl md:shadow-none backdrop-blur-2xl`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3 py-2 text-base md:text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-white hover:text-orange-400"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;