const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AppartmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  client: [
    {
      civilite: { type: String, required: true
        // enum: [
        //   "aucun",
        //   "monsieur",
        //   "madame",
        //   "monsieur et madame",
        //   "messieurs",
        //   "mesdames"
        // ]
      },
      prenom: {type: String,  required: true},
      nom: {type: String, required: true},
      email: {type: String, required: true},
      telephone: {type: number, required: true }

    }
  ],

  bienImmobillier: [{
    localisationBien:
    {
        numero: {type: Number, required: true},
        voie: {type: String, required: true},
        codePostal: {type: Number, required: true},
        ville: {type: String, required: true}

    },

    informations:
    {
      anneConstruction: {type: Number, required: true, min: 1000},
      typeBienAffiche: {type: String, required: true},
      nombrePieces: {type: Number, required: true, min: 0},
      nombreChambres: {type: Number,  required: true, min: 0},
      surfaceHabitable: {type: Number,required: true, min: 0},
      surfaceTerrain: { type: Number, required: true, min: 0},
      nombreNiveaux: {type: Number,required: true,  min: 0},
      ascenseur: {type: Boolean, required: true},
      balconOuTerrasse: {type: Boolean, required: true},
      LibreALaVente: {type: Boolean, required: true},
      titreDossier: {type: String, required: true},
      descriptifBien: {type: String, required: true},
      DPE: {type: String, required: true},
      GES: {type: String, required: true},
      PrixMandat: {type: Number, required: true,  min: 0},
      prixm2: {type: Number, required: true, min:0},
    },

    chargesEtImpots:
    {
        chargesAnnuellesTotales: {type: Number, required: true, min: 0},
        chargesDeCopropriete: {type: Number, required: true, min: 0},
        impotsFonciers: {type: Number,  required: true, min: 0}
    },

    photos_plan:
    {


    },

    annexes:
    {

    },

    pointsFortsPointsFaible:
    {
      pointsForts:[{ content: { type: String } }],
      pointsFaibles:[{ content: { type: String } }]
    },

    content: {type: String, required: true}
    },
  }],
  caracteristiques: [
    {
      elementsPrincipaux:
      {
        etatQualiteGrosOeuvre: {
        type: String,
        required: true,
        // enum: [
        //   'Mauvais',
        //   'Mediocore'
        //   'Moyen',
        //   'Bon',
        //   'Tres bon'
        // ]
      },

      epoqueConstruction: {
        type: String,
        required: true,
        // enum: [
        //   'Pas recherché',
        //   'Peu recherché'
        //   'Neutre',
        //   'Recherché',
        //   'Trés recherché'
        // ]
      },

      mitoyennete: {
        type: String,
        required: true,
        // enum: [
        //   '3 cotés',
        //   '2 cotés'
        //   '1 cotés',
        //   'Pas de dependance',
        //   'Maison independante'
        // ]
      },

      agrementGeneral: {
        type: String,
        required: true,
        // enum: [
        //   'Tres desagreable',
        //   'Desagreable'
        //   'Moyen',
        //   'Agreable',
        //   'Tres agreable'
        // ]
      },

      standing: {
        type: String,
        required: true,
        // enum: [
        //   'Mauvais',
        //   'Mediocore'
        //   'Moyen',
        //   'Bon',
        //   'Tres bon'
        // ]
      },

      accessibilite: {
        type: String,
        required: true,
        // enum: [
        //   'Trés difficile',
        //   'Difficile'
        //   'Normal',
        //   'Facile',
        //   'Tres facile'
        // ]
      },

      toutAEgout : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
    },

    autresElements:
    {
      qualiteArchitecturale : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etatPortesEtFenetres : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etatDesToitures : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      clotureTerrain : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
    },

    environement:
    {
      nuissanceSonore: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      voisinageVisaVis: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      qualiteEnvironnement: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      proximiteServicesPublics: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    criteresGeneraux:
    {
      qualiteDistribution: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etatMursPlafonds: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      solsEtRevetementSols: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    sejour:
    {
      tailleSejour: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      expositionSejour: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      vueSejour: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      luminosite: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      cheminee: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    cuisine:
    {
      taille: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      equipement: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etatGeneral: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      agrement: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    chambres:
    {
      tailleDesPieces: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etatDesPieces: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      expositionAuxBruits: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    sanitaires:
    {
      taillePiecesSanitaires: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      nombreDeSanitaires: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      qualiteEtatSanitaires: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    energie:
    {
      factureEnergetique: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      installationElectrique: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      installationGaz: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    annexes:
    {
      balconLogiaTerasse: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      caveSousSol: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      agrementJardin: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      garageOuParkingOuvert: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      comble: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    }
  }],

  estimation: {
    type: Number,

  },

  // add longtitude latitude
});

module.exports = Appartment = mongoose.model("Appartment", AppartmentSchema);
