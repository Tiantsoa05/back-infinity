import express from 'express';
import { choisirProf } from '../controllers/Choisir_profControllers.js';

const router = express.Router();

router.post('/choisir);', choisirProf);

export default router;
