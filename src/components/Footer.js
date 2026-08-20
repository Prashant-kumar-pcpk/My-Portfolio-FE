import React from 'react';


import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", id: "home", path: "/Home#home" },
      { name: "About", id: "about", path: "/About#about" },
      { name: "Skills", id: "skills", path: "/Skills#skills" },
      { name: "Projects", id: "work", path: "/Work#work" },
      { name: "Achievements", id: "achievements", path: "/Achievements#achievements" },
      { name: "Contact Us", id: "contact", path: "/Contact#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/prashant-kumar-frontend-developer/" },
      { name: "GitHub", url: "https://github.com/Prashant-kumar-pcpk" },
      { name: "Email", url: "mailto:prashantkumar.pcpk@gmail.com" },
    ],
  },
];


const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/prashant-kumar-frontend-developer/",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/Prashant-kumar-pcpk",
  }
];

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      window.location.href = `/Home#${id}`;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="inline-block"
            >
              <img
                src="/Prashant kr.png"
                alt="logo"
                className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
              />
            </a>
            <h3 className="mt-3 text-xl font-bold text-white">Prashant Kumar</h3>
            <p className="text-sm text-slate-400">Full Stack MERN Developer</p>
          </div>

          {/* Dynamic Links */}
          <div className="grid grid-cols-2 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h2 className="text-orange-500 font-bold mb-4">
                  {section.title}
                </h2>

                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      {item.id ? (
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleScrollTo(e, item.id)}
                          className="text-gray-300 hover:text-orange-500 duration-300 text-sm"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-orange-500 duration-300 text-sm"
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Prashant Kumar. All Rights Reserved.
          </p>

          {/* Dynamic Social Icons */}
          <div className="flex gap-5 text-2xl mt-5 md:mt-0">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

      </div>

    </footer>
  )
}