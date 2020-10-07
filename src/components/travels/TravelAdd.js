import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar una pag

import { url as dataBaseUrl } from "../../database";

import { CO2FootPrint } from '../../helper/calculate'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const TravelAdd = (props) => {
  //States
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const [listOfPersonsSelected, setListOfPersonsSelected] = useState([]);
  const [typeOfTrip, setTypeOfTrip] = useState("");
  const [distance, setDistance] = useState(0);
  const [conveyance, setConveyance] = useState("");
  const [arrivalAddress, setArrivalAddress] = useState("");
  const [departureAddress, setDepartureAddress] = useState("");
  const [kgCO2PerPerson, setKgCO2PerPerson] = useState("");
  const [dateTimeTravel, setDateTimeTravel] = useState(Date.now());

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
      listOfPersonsSelected.length < numberOfPersons ||
      arrivalAddress.trim() === "" ||
      departureAddress.trim() === "" ||
      kgCO2PerPerson === "" ||
      dateTimeTravel === ""
    ) {
      //mostrar un cartel de error
      setError(true);
      return;
    }

    //VALIDAR QUE NO SE INGRESE EL MISMO EMPLEADO
    //Podria simpemente preguntar si coincide algun id dentro del arreglo listOfPersonsSelected
    //Tambien podria filtrar el arreglo cada vez que se selecciona una persona por ej:
    //Si se seleccionó "Franco Casas" en el primer select, el proximo tendria que tener
    //todas las opciones menos la anteriormente seleccionada

    setError(false);


    //Agregar nuevo viaje
    const data = {
      typeOfTrip,
      conveyance,
      distance,
      arrivalAddress,
      departureAddress,
      listOfPersonsSelected,
      kgCO2PerPerson: CO2FootPrint(kgCO2PerPerson, distance, typeOfTrip),
      dateTimeTravel,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const resultado = await fetch(
        dataBaseUrl,
        cabecera
      );
      console.log(resultado);
      //Compruebo la respuesta
      if (resultado.status === 201) {
        Swal.fire(
          "Viaje creado",
          "El viaje se creo correctamente",
          "success"
        );
      }

      //Recargar la API de produtos
      props.setRechargeTravels(true);

      //redirecciona
      props.history.push("/travels");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4 font-weight-lighter text-center">
          Agregar nuevo viaje
        </h1>
      </div>

      <Container className="d-flex justify-content-center">
        <Form className="w-75 mb-5" onSubmit={handleSubmit}>
          {error ? (
            <Alert variant={"danger"}>
              Ops!! Todos los campos son obligatorios.
            </Alert>
          ) : null}

          <div className="row mt-3 mb-2 justify-content-between align-items-center">
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
                  <option value="0">Seleccio...</option>
                  <option value="1">Ida</option>
                  <option value="1">Vuelta</option>
                  <option value="2">Ida y vuelta</option>
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
                  defaultValue="0"
                  min={1}
                  onChange={(e) => setDistance(parseFloat(e.target.value))}
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
                  onChange={(e) => {
                    //Guardo el medio de transporte (objeto completo) que coincida con el value y el id

                    setConveyance(
                      Array.from(props.listOfConveyance).find((value) => {
                        if (e.target.value === value._id) {
                          setKgCO2PerPerson(value.fECO2);
                        }
                        return e.target.value === value._id;
                      })
                    );
                  }}
                >
                  <option>Seleccione una opc...</option>
                  {Array.from(props.listOfConveyance).map((aux) => (
                    <option key={aux._id} value={aux._id}>
                      {aux.name}
                    </option>
                  ))}
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
              {/* <DatePicker
                selected={dateTimeTravel}
                onChange={(e) => setDateTimeTravel(e.target.value)}
              /> */}

              {[...Array(numberOfPersons)].map((x, i) => {
                return (
                  <div className="col-sm-12" key={i}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label className="text-muted w-75">
                        Seleccione un empleado
                      </Form.Label>
                      <Form.Control
                        as="select"
                        className="w-75"
                        onChange={
                          (e) => {
                            let array = listOfPersonsSelected;
                            array.push(e.target.value);
                            console.log(array);
                            setListOfPersonsSelected(array);
                            console.log(listOfPersonsSelected);
                          }

                          // setListOfPersonsSelected()
                        }
                      >
                        <option>Seleccione una opc...</option>
                        {Array.from(props.listOfPersons).map((person) => (
                          <option key={person._id} value={person._id}>
                            {person.name + " " + person.lastName}
                          </option>
                        ))}
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
