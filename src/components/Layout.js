
import React from "react";
import {  Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";



function Layout() {

const location = useLocation();

  // List of routes where you want the background
  const bgPages = ["/Home", "/About", "/Contact", "/Work"];

  // Check if current route is one of them
  const hasBg = bgPages.includes(location.pathname);

  return (
    <div 
      className={`min-h-screen flex flex-col`}
      style={{
        backgroundImage: hasBg ? "url('/laptop.jpg')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    

     {/* Navbar */}
      <Header />   {/* ✅ Reusable Navbar */}

      {/* Content will change here */}
      <main className="p-0">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />   {/* ✅ Reusable Footer */}
    </div>
  );
}

export default Layout;
