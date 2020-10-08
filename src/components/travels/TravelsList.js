import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import TravelRow from "./TravelRow";

const travelsList = (props) => {
  return (
    <Fragment>
        <div className="jumbotron">
          <h1 className="display-4 font-weight-lighter text-center">
            Lista de viajes realizados
          </h1>
        </div>

      <section className="container my-4">
        <Table responsive bordered hover>
          <thead>
            <tr className="table-info">
              <th className="align-middle">#</th>
              <th className="align-middle">Dia y hora</th>
              <th className="align-middle">Punto de inicio</th>
              <th className="align-middle">Punto de termino</th>
              <th className="align-middle">Km recorridos</th>
              <th className="align-middle">Medio de transporte</th>
              <th className="align-middle">Nº de viajeros</th>
              <th className="align-middle">Solo ida?</th>
              <th className="align-middle">KgCO2 por persona</th>
            </tr>
          </thead>
          <tbody>
            {props.listOfTravels.map((travel, index) => (
              <TravelRow
                key={travel._id}
                travel={travel}
                indexTravel={index + 1}
                setRechargeTravels={props.setRechargeTravels}
              ></TravelRow>
            ))}
          </tbody>
        </Table>
      </section>
    </Fragment>
  );
};

export default travelsList;
