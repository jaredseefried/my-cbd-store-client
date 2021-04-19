import React from "react";
import Navigation from './components/NavBar/Navigation'
import "./App.css";

import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;