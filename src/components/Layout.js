
// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const backgrounds = {
 
// };

// export default function Layout() {
//   const location = useLocation();

//   const background = backgrounds[location.pathname];

//   return (
//     <div className="relative min-h-screen flex flex-col overflow-hidden">

//       {/* Dynamic Background */}
//       {background && (
//         <>
//           <div
//             className="fixed inset-0 -z-20 bg-cover bg-center transition-all duration-700"
//             style={{
//               backgroundImage: `url(${background})`,
//             }}
//           />

//           {/* Dark Overlay */}
//           <div className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-[2px]" />
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

const backgrounds = {};

export default function Layout() {
  const location = useLocation();

  const background = backgrounds[location.pathname];

  // Route change hone par page ko smoothly top par le jayega
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

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