function Titulo() {
  const nombre = "Viviana";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola mundo</h1>;
}
export default Titulo;
