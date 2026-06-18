import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import App from "./App";
import { ThemeProvider, } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ThemeProvider>
        <App />
        <Toaster position="top-right" />
    </ThemeProvider>
  
);