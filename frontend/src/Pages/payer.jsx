import React, { useState } from 'react';
import '../Styles/payer.css';
const Payer = () => {
    const [numero, setNumero] = useState('');
    const [montant, setMontant] = useState('');
    const [erreur, setErreur] = useState('');
    const [mdp, setMdp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (montant <= 0) {
            setErreur("Verifier le montant ");
            return;
        }

        fetch('/api/payer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numero, montant })
        })
        .then((response) => {
            if (response.ok) {
                alert("Paiement réussi !");
                    return response.json(); 
                } else {
                    throw new Error("Le paiement a échoué. Veuillez réessayer.");
                }
            })
            .catch((erreur) => {
                setErreur("Erreur de connexion. Veuillez réessayer.");
              });
            };
            return (
                <div className="Payer">
                    <h2>PAYER POUR suivre ce prof</h2>
                    {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>
                          Entrer votre numero 
                            <input
                                type="text"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                required
                            />
                        </label><br />
                        <label>
                            Montant :
                            <input
                                type="number"
                                value={montant}
                                onChange={(e) => setMontant(e.target.value)}
                                required
                            />
                        </label>
                        <br />  
                        <label>
                                Mot de passe:
                        <input
                            type="password"
                            value={mdp}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                        </label> <br />
                        <button type="submit">Payer</button>
                    </form>
                </div>
            );
        };  

export default Payer;