import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Components</h1>} />
          <Route path="/add" element={<h1>AddProduct Components</h1>} />
          <Route path="/update" element={<h1>Update Product Components</h1>} />
          <Route path="/logout" element={<h1>Logout Components</h1>} />
          <Route path="/profile" element={<h1>Profile Components</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
