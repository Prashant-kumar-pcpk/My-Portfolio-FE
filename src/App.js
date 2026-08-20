import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Landing";
import Home from "./pages/Home";
import SendMail from "./pages/SendMail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Default page (at "/") */}
          <Route index element={<Main />} />  

          {/* Single page scroll routes */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="skills" element={<Home />} />
          <Route path="work" element={<Home />} />
          <Route path="achievements" element={<Home />} />
          <Route path="contact" element={<Home />} />
          <Route path="sendMail" element={<SendMail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
