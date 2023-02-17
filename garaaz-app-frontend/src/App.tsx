import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import GetOrder from "./pages/GetOrder";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<PlaceOrder />}></Route>
        <Route path="/view" element={<GetOrder />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
