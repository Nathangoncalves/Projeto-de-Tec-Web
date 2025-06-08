import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './ListaItens.css';

const ListaItens = () => {
  const { state } = useContext(GlobalContext);
  const { itens, carregando, erro } = state;

  if (carregando) return <p>Carregando itens...</p>;
  if (erro) return <p>Ocorreu um erro ao carregar: {erro.message}</p>;
  if (!Array.isArray(itens)) return <p>Formato de dados inválido.</p>;
  if (itens.length === 0) return <p>Nenhum item cadastrado ainda.</p>;

  return (
    <div className="lista-container">
      <h2>Lista de Itens</h2>
      <ul className="lista-itens">
        {itens.map(item => (
          <li key={item.id} className="item">
            <strong>Nome:</strong> {item.nome} <br />
            <strong>Email:</strong> {item.email} <br />
            <strong>Telefone:</strong> {item.telefone} <br />
            <strong>CEP:</strong> {item.cep} <br />
            <strong>Logradouro:</strong> {item.logradouro} <br />
            <strong>Cidade:</strong> {item.cidade} <br />
            <strong>Estado:</strong> {item.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;
