import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { url as dataBaseUrl } from "./database";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/main/Home";
import TravelsList from "./components/travels/TravelsList";
import TravelAdd from "./components/travels/TravelAdd";

function App() {
  const [rechargeTravels, setRechargeTravels] = useState(true);
  const [listOfTravels, setListOfTravels] = useState([]);

  const [
    rechargePersonsAndConveyance,
    setRechargePersonsAndConveyance,
  ] = useState(true);
  const [listOfPersons, setListOfPersons] = useState("");
  const [listOfConveyance, setListOfConveyance] = useState("");

  useEffect(() => {
    if (rechargeTravels) {
      callAPI();
      setRechargeTravels(false);
    }
    //La condicion que se encuentra debajo forma parte del problema que renderiza 2 veces extras al path tralvels/
    if (rechargePersonsAndConveyance) {
      getPersonsAndConveyanceAPI();
      setRechargePersonsAndConveyance(false);
    }
  }, [rechargeTravels, rechargePersonsAndConveyance]);


  const callAPI = async () => {
    try {
      const response = await fetch(dataBaseUrl);
      const result = await response.json();
      setListOfTravels(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getPersonsAndConveyanceAPI = async () => {
    try {
      const response = await fetch(dataBaseUrl + "person/");
      const result = await response.json();
      setListOfPersons(result);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch(dataBaseUrl + "conveyance/");
      const result = await response.json();
      setListOfConveyance(result);
    } catch (error) {
      console.log(error);
    }
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
          render={ () => (
            <TravelsList
              listOfTravels={listOfTravels}
              setRechargeTravels={setRechargeTravels}
            ></TravelsList>
          )}
        ></Route>

        <Route
          exact
          path="/travels/new"
          render={() => (
          <TravelAdd
          setRechargeTravels={setRechargeTravels}
          listOfPersons={listOfPersons}
          listOfConveyance={listOfConveyance}
          ></TravelAdd>
          )}
        ></Route>
      </Switch>
      {/* Componentes que deben cargar en la parte inferior */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
