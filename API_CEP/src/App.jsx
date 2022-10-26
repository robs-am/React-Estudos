import { useState } from "react";

import "./App.css";

function App() {
  const [endereco, setEndereco] = useState({});

  function manipulaEndereco(evento) {
    const cep = evento.target.value;

    setEndereco({
      cep,
    });

    //condicional e fetch API que buscará as informações do CEP//

    if (cep && cep.length === 8) {
      // se endereço existir (&&) e tiver o tamanho(length) = 8
      fetch(`https://viacep.com.br/ws/${cep}/json/`) //retiramos o cep dos correios e substituimos por template string
        .then((resposta) => resposta.json()) //se a promessa der certo, teremos a resposta em json
        .then((dados) => {
          setEndereco({
            cep: cep,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
          });
        });
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        
        <input placeholder="Digite o cep" onChange={manipulaEndereco} />

        <ul>
          <li>CEP: {endereco.cep}</li>

          <li>Bairro: {endereco.bairro}</li>
          <li>Cidade: {endereco.cidade}</li>
          <li>Estado: {endereco.estado}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
