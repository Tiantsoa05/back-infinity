import React, { useState } from 'react';

const Cours = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [fichierpdf, setPdf] = useState(null);
  const [videofichier, setVideo]= useState(null);

  const handleFileUpload = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (fichierpdf) formData.append('pdf', fichierpdf);
    if (videofichier) formData.append('video', videofichier);

    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Cours ajouté avec succès !');
      } else {
        alert('Une erreur est survenue.');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input 
          type="text" 
          value={titre} 
          onChange={(e) => setTitre(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Fichier PDF :</label>
        <input 
          type="file" 
          accept=".pdf" 
          onChange={(e) => handleFileUpload(e, setPdf)} 
        />
      </div>
      <div>
        <label>Vidéo :</label>
        <input 
          type="file" 
          accept="video/*" 
          onChange={(e) => handleFileUpload(e, setVideo)} 
        />
      </div>
      <br />
      <br />
      <button type="submit">Publier le cours</button>
    </form>
  );
};

export default Cours;
