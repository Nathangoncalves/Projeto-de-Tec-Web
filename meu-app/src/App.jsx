import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/listagem" element={<Listagem />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;