import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './Cadastro.css';

const Cadastro = () => {
    const { adicionarItem } = useContext(GlobalContext);

    const [formValues, setFormValues] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    const [erros, setErros] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    function validarCampos() {
        const novosErros = {};
        if (!formValues.nome.trim()) novosErros.nome = 'Nome é obrigatório';
        if (!formValues.email.trim()) {
            novosErros.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            novosErros.email = 'Email inváido';
        }
        if (!formValues.telefone.trim()) {
            novosErros.telefone = 'Telefone é obrigatório';
        } else if (!/ˆ\d{10,11}$/.test(formValues.telefone)) {
            novosErros.telefone = 'Telefone deve ter 10 ou 11 dígitos';
        }
        return novosErros;
    }

    function handleSubtmit(e) {
        e.preventDefault();
        const validacoes = validarCampos();
        if (Object.keys(validacoes).length > 0) {
            setErros(validacoes);
            return;
        }

        adicionarItem(formValues);
        setFormValues({ nome: '', email: '', telefone: '' });
        setErros({});
    }

    return (
        <div className="container-cadastro">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubtmit} noValidate>
                <div className="campo-form">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome" 
                        value={formValues.nome}
                        onChange={handleChange}
                    />
                    {erros.nome && <span className="erro">{erros.nome}</span>}
                </div>

                <div className="campo-formm"> 
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formValues.telefone}
                        onChange={handleChange}
                    />
                    {erros.telefone && <span className="error">{erros.telefone}</span>}
                </div>

                <button type="submit" className="btn-submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Cadastro;
