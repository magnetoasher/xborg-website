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
  const [navbarBtn, setNavbarBtn] = useState<any>(undefined);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          theme={"dark"}
        />
        <Navigation navbarBtn={navbarBtn} />
        <AppRouter setNavbarBtn={setNavbarBtn} />
        <Links />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
