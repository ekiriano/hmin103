const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  EstimationComparaison,
  EstimationReference,
  EstimationCapitalisation
} = require("../../../estimation_methodes/superusermtd");

// Super Validation
const validateSuperBienInput = require("../../../validation/SuperBien");

// Super Model
const SuperBien = require("../../../models/SuperBien");

/**
 * @route   POST /routes/api/estimation/super/bien/save
 * @desc    Estimate super bien and saves it in user account for later use
 * @access  Auth Users
 *
 */
router.post(
  "/bien/save",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSuperBienInput(req.body);
    // Check validation
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const newSuperBien = new SuperBien({
      user: req.user.id,
      nom: req.body.nom,
      prenom: req.body.prenom,
      adressePostale: req.body.ville,
      email: req.body.email,
      voie: req.body.voie,
      codePostal: req.body.codePostal,
      ville: req.body.ville,
      anneeConstruction: req.body.anneeConstruction,
      typeBienAffiche: req.body.typeBienAffiche,
      nombrePieces: req.body.nombrePieces,
      nombreChambres: req.body.nombreChambres,
      surfaceHabitable: req.body.surfaceHabitable,
      surfaceTerrain: req.body.surfaceTerrain,
      nombreNiveaux: req.body.nombreNiveaux,
      ascenseur: req.body.ascenseur,
      balconOuTerrasse: req.body.balconOuTerrasse,
      LibreALaVente: req.body.LibreALaVente,
      titreDossier: req.body.titreDossier,
      descriptifBien: req.body.descriptifBien,
      DPE: req.body.DPE,
      GES: req.body.GES,
      prixMandat: req.body.prixMandat,
      chargesAnnuellesTotales: req.body.chargesAnnuellesTotales,
      chargesDeCopropriete: req.body.chargesDeCopropriete,
      impotsFonciers: req.body.impotsFonciers,
      annexes: req.body.annexes,
      pointsForts: req.body.pointsForts,
      pointsFaibles: req.body.pointsFaibles,
      commentairesConfidentiels: req.body.commentairesConfidentiels,
      etatQualiteGrosOeuvre: req.body.etatQualiteGrosOeuvre,
      epoqueConstruction: req.body.epoqueConstruction,
      mitoyennete: req.body.mitoyennete,
      agrementGeneral: req.body.agrementGeneral,
      standing: req.body.standing,
      accessibilite: req.body.accessibilite,
      toutAEgout: req.body.toutAEgout,
      qualiteArchitecturale: req.body.qualiteArchitecturale,
      etatPortesEtFenetres: req.body.etatPortesEtFenetres,
      etatDesToitures: req.body.etatDesToitures,
      clotureTerrain: req.body.clotureTerrain,
      nuissanceSonore: req.body.nuissanceSonore,
      voisinageVisaVis: req.body.voisinageVisaVis,
      qualiteEnvironnement: req.body.qualiteEnvironnement,
      proximiteServicesPublics: req.body.proximiteServicesPublics,
      qualiteDistribution: req.body.qualiteDistribution,
      etatMursPlafonds: req.body.etatMursPlafonds,
      solsEtRevetementSols: req.body.solsEtRevetementSols,
      tailleSejour: req.body.tailleSejour,
      expositionSejour: req.body.expositionSejour,
      vueSejour: req.body.vueSejour,
      luminosite: req.body.luminosite,
      cheminee: req.body.cheminee,
      taille: req.body.taille,
      equipement: req.body.equipement,
      etatGeneral: req.body.etatGeneral,
      agrement: req.body.agrement,
      tailleDesPieces: req.body.tailleDesPieces,
      etatDesPieces: req.body.etatDesPieces,
      expositionAuxBruits: req.body.expositionAuxBruits,
      taillePiecesSanitaires: req.body.taillePiecesSanitaires,
      nombreDeSanitaires: req.body.nombreDeSanitaires,
      qualiteEtatSanitaires: req.body.qualiteEtatSanitaires,
      factureEnergetique: req.body.factureEnergetique,
      installationElectrique: req.body.installationElectrique,
      installationGaz: req.body.installationGaz,
      balconLogiaTerasse: req.body.balconOuTerrasse,
      caveSousSol: req.body.caveSousSol,
      agrementJardin: req.body.agrementJardin,
      garageOuParkingOuvert: req.body.garageOuParkingOuvert,
      combles: req.body.combles,
      decoteBienOccupe: req.body.decoteBienOccupe,
      autresElements: req.body.autresElements,
      travauxARealiser: req.body.travauxARealiser,
      renove: req.body.renove,
      valorisationTerrain: req.body.valorisationTerrain,
      methodeReferenceSelected: req.body.methodeReferenceSelected,
      methodeComparaisonSelected: req.body.methodeComparaisonSelected,
      methodeCapitalisationSelected: req.body.methodeCapitalisationSelected,
      moyenne_des_methodes: req.body.moyenne_des_methodes,
      valeurLocative: req.body.valeurLocative,
      tauxCapitalisation: req.body.tauxCapitalisation,
      prix_comparaison: req.body.prix_comparaison,
      prix_reference: req.body.prix_reference,
      prix_capitalisation: req.body.prix_capitalisation
    });

    var EstimatedSuperBien;

    if (req.body.methodeComparaisonSelected === true) {
      EstimatedSuperBien = EstimationComparaison(newSuperBien);
    }
    if (req.body.methodeCapitalisationSelected === true) {
      EstimatedSuperBien = EstimationCapitalisation(newSuperBien);
    }
    if (req.body.methodeReferenceSelected === true) {
      EstimatedSuperBien = EstimationReference(newSuperBien);
    }
    console.log(EstimatedSuperBien);
    EstimatedSuperBien.save()
      .then(superBien => res.json(superBien))
      .catch(err => console.log(err));
  }
);

/**
 * @route   GET /api/estimation/super/biens/saved
 * @desc    FETCH saved super biens estimations of the user
 * @access  Auth Users
 */

router.get(
  "/biens/saved",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    var user = {
      id: req.user.id
    };
    SuperBien.find({ user: user.id })
      .then(data => {
        if (data) {
          res.json(data);
        } else {
          return res
            .status(400)
            .json({ error: "pas de biens sauvegardes trouvées" });
        }
      })
      .catch(err => console.log(err));
  }
);

/**
 * @route   DELETE /api/estimation/super/biens/saved/:id
 * @desc    Delete the estimation made by the user
 * @access  Auth Users
 */

router.delete(
  "/biens/saved/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    SuperBien.find({ user: req.user.id }).then(biens => {
      SuperBien.findById(req.params.id)
        .then(bien => {
          // check estimation ownership
          if (bien.user.toString() != req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "utilisateur non autorisé" });
          }
          //delete
          bien.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ error: "pas d'estimation de bien trouvé" })
        );
    });
  }
);

/**
 * @route   GET /api/estimation/super/biens/saved/:id
 * @desc    Delete the estimation made by the user
 * @access  Auth Users
 */
router.get(
  "/biens/saved/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    SuperBien.find({ user: req.user.id }).then(biens => {
      SuperBien.findById(req.params.id)
        .then(bien => {
          // check estimation ownership
          if (bien.user.toString() != req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "utilisateur non autorisé" });
          }
          //return
          res.json(bien);
        })
        .catch(err =>
          res.status(404).json({ error: "estimmation non trouvé" })
        );
    });
  }
);

module.exports = router;
