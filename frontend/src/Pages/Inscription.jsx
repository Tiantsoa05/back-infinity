import React, { useState } from "react";
import "../Styles/Inscription.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const InscriForm = () => {
  const [Nom, setNom] = useState("");
  const [Prenoms, setPrenoms] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setPassword] = useState("");
  const [comdp, setConfirmPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mdp !== comdp) {
      setErreur("Les mots de passe ne correspondent pas !");
      return;
    }

    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Nom, Prenoms, email, mdp }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Inscription réussie !");
        } else {
          setErreur("Une erreur s'est produite. Veuillez réessayer.");
        }
      })
      .catch((erreur) => {
        setErreur("Erreur de connexion. Veuillez réessayer.");
      });
  };

  return (
    <div className="container-fluid inscrire">
      <div className="illustrations">
        <img src={logo} alt="Logo" />
      </div>
      <div className="InscriForm">
        <div className="titre">
          <h2>Inscrivez-vous </h2>
        </div>
        {erreur && <p style={{ color: "red" }}>{erreur}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            NOM:
            <input
              type="text"
              value={Nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            PRENOM(S):
            <input
              type="text"
              value={Prenoms}
              onChange={(e) => setPrenoms(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          </label>{" "}
          <br />
          <label>
            Confirmer votre mot de passe:
            <input
              type="password"
              value={comdp}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <Link to={"/home"}>
            <button type="submit">S'inscrire</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default InscriForm;
