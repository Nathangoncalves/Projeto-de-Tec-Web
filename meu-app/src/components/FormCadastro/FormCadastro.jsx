import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './FormCadastro.css';

const FormCadastro = () => {
  const { adicionarItem } = useContext(GlobalContext);

  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    cidade: '',
    estado: '',
  });
  const [erros, setErros] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(v => ({ ...v, [name]: value }));
  };

  const handleCepBlur = async e => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length !== 8) {
      setErros(errs => ({ ...errs, cep: 'CEP deve ter 8 dígitos' }));
      return;
    }
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) {
        setErros(errs => ({ ...errs, cep: 'CEP não encontrado' }));
        return;
      }
      setFormValues(v => ({
        ...v,
        cep,
        logradouro: data.logradouro,
        cidade: data.localidade,
        estado: data.uf,
      }));
      setErros(errs => ({ ...errs, cep: null }));
    } catch {
      setErros(errs => ({ ...errs, cep: 'Falha ao buscar CEP' }));
    }
  };

  const validarCampos = () => {
    const newErros = {};
    if (!formValues.nome) newErros.nome = 'Nome obrigatório';
    if (!formValues.email) newErros.email = 'Email obrigatório';
    if (!formValues.telefone) newErros.telefone = 'Telefone obrigatório';
    if (!formValues.cep) newErros.cep = 'CEP obrigatório';
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
    setFormValues({
      nome: '',
      email: '',
      telefone: '',
      cep: '',
      logradouro: '',
      cidade: '',
      estado: '',
    });
    setErros({});
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Campos originais */}
        <div className="campo-form">
          <label htmlFor="nome">Nome:</label>
          <input id="nome" name="nome" value={formValues.nome} onChange={handleChange} />
          {erros.nome && <span className="erro">{erros.nome}</span>}
        </div>

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

        {/* Campos de endereço */}
        <div className="campo-form">
          <label htmlFor="cep">CEP:</label>
          <input
            id="cep"
            name="cep"
            value={formValues.cep}
            onChange={handleChange}
            onBlur={handleCepBlur}
            maxLength={8}
          />
          {erros.cep && <span className="erro">{erros.cep}</span>}
        </div>

        <div className="campo-form">
          <label htmlFor="logradouro">Logradouro:</label>
          <input id="logradouro" name="logradouro" value={formValues.logradouro} readOnly />
        </div>

        <div className="campo-form">
          <label htmlFor="cidade">Cidade:</label>
          <input id="cidade" name="cidade" value={formValues.cidade} readOnly />
        </div>

        <div className="campo-form">
          <label htmlFor="estado">Estado:</label>
          <input id="estado" name="estado" value={formValues.estado} readOnly />
        </div>

        <button type="submit" className="btn-submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormCadastro;
