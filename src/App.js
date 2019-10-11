import React from "react";
import "./App.css";
import IndexPage from "./pages/Index";
import Header from "./navigation/index";
function App({ children }) {
  return (
    <div className="App">
      <Header />
      <IndexPage />
      {children}
    </div>
  );
}

export default App;
