import { useState } from "react";

import "./App.css";

const [cep, setCep] = useState("");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Digite o cep" onChange={evento => setCep(evento.target.value)}/>
      </header>
    </div>
  );
}

export default App;
