import { EventOutlined } from "@material-ui/icons";
import { useState } from "react";

import "./App.css";



function App() {

  const [endereco, setEndereco] = useState({});

    function manipulaEndereco(evento) {
      setEndereco({
        cep: evento.target.value
      })
        if (endereco.cep && endereco.cep.length === 8) { // se endereço existir (&&) e tiver o tamanho(length) = 8
          fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`) //retiramos o cep dos correios e substituimos por template string
          .then(resposta => resposta.json()) //se a promessa der certo, teremos a resposta em json
          .then(dados => {
            setEndereco(dados{
              "rua": dados.logradouro,
              "bairro": dados.bairro,
              "cidade": dados.localidade,
              "estado":dados.uf,

            }

            );
          })
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Digite o cep" onChange={manipulaEndereco}/> //passa o onChange para dentro de uma função
      <ul>
        <li>CEP: {endereco.cep}</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
