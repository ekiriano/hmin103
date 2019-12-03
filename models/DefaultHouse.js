const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DefaultHouseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  rue: {
    type: String,
    required: true
  },
  code_postal: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  surface_habitable: {
    type: Number,
    required: true,
    min: 0
  },
  surface_totale_terrain: {
    type: Number,
    required: true,
    min: 0
  },
  surface_habitable_constructible: {
    type: Number,
    required: true,
    min: 0
  },
  nombre_pieces: {
    type: Number,
    required: true,
    min: 0
  },
  nombre_salle_bain: {
    type: Number,
    required: true,
    min: 0
  },
  nombre_niveaux: {
    type: Number,
    required: true,
    min: 0
  },
  //caracteristiquesFacultatives : @todo
  annee_construction: {
    type: Number,
    required: true,
    min: 1000
  },
  diagnostic_performance_energetique: {
    type: String,
    required: true,
    //enum: ["A", "B", "C", "D", "E", "F", "G"]
  },
  etat_bien: {
    type: String,
    required: true,
    /*enum: [
      "standard",
      "rafraichissment_necessaire",
      "travaux_importants_necessaires"
    ]*/
  },
  qualite_maison: {
    type: String,
    required: true,
    //enum: ["inferieure", "comparable", "suprerieure"]
  },
  luminosite: {
    type: String,
    required: true,
    //enum: ["sombre", "peu_clair", "standard", "clair", "tres_clair"]
  },
  calme: {
    type: String,
    required: true,
    //enum: ["tres_bruyant", "bruyant", "standard", "calme", "tres_calme"]
  },
  proximite_transports: {
    type: String,
    required: true,
    //enum: ["tres_elogoignees", "eloigne", "standard", "proche", "tres_proche"]
  },
  qualite_toiture: {
    type: String,
    required: true,
    //enum: ["a_renover", "standard", "refaite_a_neuf"]
  },
  //   prixm2: {
  //   type: Number,
  //   required: true,
  //     min: 0
  // },
   prix_estimation: {
     type: Number,
     min: 0
   }

  // add longtitue latitude
});

module.exports = DefaultHouse = mongoose.model(
  "defaultHouse",
  DefaultHouseSchema
);
