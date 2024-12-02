const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.post('/api/payer', async (req, res) => {
    const { numero, montant, mdp } = req.body;

   
    if (!numero || !montant || montant <= 0 || !mdp) {
        return res.status(400).json({ error: 'Veuillez fournir des données valides.' });
    }

    try {
      
        const student = await prisma.student.findUnique({
            where: { numero: numero }
        });

        if (!student) {
            return res.status(404).json({ error: "Étudiant introuvable avec ce numéro." });
        }

        const payment = await prisma.payment.create({
            data: {
                studentId: student.id,
                amount: parseFloat(montant),
                date: new Date(),
                status: 'success', 
            },
        });

      
        res.status(200).json({ message: "Paiement réussi.", payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors du traitement du paiement." });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
