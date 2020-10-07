import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
// import LineaProducto from "./LineaProducto";
import TravelRow from './TravelRow'

const travelsList = () => {
    return (
    <section className="container my-4">
      <h1 className="display-4 text-center my-4">Lista de viajes realizados</h1>
      <ListGroup>
        {/* {props.productosAPI.map((product) => (
          <LineaProducto
            key={product._id}
            product={product}
            setRecargarProductos={props.setRecargarProductos}
          ></LineaProducto>
        ))} */}
        <TravelRow></TravelRow>
      </ListGroup>
    </section>
    );
};

export default travelsList;