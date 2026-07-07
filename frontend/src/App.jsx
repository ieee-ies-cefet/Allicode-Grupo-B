import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contato" element={<Contact />} />

        <Route path="/conta" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;