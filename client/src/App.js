import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meta from "./pages/Meta";
import QR from "./pages/QR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/QR" element={<QR />} />
      </Routes>
    </Router>
  );
}

export default App;
