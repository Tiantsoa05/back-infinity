
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function choisirProf(req, res) {
  const { id_etudiant, id_professeur } = req.body;

  try {
    
    const apprenant = await prisma.etudiant.findUnique({ where: { id: id_etudiant } });

    
    const prof = await prisma.professeur.findUnique({
      where: { id: id_professeur },
      include: {
        groupe: {
          include: { niveau: true }
        }
      }
    });

    if (!apprenant || !prof) {
      return res.status(404).json({ error: 'Étudiant ou professeur introuvable' });
    }

   
    const grp = teacher.groupe.find(g => g.niveau.id === student.id_niveau);

    if (!grp) {
      return res.status(404).json({ error: 'Groupe de discussion introuvable pour votre niveau' });
    }

    await prisma.etudiant.update({
      where: { id: apprenant.id },
      data: {
        id_professeur: prof.id,
        id_groupe: grp.id
      }
    });

    await prisma.groupe.update({
      where: { id: grp.id },
      data: {
        etudiant: {
          connect: { id: apprenant.id }
        }
      }
    });

    res.json({ message: 'Ajout reussi !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
