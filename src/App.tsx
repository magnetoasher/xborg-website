import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouter, Footer, Navigation } from "./components";
import store from "./store";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-toastify/dist/ReactToastify.css";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Navigation />
        <AppRouter />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
