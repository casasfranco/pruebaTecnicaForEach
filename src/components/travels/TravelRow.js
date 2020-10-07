import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const TravelRow = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        Nombre prod
        <span className="ml-1">$ 1234215</span>
      </p>
      <div>
        <Link
          className="btn btn-warning"
        //   to={`/productos/editar/${props.product._id}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Button
          variant="danger"
        //   onClick={() => eliminarProducto(props.product._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      {/* <p>
        {props.product.nombreProd}
        <span className="ml-1">$ {props.product.precioProd}</span>
      </p>
      <div>
        <Link
          className="btn btn-warning"
          to={`/productos/editar/${props.product._id}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Button
          variant="danger"
          onClick={() => eliminarProducto(props.product._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div> */}
    </ListGroup.Item>
  );
};

export default TravelRow;
