import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>Cadastro de Usuários</h1>
        <ul>
            <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/cadastro" className={({ isActive }) => (isActive ? 'active' : '')}>
                Cadastro
                </NavLink>
            </li>
            <li>
                <NavLink to="/listagem" className={({ isActive }) => (isActive ? 'active' : '')}>
                Listagem
                </NavLink>
            </li>
        </ul>
    </nav>

    );
};

export default Navbar;