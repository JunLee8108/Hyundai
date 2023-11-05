import "./App.css";
import ScrollToTop from "./components/helpers/ScrollToTop";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import LoadingHeight100 from "./components/helpers/LoadingHeight100";

import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Page404 = lazy(() => import("./components/helpers/Page404"));
const Owners = lazy(() => import("./components/pages/Owners"));
const ShoppingTools = lazy(() => import("./components/pages/ShoppingTools"));
const Vehicles = lazy(() => import("./components/pages/Vehicles"));
const CarBuild = lazy(() => import("./components/pages/CarBuild"));
const CarDetail = lazy(() => import("./components/pages/CarDetail"));
const About = lazy(() => import("./components/pages/About"));

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavigationBar />

      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route
          path="/Vehicles"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <Vehicles />
            </Suspense>
          }
        />
        <Route
          path="/Owners"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <Owners />
            </Suspense>
          }
        />
        <Route
          path="/ShoppingTools"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <ShoppingTools />
            </Suspense>
          }
        />
        <Route
          path="/CarBuild/:id"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <CarBuild />
            </Suspense>
          }
        />
        <Route
          path="/CarDetail/:id"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <CarDetail />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingHeight100 />}>
              <Page404 />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
