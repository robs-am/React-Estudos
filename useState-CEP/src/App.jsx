
import {useState} from "react";
import './App.css'

function App() {
  
  const [nome, setNome] = useState("Roberta")

  function alterarNome() {
    setNome ("Roberta Amaro")
  }
  return (
    <div className="App">
      
        <header>
        <h1>
          {nome}
        </h1>
        <button onClick={alterarNome}>Mudar nome</button>
        </header>
    </div>
  )
}

export default App
