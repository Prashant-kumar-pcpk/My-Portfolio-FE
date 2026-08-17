import React from 'react'
import { Link } from 'react-router-dom';


import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { name: "Home", path: "/Home" },
      { name: "About", path: "/About" },
      { name: "Skills", path: "/Skills" },
      { name: "Work", path: "/Work" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
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
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="/Prashant kr.png"
                alt="logo"
                className="w-24 h-24 rounded-full object-cover"
              />
            </Link>
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
                      <Link
                        to={item.path}
                        className="text-gray-300 hover:text-orange-500 duration-300"
                      >
                        {item.name}
                      </Link>
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