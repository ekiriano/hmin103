const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SuperBienSchema = new Schema({
      user: { type: Schema.Types.ObjectId,  ref: "users" },
      civilite: { type: String,},
      prenom: {type: String, required: true  },
      nom: {type: String,required: true  },
      adressePostale: {type: String,required: true  },
      email: {type: String,required: true  },
      telephone: {type: Number,  },
      voie: {type: String,required: true  },
      codePostal: {type: Number, required: true },
      ville: {type: String, required: true },
      anneeConstruction: {type: Number,  min: 1000},
      typeBienAffiche: {type: String,  },
      nombrePieces: {type: Number,  min: 0, },
      nombreChambres: {type: Number,   min: 0, },
      surfaceHabitable: {type: Number, min: 0, },
      surfaceTerrain: { type: Number,  min: 0, },
      nombreNiveaux: {type: Number,  min: 0, },
      ascenseur: {type: String, },
      balconOuTerrasse: {type: String, },
      LibreALaVente: {type: String, },
      titreDossier: {type: String, },
      descriptifBien: {type: String, },
      DPE: {type: String, },
      GES: {type: String, },
      prixMandat: {type: Number,   min: 0},
      // prixm2: {type: Number,  min:0},
      chargesAnnuellesTotales: {type: Number,  min: 0},
      chargesDeCopropriete: {type: Number,  min: 0},
      valeurLocative: {type:Number, min:0},
      impotsFonciers: {type: Number,   min: 0},
      annexes: {type: String},
      pointsForts:[String],
      pointsFaibles:[String],
      commentairesConfidentiels: {type: String, },
        etatQualiteGrosOeuvre: {
        type: String,

      },
      epoqueConstruction: {
        type: String,

      },
      mitoyennete: {
        type: String,

      },
      agrementGeneral: {
        type: String,

      },
      standing: {
        type: String,

      },
      accessibilite: {
        type: String,

      },
      toutAEgout : {
        type: String,

      },
      qualiteArchitecturale : {
        type: String,

      },
      etatPortesEtFenetres : {
        type: String,

      },
      etatDesToitures : {
        type: String,

      },
      clotureTerrain : {
        type: String,

      },
      nuissanceSonore: {
        type: String,

      },
      voisinageVisaVis: {
        type: String,

      },
      qualiteEnvironnement: {
        type: String,

      },
      proximiteServicesPublics: {
        type: String,

      },
      qualiteDistribution: {
        type: String,

      },
      etatMursPlafonds: {
        type: String,

      },
      solsEtRevetementSols: {
        type: String,

      },
      tailleSejour: {
        type: String,

      },
      expositionSejour: {
        type: String,

      },
      vueSejour: {
        type: String,

      },
      luminosite: {
        type: String,

      },
      cheminee: {
        type: String,

      },
      taille: {
        type: String,

      },
      equipement: {
        type: String,

      },
      etatGeneral: {
        type: String,

      },
      agrement: {
        type: String,

      },
      tailleDesPieces: {
        type: String,

      },
      etatDesPieces: {
        type: String,

      },
      expositionAuxBruits: {
        type: String,

      },
      taillePiecesSanitaires: {
        type: String,

      },
      nombreDeSanitaires: {
        type: String,

      },
      qualiteEtatSanitaires: {
        type: String,

      },
      factureEnergetique: {
        type: String,

      },
      installationElectrique: {
        type: String,

      },
      installationGaz: {
        type: String,

      },
      balconLogiaTerasse: {
        type: String,

      },
      caveSousSol: {
        type: String,

      },
      agrementJardin: {
        type: String,

      },
      garageOuParkingOuvert: {
        type: String,

      },
      combles: {
        type: String,

      },
    decoteBienOccupe: {
      type: Number,

    },

    autresElements: {
      type: Number,

    },

    travauxARealiser: {
      type: Number,

    },

    valorisationTerrain: {
      type: Number,

    },
    tauxCapitalisation: {
      type: Number,

    },

    renove: {
      type: Number,

    },

    methodeReferenceSelected: {
      type: Number,
    },
    methodeComparaisonSelected: {
      type:Number,
    },
    methodeCapitalisationSelected: {
      type:Number,
    },
    moyenne_des_methodes: {
      type: Number,
      min: 0
    },
    prix_comparaison: {
      type: Number,
      min: 0
    },
    prix_reference: {
      type: Number,
      min: 0
    },
    prix_capitalisation: {
      type: Number,
      min: 0
    }

  // add longtitude latitude
});

SuperBienSchema.pre('save', function(next) {
  var moyenne;
  if(this.methodeCapitalisationSelected){
    if(this.methodeReferenceSelected){
      if(this.methodeComparaisonSelected){
        moyenne = (this.prix_capitalisation+this.prix_reference+this.prix_comparaison)/3;
      }
      else {
        moyenne = (this.prix_capitalisation+this.prix_reference)/2;
      }
    }
    else if(this.methodeComparaisonSelected){
      moyenne = (this.prix_capitalisation+this.prix_comparaison)/2;
    }
    else{
      moyenne = this.prix_capitalisation;
    }
  }
  else {
    if(this.methodeReferenceSelected && this.methodeComparaisonSelected) { moyenne = (this.prix_reference+this.prix_comparaison)/2;}
    if(!this.methodeReferenceSelected){ moyenne = this.prix_comparaison;}
    if(!this.methodeComparaisonSelected){ moyenne = this.prix_reference;}
  }
    this.moyenne_des_methodes = Math.round(moyenne);
  next();
});


module.exports = SuperBien = mongoose.model("SuperBien", SuperBienSchema);
