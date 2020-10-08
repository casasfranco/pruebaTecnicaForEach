//Aqui hago los calculos necesarios para determinar la huella de carbono

/** function CO2FootPrint(y, d, t) explicacion de parametros que espera recibir
 * Y --> KgCo2/Km
 * d --> Distancia
 * t --> tramos (1: ida, 2: ida y vuelta) 
 **/
export function CO2FootPrint(y, d, t) {
  return (y*d*t).toFixed(2);
}
