import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar una pag

const TravelAdd = () => {
  //States
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const [listOfPersonsSelected, setListOfPersonsSelected] = useState([]);
  const [typeOfTrip, setTypeOfTrip] = useState("");
  const [distance, setDistance] = useState(0);
  const [conveyance, setConveyance] = useState("");
  const [arrivalAddress, setArrivalAddress] = useState("");
  const [departureAddress, setDepartureAddress] = useState("");

  const [error, setError] = useState(false);

  const checkNumberOfPersons = (e) => {
    if (e.target.value != "") {
      setNumberOfPersons(parseInt(e.target.value));
    } else {
      setNumberOfPersons(1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validación de los campos
    if (
      numberOfPersons < 1 ||
      arrivalAddress.trim() === "" ||
      departureAddress.trim() === ""
    ) {
      //mostrar un cartel de error
      setError(true);
      return;
    }

    setError(false);

    //Agregar nuevo viaje

    const data = {
      typeOfTrip,
      conveyance,
      arrivalAddress,
      departureAddress,
      listOfPersonsSelected,
    };

    // try {
    //   const cabecera = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   };

    //   const resultado = await fetch(
    //     "https://backendcafeteria.herokuapp.com/api/cafeteria",
    //     cabecera
    //   );
    //   console.log(resultado);
    //   //Compruebo la respuesta
    //   if (resultado.status === 201) {
    //     Swal.fire(
    //       "Producto creado",
    //       "El producto se creo correctamente",
    //       "success"
    //     );
    //   }

    //   //Recargar la API de produtos
    //   props.setRecargarProductos(true);

    //   //redirecciona
    //   props.history.push("/productos");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4 font-weight-lighter text-center">Agregar nuevo viaje</h1>
        </div>
    
    <Container className="d-flex justify-content-center">
      <Form className="w-75 mb-5" onSubmit={handleSubmit}>

      <h1 className="display-4 font-weight-light text-center">Agregar nuevo viaje</h1>

        {error ? (
          <Alert variant={"danger"}>
            Ops!! Todos los campos son obligatorios.
          </Alert>
        ) : null}

        <div className="row mt-5 mb-2 justify-content-between align-items-center">
          <div className="col-sm-12 col-md-2">
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-muted">Nº pasajeros</Form.Label>
              <Form.Control
                type="number"
                placeholder="2"
                onChange={checkNumberOfPersons}
                defaultValue="1"
                min={1}
                name="numberOfPersons"
              />
            </Form.Group>
          </div>

          <div className="col-sm-12 col-md-3">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="text-muted">
                Seleccione un trayecto
              </Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setTypeOfTrip(e.target.value)}
              >
                <option>Ida</option>
                <option>Vuelta</option>
                <option>Ida y vuelta</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="col-sm-12 col-md-2">
          <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-muted">Distancia (km)</Form.Label>
              <Form.Control
                type="number"
                placeholder="20"
                step="any"
                defaultValue="1"
                min={1}
                name="distance"
              />
            </Form.Group>
          </div>

          <div className="col-sm-12 col-md-5">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="text-muted">
                Seleccione un transporte
              </Form.Label>
              <Form.Control
                as="select"
                defaultValue="valor por defecto, buscar por props"
                onChange={(e) => setConveyance(e.target.value)}
              >
                <option>Metro (Tren, Subway, Subterráneo)</option>
                <option>Auto (Gasolina)</option>
                <option>Camioneta (Diésel)</option>
                <option>Motocicleta (Gasolina)</option>
                <option>Bus Transantiago (Transporte público)</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className="row mb-2 justify-content-between align-items-center">
          <div className="col-sm-12 col-md-6">
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-muted">
                Dirección del punto de partida:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: La niña 3175, Las Condes"
                name="departureAddressInput"
                onChange={(e) => setDepartureAddress(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-sm-12 col-md-6">
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-muted">
                Dirección del punto de termino:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Av. Andrés Bello 2425, Providencia"
                name="arrivalAddressInput"
                onChange={(e) => setArrivalAddress(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        {
          <div className="row mb-2 justify-content-between align-items-center">
            {[...Array(numberOfPersons)].map((x, i) => {
              return (
                <div className="col-sm-12" key={i}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="text-muted w-75">
                      Seleccione un empleado
                    </Form.Label>
                    <Form.Control as="select" className="w-75">
                      <option>Franco Casas</option>
                      <option>José Casas</option>
                      <option>Pepito Fulano</option>
                      <option>Fulano Mengano</option>
                      <option>Usuario Prueba</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              );
            })}
          </div>
        }
        <div className="row justify-content-center">
          <Button variant="primary" type="submit" className="w-75 mt-4">
            Agregar
          </Button>
        </div>
      </Form>
    </Container>
    </Fragment>
  );
};

export default withRouter(TravelAdd);
