import React, { useState } from 'react';

const FormPayement = () => {
  
  const [nomComplet, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isTermsAccepted) {
      alert("Veuillez accepter les conditions générales.");
      return;
    }

    setTimeout(() => {
      alert('Paiement effectué avec succès!');
      setPaymentSuccess(true);
    }, 1000);
  };

  return (
    <div>
      <h2>Acheter le droit de publication</h2>
      {paymentSuccess ? (
        <p>Merci pour votre achat ! Vous pouvez maintenant publier des cours.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nomComplet">Nom Complet</label>
            <input
              type="text"
              id="nomComplet"
              value={nomComplet}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="mdp">Mot de Passe</label>
            <input
              type="password"
              id="mdp"
              value={mdp}
              onChange={(e) => setMdp(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="subscriptionType">Type d'abonnement</label>
            <select
              id="subscriptionType"
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
              required
            >
              <option value="">-- Sélectionnez un abonnement --</option>
              <option value="monthly">Mensuel</option>
              <option value="yearly">Annuel</option>
            </select>
          </div>

         

          <div>
            <label>
              <input
                type="checkbox"
                checked={isTermsAccepted}
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                required
              />
              J'accepte les conditions générales
            </label>
          </div>

          <button type="submit">Payer </button>
          <br />
          <br />
          <button type="submit">confirmer</button>
        </form>
      )}
    </div>
  );
};

export default FormPayement;
