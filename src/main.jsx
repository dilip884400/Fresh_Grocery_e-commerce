import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);