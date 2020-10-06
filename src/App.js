import React, { useState, useEffect } from "react";
import './App.css';
import "./bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      {/* Componentes que deben cargar en la parte superior */}
      
      <Switch>

      </Switch>
      {/* Componentes que deben cargar en la parte inferior */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
