const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/api/courses', upload.fields([{ name: 'pdf' }, { name: 'video' }]), (req, res) => {
  const { title, description } = req.body;
  const pdfFile = req.files.pdf ? req.files.pdf[0].filename : null;
  const videoFile = req.files.video ? req.files.video[0].filename : null;

  
  console.log({ title, description, pdfFile, videoFile });

  res.status(200).send('Cours publié avec succès');
});

app.listen(5000, () => console.log('Serveur en marche sur le port 5000'));
