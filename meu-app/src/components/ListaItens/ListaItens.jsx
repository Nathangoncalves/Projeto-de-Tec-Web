import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext';
import './ListaItens.css';

const ListaItens = () => {
  const { state } = useContext(GlobalContext);
  const { itens, carregando, erro } = state;

  if (carregando) {
    return <p>Carregando itens...</p>;
  }

  if (erro) {
    return <p>Ocorreu um erro ao carregar: {erro.message}</p>;
  }

  // Garante que `itens` seja um array antes de usá-lo
  if (!Array.isArray(itens)) {
    return <p>Não foi possível carregar a lista. Dados inválidos.</p>;
  }

  if (itens.length === 0) {
    return <p>Nenhum item cadastrado ainda.</p>;
  }

  return (
    <div className="lista-container">
      <h2>Lista de Itens</h2>
      <ul className="lista-itens">
        {itens.map((item) => (
          <li key={item.id} className="item">
            <strong>Nome:</strong> {item.nome} <br />
            <strong>Email:</strong> {item.email} <br />
            <strong>Telefone:</strong> {item.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;
