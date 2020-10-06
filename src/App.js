import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/main/Home";
import TravelsList from "./components/travels/TravelsList";

function App() {
  return (
    <Router>
      {/* Componentes que deben cargar en la parte superior */}
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/travels" render={() => (
            <div>
              <TravelsList
                
              ></TravelsList>
              {/*  */}
            </div>
          )}
        ></Route>

      </Switch>
      {/* Componentes que deben cargar en la parte inferior */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
