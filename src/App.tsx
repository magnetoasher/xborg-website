import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, Footer, Navigation } from "./components";
import store from "./store";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/main.css";

import "vanilla-tilt";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <AppRouter />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}
//

export default App;
