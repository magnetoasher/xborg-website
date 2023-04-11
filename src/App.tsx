import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouter, Footer, Links, Navigation } from "./components";
import store from "./store";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-toastify/dist/ReactToastify.css";

import "./styles/main.css";
import { useState } from "react";

function App() {
  const [visibleNavbar, setNavbarVisibility] = useState<boolean>(true);
  const [visibleNavbarBtn, setNavbarBtnVisibility] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        {visibleNavbar && <Navigation visibleNavbarBtn={visibleNavbarBtn} />}
        <AppRouter
          setNavbarVisibility={setNavbarVisibility}
          setNavbarBtnVisibility={setNavbarBtnVisibility}
        />
        <Links />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
