import React, { useState } from 'react';

function Login() {
  const [nameUser, setUsername] = useState('');
  const [mdp, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!nameUser || !mdp) {
      setError('remplir les champs');
      return;
    }

    try {
      
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nameUser, mdp })
      });

      if (response.ok) {
        
        alert('VOus etes bien connecter');
      } else {
        setError('Nom d’utilisateur ou mot de passe incorrect');
      }
    } catch (error) {
      setError('verifier la connexion');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d’utilisateur :</label>
          <input
            type="text"
            value={nameUser}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={mdp}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
