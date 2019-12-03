const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for default house
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 */

module.exports = function validateDefaultHouseInput(data) {
  let errors = {};
  
    data.rue = !isEmpty(data.rue) ? data.rue : "";
  data.code_postal = !isEmpty(data.code_postal) ? data.code_postal : "";
  data.ville = !isEmpty(data.ville) ? data.ville : "";
  data.surface_habitable = !isEmpty(data.surface_habitable)
    ? data.surface_habitable
    : "";
  data.surface_totale_terrain = !isEmpty(data.surface_totale_terrain)
    ? data.surface_totale_terrain
    : "";
  data.surface_habitable_constructible = !isEmpty(
    data.surface_habitable_constructible
  )
    ? data.surface_habitable_constructible
    : "";
  data.nombre_pieces = !isEmpty(data.nombre_pieces) ? data.nombre_pieces : "";
  data.nombre_salle_bain = !isEmpty(data.nombre_salle_bain)
    ? data.nombre_salle_bain
    : "";
  data.nombre_niveaux = !isEmpty(data.nombre_niveaux)
    ? data.nombre_niveaux
    : "";
  data.annee_construction = !isEmpty(data.annee_construction)
    ? data.annee_construction
    : "";
  data.diagnostic_performance_energetique = !isEmpty(
    data.diagnostic_performance_energetique
  )
    ? data.diagnostic_performance_energetique
    : "";
  data.etat_bien = !isEmpty(data.etat_bien) ? data.etat_bien : "";
  data.qualite_maison = !isEmpty(data.qualite_maison)
    ? data.qualite_maison
    : "";
  data.luminosite = !isEmpty(data.luminosite) ? data.luminosite : "";
  data.calme = !isEmpty(data.calme) ? data.calme : "";
  data.proximite_transports = !isEmpty(data.proximite_transports)
    ? data.proximite_transports
    : "";
  data.qualite_toiture = !isEmpty(data.qualite_toiture)
    ? data.qualite_toiture
    : "";

  if (Validator.isEmpty(data.rue)) {
    errors.rue = "rue field is required";
  }

  if(!data.rue.match(/\d{1}\s\w+/)){
    errors.rue = "rue ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.code_postal)) {
    errors.code_postal = "code postal is required";
  }

  if(!data.code_postal.match(/^\d{5}(?:[-\s]\d{4})?$/)){
    errors.code_postal = "code postal ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.ville)) {
    errors.ville = "ville is required";
  }

  if(!data.ville.match(/^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/)){
    errors.ville="ville ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.surface_habitable)) {
    errors.surface_habitable = "surface_habitable is required";
  }

  if(data.surface_habitable<0){
    errors.surface_habitable="surface_habitable doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.surface_totale_terrain)) {
    errors.surface_totale_terrain = "surface_totale_terrain is required";
  }

  if(data.surface_totale_terrain<0){
    errors.surface_totale_terrain="surface_totale_terrain doit etre un chiffre positive";
  }


  if (Validator.isEmpty(data.surface_habitable_constructible)) {
    errors.surface_habitable_constructible =
      "surface_habitable_constructible is required";
  }

  if(data.surface_habitable_constructible<0){
    errors.surface_habitable_constructible="surface_habitable_constructible doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.nombre_pieces)) {
    errors.nombre_pieces = "nombre_pieces is required";
  }

  if(data.nombre_pieces<0){
    errors.nombre_pieces="nombre_pieces doit etre un chiffre positive";
  }


  if (Validator.isEmpty(data.nombre_salle_bain)) {
    errors.nombre_salle_bain = "nombre_salle_bain is required";
  }

  if(data.nombre_salle_bain<0){
    errors.nombre_salle_bain="nombre_salle_bain doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.nombre_niveaux)) {
    errors.nombre_niveaux = "nombre_niveaux is required";
  }

  if(data.nombre_niveaux<0){
    errors.nombre_niveaux="nombre_niveaux doit etre un chiffre positive";
  }

  if (Validator.isEmpty(data.annee_construction)) {
    errors.annee_construction = "annee_construction is required";
  }

  if(!data.annee_construction.match(/^\d{4}$/)){
    errors.annee_construction="annee_construction ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.diagnostic_performance_energetique)) {
    errors.diagnostic_performance_energetique =
      "diagnostic_performance_energetique is required";
  }

  if(!data.diagnostic_performance_energetique.match(/[^0-9]/)){
    errors.diagnostic_performance_energetique="diagnostic_performance_energetique ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.etat_bien)) {
    errors.etat_bien = "etat_bien is required";
  }

  if(!data.etat_bien.match(/[^0-9]/)){
    errors.etat_bien="etat_bien ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.qualite_maison)) {
    errors.qualite_maison = "qualite_maison is required";
  }

  if(!data.qualite_maison.match(/[^0-9]/)){
    errors.qualite_maison="qualite_maison ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.luminosite)) {
    errors.luminosite = "luminosite is required";
  }

  if(!data.luminosite.match(/[^0-9]/)){
    errors.luminosite="luminosite ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.calme)) {
    errors.calme = "calme is required";
  }

  if(!data.calme.match(/[^0-9]/)){
    errors.calme="calme ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.proximite_transports)) {
    errors.proximite_transports = "proximite_transports is required";
  }

  if(!data.proximite_transports.match(/[^0-9]/)){
    errors.proximite_transports="proximite_transports ne correspond pas au bon format!";
  }

  if (Validator.isEmpty(data.qualite_toiture)) {
    errors.qualite_toiture = "qualite_toiture is required";
  }

  if(!data.qualite_toiture.match(/[^0-9]/)){
    errors.qualite_toiture="qualite_toiture ne correspond pas au bon format!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
