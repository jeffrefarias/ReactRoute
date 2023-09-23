import { useState } from "react";
import Alert from "./Alert";
import Menu from "./Menu";
import Container from 'react-bootstrap/Container';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);



  const [successMessage, setSuccessMessage] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault()
    setSuccessMessage(false);
    setError(false);
    setErrorEmail(false);



    if (!nombre || !email) {
      setError(true);
      return;
    }


    if (!validarEmail(email)) {
      setErrorEmail(true);
      return;
    }

    setNombre("");
    setEmail("");
    setSuccessMessage(true);
  }


  // Expresión regular para email 
  const validarEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };



  return (
    <>
      <div>
        <Menu />
        <Container className=''>
         <div className="text-center mt-5">
         <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
         </div>
         <div className="mt-5">
         <form className="formulario" onSubmit={validarDatos}>
            <div className="row form-group d-flex mt-3">
              <div className="col">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                  autoComplete="off"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className=" row form-group d-flex mt-3">
              <div className="col">
                <input
                  type="text"
                  name="Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>
            </div>
            <button type="submit" className="form-control btn btn-danger mt-3">Enviar Consulta</button>
            <div className="mt-3">
              {error ? <Alert message="Todos los campos son obligatorios" type="danger" show={error} /> : null}
              {errorEmail ? <Alert message="Debe ingresar un email válido" type="danger" show={email} /> : null}
              {successMessage ? <Alert message="Gracias por tu Solicitud, nos pondremos en contacto lo antes posible" type="success" show={successMessage} /> : null}
            </div>
          </form >
         </div>
        </Container>
      </div>




    </>
  );
};

export default Formulario;
