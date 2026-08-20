

import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="portfolio-bg relative flex min-h-screen flex-col overflow-hidden text-white">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 flex-1 animate-fade">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}