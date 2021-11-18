import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./core/styles/global.styles.scss";
import NewsAppRoutes from "./routes/app-routes";

function App() {
  return (
    <div className="App">
      <NewsAppRoutes />
    </div>
  );
}

export default App;
