import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Owners from "./components/pages/Owners";
import ShoppingTools from "./components/pages/ShoppingTools";
import Vehicles from "./components/pages/Vehicles";
import NavigationBar from "./components/NavigationBar";
import Ioniq from "./components/pages/Ioniq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <NavigationBar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Vehicles" element={<Vehicles/>}/>
          <Route path="/Owners" element={<Owners/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/ShoppingTools" element={<ShoppingTools/>}/>
          <Route path="Ioniq" element={<Ioniq/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
