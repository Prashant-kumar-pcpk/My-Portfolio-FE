import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Landing";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Work from "./pages/Work";
import SendMail from "./pages/SendMail";

function App() {
  return (
    <Router>
      <Routes>
       {/* Layout wrapper */}
        <Route path="/" element={<Layout />}
         style={{ backgroundImage: "url('/skill.avif')" }}
        >
          {/* Default page (at "/") */}
          <Route index element={<Main />} />  

          {/*   default route */}
          <Route path="home"element={<Home/>} />
          <Route path="contact"element={<Contact />} /> 
          <Route path="skills"element={<Skills />} />
          <Route path="about"element={<About />} /> 
          <Route path="/work"element={<Work />} /> 
          <Route path="/sendMail" element={<SendMail />} />
           
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
