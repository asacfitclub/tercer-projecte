import React,{useState} from "react";
import "./App.css";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);

  const modificar = (e) => {
    const nuevaCantidad = e.target.value;
    setCantidad(nuevaCantidad);
    setResultado1(nuevaCantidad*cambios[1].cambio);
    setResultado2(nuevaCantidad*cambios[2].cambio);
    setResultado3(nuevaCantidad*cambios[3].cambio);
    setResultado4(nuevaCantidad*cambios[4].cambio);
  };

  return (
    <>
      <div className="caja">
          <label htmlFor="u0">{cambios[0].moneda}</label>
          <input value={cantidad} onChange={modificar} id="u0" type="number"/> 

          <label htmlFor="u1">{cambios[1].moneda}</label>
          <input value={resultado1} id="u1" type="number" readOnly/> 

          <label htmlFor="u2">{cambios[2].moneda}</label>
          <input value={resultado2} id="u2" type="number" readOnly/> 

          <label htmlFor="u3">{cambios[3].moneda}</label>
          <input value={resultado3} id="u3" type="number" readOnly/> 

          <label htmlFor="u4">{cambios[4].moneda}</label>
          <input value={resultado4} id="u4" type="number" readOnly/> 
      </div>
    </>
  )
}

export default App;