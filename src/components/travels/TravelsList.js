import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Table from 'react-bootstrap/Table'
import TravelRow from "./TravelRow";

const travelsList = (props) => {
  return (
    <section className="container my-4">
      <h1 className="display-4 text-center my-4">Lista de viajes realizados</h1>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Dia y hora</th>
            <th>Punto de inicio</th>
            <th>Punto de termino</th>
            <th>Km recorridos</th>
            <th>Medio de transporte</th>
            <th>Trayectoria</th>
            <th>KgCO2 por persona</th>
          </tr>
        </thead>
        <tbody>
        {props.listOfTravels.map((travel, index) => (
          <TravelRow
            key={travel._id}
            travel={travel}
            indexTravel={index+1}
            setRechargeTravels={props.setRechargeTravels}
          ></TravelRow>
        ))}
        </tbody>
      </Table>
    </section>
  );
};

export default travelsList;
