import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Home from "./components/pages/Home";
import Owners from "./components/pages/Owners";
import ShoppingTools from "./components/pages/ShoppingTools";
import Vehicles from "./components/pages/Vehicles";
import NavigationBar from "./components/NavigationBar";
import CarBuild from "./components/pages/CarBuild";
import CarDetail from "./components/pages/CarDetail";
import Page404 from "./components/helpers/Page404";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/pages/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/Owners" element={<Owners />} />
          <Route
            path="/About"
            element={
              <Suspense fallback={<div>Loading..</div>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/ShoppingTools" element={<ShoppingTools />} />
          <Route path="/CarBuild/:id" element={<CarBuild />} />
          <Route path="/CarDetail/:id" element={<CarDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
