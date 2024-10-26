import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RoutesConfig from "./routes";
import AppNavbar from "./components/layout/navbar/AppNavbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const Main = () => {
  return (
    <div className="App">
      <AppNavbar />
      <main>
        <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
};

export default App;
