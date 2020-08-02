import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email
        };

        try {
            const response = await api.post('users', data);

            alert(`Seu ID de acesso: ${response.data.id}\n Também foi enviado para seu email.`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome de usuário"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder=" E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}