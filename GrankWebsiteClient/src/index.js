import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/style-css/style.css";
import "../src/style-css/responsive-style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./app/store";
import { Provider } from "react-redux";
import ScrollToTop from "./layout/blanklayout/scroll-top/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
