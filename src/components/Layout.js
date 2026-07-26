
// import React from "react";
// import {  Outlet, useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import Header from "../components/Header";



// function Layout() {

// const location = useLocation();

//   // List of routes where you want the background
//   const bgPages = ["/Home", "/About", "/Contact", "/Work"];

//   // Check if current route is one of them
//   const hasBg = bgPages.includes(location.pathname);

//   return (
//     <div 
//       className={`min-h-screen flex flex-col`}
//       style={{
//         backgroundImage: hasBg ? "url('/laptop.jpg')" : "none",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
    

//      {/* Navbar */}
//       <Header />   {/* ✅ Reusable Navbar */}

//       {/* Content will change here */}
//       <main className="p-0">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />   {/* ✅ Reusable Footer */}
//     </div>
//   );
// }

// export default Layout;



import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const backgrounds = {
  "/Home": "/laptop.jpg",
  "/About": "/about-bg.jpg",
  "/Work": "/work-bg.jpg",
  "/Contact": "/contact-bg.jpg",
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