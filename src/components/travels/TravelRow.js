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
  //Cree esta funcion para eliminar un viaje en caso de ser necesario. (no la utilizo en un principio)
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
  console.log("Valor obtenido: " + props.travel.listOfPersonsSelected);
  return (
    <Fragment>
      <tr>
        <td className="align-middle">{props.indexTravel}</td>
        <td className="align-middle">{props.travel.dateTimeTravel}</td>
        <td className="align-middle">{props.travel.departureAddress}</td>
        <td className="align-middle">{props.travel.arrivalAddress}</td>
        <td className="align-middle">{props.travel.distance}</td>
        <td className="align-middle">{props.travel.conveyance}</td>
        <td className="align-middle">{props.travel.listOfPersonsSelected.length}</td>
        <td className="align-middle">{props.travel.typeOfTrip}</td>
        <td className="align-middle">{props.travel.kgCO2PerPerson}</td>
      </tr>
    </Fragment>
  );
};

export default TravelRow;
