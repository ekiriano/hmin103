const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for default appartment
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 * @todo Add Types [Condo , Dupley , Triplex,Loft] In Appartment Model
 */

module.exports = function validateDefaultAppartmentInput(data) {
  let errors = {};

  // set empty attr to empty string

  if (Validator.isEmpty(data.rue)) {
    errors.rue = "rue field is required";
  }

if(!data.rue.match(/\d{1}\s\w+/)){
    errors.rue = "rue ne correspond pas au bon format!";
}

  if (Validator.isEmpty(data.code_postal)) {
    errors.code_postal =
      "code postal is required and is 5 digits and is positive";
  }

  if (!data.code_postal.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
    errors.code_postal = "code postal ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.ville)) {
    errors.ville = "ville is required";
  }

  if (!data.ville.match(/^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/)) {
    errors.ville = "ville ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.surface)) {
    errors.surface = "surface is required ";
  }

  if (data.surface < 0) {
    errors.surface = "surface doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.nombre_pieces)) {
    errors.nombre_pieces = "nombre_pieces is required";
  }

  if (data.nombre_pieces < 0) {
    errors.nombre_pieces = "nombre_pieces doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.nombre_salle_bain)) {
    errors.nombre_salle_bain = "nombre_salle_bain is required";
  }

  if (data.nombre_salle_bain < 0) {
    errors.nombre_salle_bain =
      "nombre_salle_bain doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.etage)) {
    errors.etage = "etage is required";
  }

  if (data.etage < 0) {
    errors.etage = "etage doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.nombre_etage_total)) {
    errors.nombre_etage_total = "nombre_total_etage is required ";
  }

  if (data.nombre_etage_total < 0) {
    errors.nombre_etage_total =
      "nombre_etage_total doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.annee_construction)) {
    errors.annee_construction = "annee_construction is required";
  }

  if (!data.annee_construction.match(/^\d{4}$/)) {
    errors.annee_construction =
      "annee_construction ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.diagnostic_performance_energetique)) {
    errors.diagnostic_performance_energetique =
      "diagnostic_performance_energetique is required";
  }

  if (!data.diagnostic_performance_energetique.match(/[^0-9]/)) {
    errors.diagnostic_performance_energetique =
      "diagnostic_performance_energetique ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.etat_bien)) {
    errors.etat_bien = "etat_bien is required";
  }

  if (!data.etat_bien.match(/[^0-9]/)) {
    errors.etat_bien = "etat_bien ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.qualite_appartement)) {
    errors.qualite_appartement = "qualite_appartement is required";
  }

  if (!data.qualite_appartement.match(/[^0-9]/)) {
    errors.qualite_appartement =
      "qualite_appartement ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.luminosite)) {
    errors.luminosite = "luminosite is required";
  }

  if (!data.luminosite.match(/[^0-9]/)) {
    errors.luminosite = "luminosite ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.calme)) {
    errors.calme = "calme is required";
  }

  if (!data.calme.match(/[^0-9]/)) {
    errors.calme = "calme ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.proximite_transports)) {
    errors.proximite_transports = "proximite_transports is required";
  }

  if (!data.proximite_transports.match(/[^0-9]/)) {
    errors.proximite_transports =
      "proximite_transports ne correspond pas au bon format!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
