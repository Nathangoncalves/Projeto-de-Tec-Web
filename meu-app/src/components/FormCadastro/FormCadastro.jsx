import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './FormCadastro.css'; 

const FormCadastro = () => {
  const { adicionarItem } = useContext(GlobalContext);

  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    telefone: '',
  });
  const [erros, setErros] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(v => ({ ...v, [name]: value }));
  };

  const validarCampos = () => {
    const newErros = {};
    if (!formValues.nome) newErros.nome = 'Nome obrigatório';
    if (!formValues.email) newErros.email = 'Email obrigatório';
    if (!formValues.telefone) newErros.telefone = 'Telefone obrigatório';
    return newErros;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const v = validarCampos();
    if (Object.keys(v).length) {
      setErros(v);
      return;
    }
    adicionarItem(formValues);
    setFormValues({ nome: '', email: '', telefone: '' });
    setErros({});
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Campo Nome */}
        <div className="campo-form">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="nome"
            value={formValues.nome}
            onChange={handleChange}
          />
          {erros.nome && <span className="erro">{erros.nome}</span>}
        </div>

        {/* Campo Email */}
        <div className="campo-form">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {erros.email && <span className="erro">{erros.email}</span>}
        </div>

        {/* Campo Telefone */}
        <div className="campo-form">
          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            value={formValues.telefone}
            onChange={handleChange}
          />
          {erros.telefone && <span className="erro">{erros.telefone}</span>}
        </div>

        <button type="submit" className="btn-submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormCadastro;
