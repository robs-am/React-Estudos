import { React, useEffect, useState } from "react";


function ListaDeRepositorios() {
  const [repositorio, setRepositorio] = useState([]);
  //conseguir armazená-los em uma lista e depois exibi-los em tela
  {
    useEffect(() => {
      async function carregaRepositorios() {
        const resposta = await fetch(
          "https://api.github.com/users/robs-am/repos"
        );
        const repositorios = await resposta.json();
        setRepositorio(repositorios);
      }
      carregaRepositorios();
    }, []);
  }
  return (
    <>
      <ul>
        {repositorio.map((repositorio) => (
          <li key={repositorio.id}> {repositorio.name} </li>
        ))}
      </ul>
    </>
  );
}

export default ListaDeRepositorios;
