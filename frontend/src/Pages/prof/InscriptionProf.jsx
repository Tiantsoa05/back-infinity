import React, { useState } from 'react';

const InscriptionProf = () => {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenoms: '',
    email: '',
    langue : '',
    password: '',
    confirmPassword: '',
    niveau: '',
    experience: '',
    paymentMethod: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setError('');

   
    console.log('Formulaire soumis avec les données :', formData);

     setFormData({
      Nom: '',
      Prenoms: '',
      email: '',
      langue : '',
      password: '',
      confirmPassword: '',
      niveau: '',
      experience: '',
    });
  };

  return (
    <div className="Inscrire">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Inscription Professeur</h2>

        <label htmlFor="Nom">Entrer votre Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.Nom}
          onChange={handleChange}
          required
          placeholder="entre  votre nom"
        />

       
        <label htmlFor="Prenoms">Entrer votre Prenoms</label>
        <input
          type="text"
          id="Prenoms"
          name="Prenoms"
          value={formData.Prenoms}
          onChange={handleChange}
          required
          placeholder="entre  votre prenoms"
        />

        <label htmlFor="email">Adresse e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="entrer votre adresse e-mail"
        />

        {/* Niveau d'études */}
        <label htmlFor="niveau">Niveau d'études</label>
        <select
          id="niveau"
          name="niveau"
          value={formData.niveau}
          onChange={handleChange}
          required
        >
          <option value="docteur">Docteur</option>
          <option value="master">Master</option>
          <option value="bachelier">Bachelier</option>
          <option value="diplome">Diplome</option>
        </select>

        <label htmlFor="experience">Expérience</label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        >
          <option value="aucune">Aucune</option>
          <option value="moyenne">Moyenne</option>
          <option value="forte">Forte</option>
        </select>

        <label htmlFor="langue">Langue</label>
        <select
          id="langue"
          name="langue"
          value={formData.langue}
          onChange={handleChange}
          required
        />

       
        <label htmlFor="language">Langue enseignée</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        >
          <option value="francais">Français</option>
          <option value="anglais">Anglais</option>
          <option value="espagnol">Espagnol</option>
          <option value="allemand">Allemand</option>
          <option value="malagasy">malagasy</option>
        </select>

      
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Votre mot de passe"
        />

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirmez le mot de passe"
        />

        <label htmlFor="paymentMethod">Agence de paiement</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="paypal">PayPal</option>
          <option value="stripe">Stripe</option>
          <option value="virement-bancaire">Virement bancaire</option>
        </select>

       
        {error && <div className="error-message">{error}</div>}

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default InscriptionProf;
