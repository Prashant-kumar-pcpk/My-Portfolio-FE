
// import React, { useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const backgrounds = {};

// export default function Layout() {
//   const location = useLocation();

//   const background = backgrounds[location.pathname];

//   // Route change hone par page ko smoothly top par le jayega
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [location.pathname]);

//   return (
//     <div className="relative min-h-screen flex flex-col overflow-hidden">

//       {/* Dynamic Background */}
//       {background && (
//         <>
//           <div
//             className="galaxy-bg min-h-screen"
           
//           />

        
//         </>
//       )}

//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 animate-fade">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />

//     </div>
//   );
// }


import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  // Route change hone par page ko smoothly top par le jayega jab koi specific hash ya section na ho
  useEffect(() => {
    if (!location.hash && (location.pathname === "/" || location.pathname === "/home")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="galaxy-bg relative flex min-h-screen flex-col overflow-hidden">
      
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