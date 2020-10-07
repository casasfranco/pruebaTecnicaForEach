import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { url as dataBaseUrl } from "../../database";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const TravelRow = (props) => {
  const deleteTravel = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Esta seguro de eliminar el viaje?",
      text: "No puedes recuperar un viaje eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.value) {
        //Elimino el producto
        //Recargar la lista de productos
        props.setRechargeTravels(true);
        // try {
        //   const resultado = await fetch(
        //     dataBaseUrl+id,
        //     {
        //       method: "DELETE",
        //       headers: {
        //         "Content-type": "application/json",
        //       },
        //     }
        //   );
        //   console.log(resultado);
        //   if (resultado.status === 200) {
        //     Swal.fire(
        //       "Viaje eliminado!",
        //       "Su viaje fue correctamente eliminado.",
        //       "success"
        //     );
        //   }

        //   //Recargar la lista de productos
        //   props.setRechargeTravels(true);
        // } catch (error) {
        //   console.log(error);
        // }
      }
    });
  };

  return (
    <Fragment>
      <tr>
        <td>{props.indexTravel}</td>
        {/* <td>{props.travel.}</td> */}
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      </Fragment>
    //   <ListGroup.Item className="d-flex justify-content-between">
    //     <p>
    //       {props.}
    //       <span className="ml-1">$ 1234215</span>
    //     </p>
    //     <div>
    //       <Link
    //         className="btn btn-warning"
    //       //   to={`/productos/editar/${props.product._id}`}
    //       >
    //         <FontAwesomeIcon icon={faEdit} />
    //       </Link>
    //       <Button
    //         variant="danger"
    //       //   onClick={() => eliminarProducto(props.product._id)}
    //       >
    //         <FontAwesomeIcon icon={faTrash} />
    //       </Button>
    //     </div>
    //     {/* <p>
    //       {props.product.nombreProd}
    //       <span className="ml-1">$ {props.product.precioProd}</span>
    //     </p>
    //     <div>
    //       <Link
    //         className="btn btn-warning"
    //         to={`/productos/editar/${props.product._id}`}
    //       >
    //         <FontAwesomeIcon icon={faEdit} />
    //       </Link>
    //       <Button
    //         variant="danger"
    //         onClick={() => eliminarProducto(props.product._id)}
    //       >
    //         <FontAwesomeIcon icon={faTrash} />
    //       </Button>
    //     </div> */}
    //   </ListGroup.Item>
  );
};

export default TravelRow;
