import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Home from "./components/pages/Home";
import Owners from "./components/pages/Owners";
import ShoppingTools from "./components/pages/ShoppingTools";
import Vehicles from "./components/pages/Vehicles";
import NavigationBar from "./components/NavigationBar";
import CarBuild from "./components/pages/CarBuild";
import CarDetail from "./components/pages/CarDetail";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import { lazy, Suspense } from "react";
import { TransitionGroup } from "react-transition-group";
import Fade from "./components/helpers/Fade";

// const About = lazy(() => import("./components/pages/About"));
const Page404 = lazy(() => import("./components/helpers/Page404"));

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <NavigationBar />
      <TransitionGroup>
        <Fade key={location.key}>
          <Routes location={location}>
            <Route path="/" exact element={<Home />} />
            <Route path="/Vehicles" element={<Vehicles />} />
            <Route path="/Owners" element={<Owners />} />
            <Route path="/ShoppingTools" element={<ShoppingTools />} />
            <Route path="/CarBuild/:id" element={<CarBuild />} />
            <Route path="/CarDetail/:id" element={<CarDetail />} />
            <Route path="/About" element={<About />} />

            {/* <Route
            path="/About"
            element={
              <Suspense fallback={<div>Loading..</div>}>
                <About />
              </Suspense>
            }
          /> */}
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading..</div>}>
                  <Page404 />
                </Suspense>
              }
            />
          </Routes>
        </Fade>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
