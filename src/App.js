import React, { useState, useEffect } from "react";
import axios from "axios";

function Frase(props) {
  return (
    <div className="frase">
      <h1>{props.frase.quote}</h1>
      <p>--{props.frase.author}</p>
    </div>
  );
}

function App() {
  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await axios(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    console.log(resultado.data[0]);
    // Agregar el sesultado dela API al state
    obtenerFrase(resultado.data[0]);
  };

  // consilta a una rest api
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className="contenedor">
      <Frase frase={frase} />
      <button onClick={consultarAPI}>Generar Nueva</button>
    </div>
  );
}

export default App;
