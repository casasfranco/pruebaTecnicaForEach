import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/main/Home";
import TravelsList from "./components/travels/TravelsList";
import TravelAdd from "./components/travels/TravelAdd";

function App() {

  const [listOfPersons, setListOfPersons] = useState(
    "trabajadores. Cargar lista desde DB"
  );
  const [listOfConveyance, setListOfConveyance] = useState(
    "medio de transporte. Cargar lista desde DB"
  )
  const [productosAPI, setProductosAPI] = useState([]);


  const callAPI = async () => {
    // try {
    //   const respuesta = await fetch(
    //     `url`
    //   );
    //   const resultado = await respuesta.json();
    //   console.log(resultado);
    // } catch (error) {
    //   console.log(error);
    // }
  };


  return (
    <Router>
      {/* Componentes que deben cargar en la parte superior */}
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route
          exact
          path="/travels"
          render={() => (
            <div>
              <TravelsList
              // productosAPI={productosAPI}
              // setRecargarProductos={setRecargarProductos}
              ></TravelsList>
              {/*  */}
            </div>
          )}
        ></Route>

        <Route exact path="/travels/new">
          <TravelAdd 
          // setRecargarProductos={setRecargarProductos}
          >
          </TravelAdd>
        </Route>
      </Switch>
      {/* Componentes que deben cargar en la parte inferior */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
