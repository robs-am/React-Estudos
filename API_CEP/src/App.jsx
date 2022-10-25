import { useState } from "react";

import "./App.css";



function App() {

  const [endereco, setEndereco] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Digite o cep" onChange={evento => setEndereco({cep: evento.target.value})}/>
      <ul>
        <li>CEP: {endereco.cep}</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
