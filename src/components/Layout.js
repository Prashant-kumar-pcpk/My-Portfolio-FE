
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const backgrounds = {
  // "/Home": "/main-1.jpg",
  // "/About": "/about-bg.jpg",
  // "/Work": "/work-bg.jpg",
  // "/Contact": "/contact-bg.jpg",
};

export default function Layout() {
  const location = useLocation();

  const background = backgrounds[location.pathname];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Dynamic Background */}
      {background && (
        <>
          <div
            className="fixed inset-0 -z-20 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${background})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-[2px]" />
        </>
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 animate-fade">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}