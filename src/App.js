import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import Owners from "./components/pages/Owners";
import ShoppingTools from "./components/pages/ShoppingTools";
import Vehicles from "./components/pages/Vehicles";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Vehicles" element={<Vehicles/>}/>
          <Route path="/Owners" element={<Owners/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/ShoppingTools" element={<ShoppingTools/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
