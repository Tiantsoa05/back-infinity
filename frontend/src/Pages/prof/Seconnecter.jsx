import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SeConnecter() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    
    if (email === 'raso@gmail.com' && password === '123456') {
      navigate('/dashboard'); 
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="se_connecter ">
      <h2>Se Connecter</h2>
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Connexion</button>
      </form>

      <div className="login-options">
        <p>
          <a href="/forgot-password">Mot de passe oublié ?</a>
        </p>
        <p>
          Pas de compte ? <a href="/signup">Créer un compte</a>
        </p>
      </div>
    </div>
  );
}

export default SeConnecter;
