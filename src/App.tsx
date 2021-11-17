import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./core/styles/global.styles.scss";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
