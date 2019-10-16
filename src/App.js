import React from "react";
import "./App.css";
import { ContextProvider } from "./store/state";
import Layout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
function App({ children }) {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Layout {...children}>
            <BaseRouter />
          </Layout>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
