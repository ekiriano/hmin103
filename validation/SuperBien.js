const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for house
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 * @todo Add Types [Condo , Dupley , Triplex,Loft] In Appartment Model
 */

 module.exports = function validateSuperBienInput(data) {
   let errors = {};


// required fields validation

///////////////////////////// client validation ////////////////////////////////

if (Validator.isEmpty(data.civilite)) {
  errors.civilite =
    "Civilite is required";
}



// if(!Validator.matches(
//     data.civilite,
//     "Aucun",
//     "Monsieur",
//     "Madame",
//     "Monsieur et madame",
//     "Messieurs",
//     "Mesdames"
//   )) {
//     errors.civilite = "civilite doesn't match !"
//   }

if (Validator.isEmpty(data.prenom)) {
  errors.prenom = "Prenom is required";
}



if (Validator.isEmpty(data.nom)) {
  errors.nom = "Last name is required";
}



if (Validator.isEmpty(data.adressePostale)) {
  errors.adressePostale = "Adresse postale is required";
}


if (Validator.isEmpty(data.email)) {
  errors.email = "Email is required";
}



if (Validator.isEmpty(data.telephone)){
  errors.telephone = "Telephone is required";
}




// if (!Validator.isNumeric(data.telephone, { no_symbols: true }))
// {
//   errors.telephone = "telephone is required";
// }

///////////////////////////// end of client validation ////////////////////////////////

///////////////////////////// bienImmobillier validation ////////////////////////////////

// bienImmobillier.validation

// if (
//   !Validator.isLength(data.numero, { min: 1, max: 3 })
// ) {
//   errors.numero =
//     "street number is length";
// }

// if(!Validator.isNumeric(data.numero, { no_symbols: true })){
//   errors.numero =
//     "street number is no symbol";
// }
//
if (Validator.isEmpty(data.voie)) {
  errors.voie = "rue is required";
}



if(Validator.isEmpty(data.codePostal)){
  errors.codePostal =
    "code postal is required";
}




//
// // if (!Validator.isLength(data.codePostal, { min: 5, max: 5 })
// // ) {
// //   errors.codePostal =
// //     "code postal is required and is 5 digits";
// // }
// //
// // if(!Validator.isNumeric(data.codePostal, { no_symbols: true })){
// //   errors.codePostal =
// //     "street number is no symbol";
// // }
//
if (Validator.isEmpty(data.ville)) {
  errors.ville =
    "city name is required";
}


//
// // end of bienImmobillier.validation
//
// // bienImmobillier informations validation
//
// // if (!Validator.isInt(data.anneeConstruction, { gt: 1900, lt: 2019 })) {
// //   errors.anneeConstruction =
// //     "annee_construction is required and must be between 1900 and 2019";
// // }
//
if(Validator.isEmpty(data.anneeConstruction)){
  errors.anneeConstruction = "is required";
}




//
if (Validator.isEmpty(data.typeBienAffiche)) {
  errors.typeBienAffiche =
    "Année de construction is required";
}


//
if (Validator.isEmpty(data.nombrePieces)) {
  errors.nombrePieces =
    "number of pieces is required and must be positive";
}

//
if (Validator.isEmpty(data.nombreChambres)) {
  errors.nombreChambres =
    "number of rooms is required and must be positive";
}


//
if (Validator.isEmpty(data.surfaceHabitable)) {
  errors.surfaceHabitable =
    "habitable surface is required and must be positive";
}


if (Validator.isEmpty(data.valeurLocative)) {
  errors.valeurLocative =
    "Valeur locative is required and must be positive";
}
//
if (Validator.isEmpty(data.surfaceTerrain)) {
  errors.surfaceTerrain =
    "ground surface is required and must be positive";
}


//
if (Validator.isEmpty(data.nombreNiveaux)) {
  errors.nombreNiveaux =
    "number of levels is required and must be positive";
}

//
if (Validator.isEmpty(data.ascenseur)) {
  errors.ascenseur =
    "elevator is required";
}

//
if (Validator.isEmpty(data.balconOuTerrasse)) {
  errors.balconOuTerrasse =
    "balcony is required";
}


//
if (Validator.isEmpty(data.LibreALaVente)) {
  errors.LibreALaVente =
    "Libre a la vente is required";
}


//
if (Validator.isEmpty(data.titreDossier)) {
  errors.titreDossier =
    "Titre du dossier is required";
}

if (Validator.isEmpty(data.descriptifBien)) {
  errors.descriptifBien =
    "Descriptif du bien is required";
}


//
// // if (!Validator.matches(
// //   data.DPE,
// //   'A++',
// //   'B',
// //   'C',
// //   'D',
// //   'E',
// //   'F'
// // )
// // ) {
// // errors.DPE =
// //   "DPE is required";
// // }
//
if(Validator.isEmpty(data.DPE)){
  errors.DPE = " DPE is required"
}

//
//
// // if (!Validator.matches(
// //   data.GES,
// //   'A',
// //   'B',
// //   'C',
// //   'D',
// //   'E',
// //   'F'
// // )
// // ) {
// // errors.GES =
// //   "GES is required";
// // }
//
if(Validator.isEmpty(data.GES)){
  errors.GES = "GES is required"
}

//
if (Validator.isEmpty(data.prixMandat)) {
  errors.prixMandat =
    "Prix Mandat is required";
}
//
// // end of masion informations validation
//
// // chargesEtImpots
//
if (Validator.isEmpty(data.chargesAnnuellesTotales)) {
  errors.chargesAnnuellesTotales =
    "annual chargesEtImpots is required";
}

//
if (Validator.isEmpty(data.chargesDeCopropriete)) {
  errors.chargesDeCopropriete =
    "coprepriete chargesEtImpots is required";
}
//
if (Validator.isEmpty(data.impotsFonciers)) {
  errors.impotsFonciers =
    "impots is required";
}


//
// // end of chargesEtImpots
//
// // bienImmobillier photos_plan validation
//
//
// // end of bienImmobillier photos_plan validation
//
// // bienImmobillier annexes validation
if (Validator.isEmpty(data.annexes)) {
  errors.annexes =
    "annexes is required";
}


// // end of bienImmobillier annexes validation
//
// // bienImmobillier points validation
//
//
// // end of bienImmobillier points validationTrés
//
// // bienImmobillier commentaires validation
//
//
// // end of bienImmobillier commentaires validation
//
//
//
// ///////////////////////////// end of bienImmobillier validation ////////////////////////////////
//
// ///////////////////////////// caracteristiques validation ////////////////////////////////
//
// // caracteristiques elementsPrincipaux validation
//
// // if (!Validator.matches(
// //     data.etatQualiteGrosOeuvre,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatQualiteGrosOeuvre =
// //     "etat is required";
// // }
//
if(  Validator.isEmpty(data.etatQualiteGrosOeuvre)){
  errors.etatQualiteGrosOeuvre = "Etat et qualite Gros Oeuvre is required";
}


//
// // if (!Validator.matches(
// //     data.epoqueConstruction,
// //     'Pas recherché',
// //     'Peu recherché',
// //     'Neutre',
// //     'Recherché',
// //     'Trés recherché'
// //   )
// // ) {
// //   errors.epoqueConstruction =
// //     "epoque de contruction is required";
// // }
//
if(Validator.isEmpty(data.epoqueConstruction)){
  errors.epoqueConstruction = "Epoque de construction is required";
}


//
// // if (
// //
// //   !Validator.matches(
// //     data.mitoyennete,
// //     '3 côtés',
// //     '2 côtés',
// //     '1 côtés',
// //     'Par dependance',
// //     'Maison independante'
// //   )
// // ) {
// //   errors.mitoyennete =
// //     "mitoyennete is required";
// // }
//
if(Validator.isEmpty(data.mitoyennete)){
  errors.mitoyennete = "Mitoyennete is required";
}


//
// // if (!Validator.matches(
// //     data.agrementGeneral,
// //     'Trés desagreable',
// //     'Desagreable',
// //     'Moyen',
// //     'Agreable',
// //     'Trés agreable'
// //   )
// // ) {
// //   errors.agrementGeneral =
// //     "general agreement is required";
// // }
//
if(Validator.isEmpty(data.agrementGeneral)){
  errors.agrementGeneral = "Agrement Général is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.standing,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.standing =
// //     "standing is required";
// // }
//
if(Validator.isEmpty(data.standing)){
  errors.standing = "Standing is required"
}


//
// // if (
// //   !Validator.matches(
// //     data.accessibilite,
// //     'Trés difficile',
// //     'Difficile',
// //     'Normal',
// //     'Facile',
// //     'Trés facile'
// //   )
// // ) {
// //   errors.accessibilite =
// //     "accessibilité is required";
// // }
//
if(Validator.isEmpty(data.accessibilite)){
  errors.accessibilite = "Accéssibilité is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.toutAEgout,
// //     'Rien',
// //     'A revoir',
// //     'Assainissement individuel',
// //     'Partiel',
// //     'Complet'
// //   )
// // ) {
// //   errors.toutAEgout =
// //     "tout a l'egout is required";
// // }
//
if(Validator.isEmpty(data.toutAEgout)){
  errors.toutAEgout = "Tout a l'égout is required";
}


//
// // end of caracteristiques elementsPrincipaux validation
//
// // caracteristiques autresElements validation
//
// // if (
// //   !Validator.matches(
// //     data.qualiteArchitecturale,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.qualiteArchitecturale =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.qualiteArchitecturale)){
  errors.qualiteArchitecturale = "Qualité architecturale is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.etatPortesEtFenetres,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatPortesEtFenetres =
// //     "etat des portes et fenetres is required";
// // }
//
if(Validator.isEmpty(data.etatPortesEtFenetres)){
  errors.etatPortesEtFenetres = "Etat des portes et fenetres is required";
}
//
// // if (
// //   !Validator.matches(
// //     data.etatDesToitures,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatDesToitures =
// //     "etat des toitures is required";
// // }
//
if(Validator.isEmpty(data.etatDesToitures)){
  errors.etatDesToitures = "Etat des toitures is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.clotureTerrain,
// //     'Aucun/Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon'
// //   )
// // ) {
// //   errors.clotureTerrain =
// //     "Cloture terrain is required";
// // }
//
if(Validator.isEmpty(data.clotureTerrain)){
  errors.clotureTerrain = "Cloture du terrain is required";
}


if(Validator.isEmpty(data.tauxCapitalisation)){
  errors.tauxCapitalisation = "Taux de capitalisation is required";
}


// // end of caracteristiques autresElements validation
//
// // caracteristiques environnement validation
//
// // if (
// //   !Validator.matches(
// //     data.nuissanceSonore,
// //     'Trés bruyant',
// //     'Bruyant',
// //     'Normal',
// //     'Calme'
// //   )
// // ) {
// //   errors.nuissanceSonore =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.nuissanceSonore)){
  errors.nuissanceSonore = "Nuissance sonore is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.voisinageVisaVis,
// //     'Trés gênant',
// //     'Gênant',
// //     'Normal',
// //     'Calme',
// //     'Aucun'
// //   )
// // ) {
// //   errors.voisinageVisaVis =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.voisinageVisaVis)){
  errors.voisinageVisaVis = "Le voisinage vis-à-vis is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.qualiteEnvironnement,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.qualiteEnvironnement =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.qualiteEnvironnement)){
  errors.qualiteEnvironnement = "Qualité de l'environnement is required"
}

//
// // if (
// //   !Validator.matches(
// //     data.proximiteServicesPublics,
// //     'Trés éloignés',
// //     'Assez éloignés',
// //     'Normales',
// //     'Proches',
// //     'Trés proches'
// //   )
// // ) {
// //   errors.proximiteServicesPublics =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.proximiteServicesPublics)){
  errors.proximiteServicesPublics = "Proximité des services publiques is required";
}


//
// // end of caracteristiques environnement validation
//
// // caracteristiques criteresGeneraux validation
//
// // if (
// //   !Validator.matches(
// //     data.qualiteDistribution,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne'
// //   )
// // ) {
// //   errors.qualiteDistribution =
// //     "qualiteDistribution is required";
// // }
//
if(Validator.isEmpty(data.qualiteDistribution)){
  errors.qualiteDistribution = "Qualité de distribution is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.etatMursPlafonds,
// //     'A refaire',
// //     'Usagé',
// //     'Moyen',
// //     'Récent',
// //     'Neuf'
// //   )
// // ) {
// //   errors.etatMursPlafonds =
// //     "etatMursPlafonds is required";
// // }
//
if(Validator.isEmpty(data.etatMursPlafonds)){
  errors.etatMursPlafonds = "Etat des murs et plafonds is required";
}

// // if (
// //   !Validator.matches(
// //     data.solsEtRevetementSols,
// //     'A refaire',
// //     'Médiocre',
// //     'Convenable',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.solsEtRevetementSols =
// //     "solsEtRevetementSols is required";
// // }
//
if(Validator.isEmpty(data.solsEtRevetementSols)){
  errors.solsEtRevetementSols = "Sols et revetement du sols is required";
}


//
// // end of caracteristiques criteresGeneraux validation
//
// // caracteristiques sejour validation
//
// // if (
// //   !Validator.matches(
// //     data.tailleSejour,
// //     'Trés petit',
// //     'Petit',
// //     'Normal',
// //     'Grand',
// //     'Trés grand'
// //   )
// // ) {
// //   errors.tailleSejour =
// //     "tailleSejour is required";
// // }
//
if(Validator.isEmpty(data.tailleSejour)){
  errors.tailleSejour = "La taille du séjour is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.expositionSejour,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.expositionSejour =
// //     "exposition is required";
// // }
//
if(  Validator.isEmpty(data.expositionSejour)){
  errors.expositionSejour = "L'exposition du séjour is required"
}


//
// // if (
// //   !Validator.matches(
// //     data.vueSejour,
// //     'VisAVis/Proche',
// //     'Médiocre',
// //     'Ordinaire',
// //     'Belle',
// //     'Exceptionnelle'
// //   )
// // ) {
// //   errors.vueSejour =
// //     "vue is required";
// // }
//
if(Validator.isEmpty(data.vueSejour)){
  errors.vueSejour = "La vue du séjour is required";
}


// // if (
// //   !Validator.matches(
// //     data.luminosite,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Simple',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.luminosite =
// //     "lumonisite is required";
// // }
//
if(Validator.isEmpty(data.luminosite)){
  errors.luminosite  = "Luminosité is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.cheminee,
// //     'Inexistante',
// //     'Médiocre',
// //     'Simple',
// //     'Belle',
// //     'Exceptionnelle'
// //   )
// // ) {
// //   errors.cheminee =
// //     "cheminee is required";
// // }
//
if(  Validator.isEmpty(data.cheminee)){
  errors.cheminee = "Cheminée is required";
}


//
// // end of caracteristiques sejour validation
//
// // caracteristiques cuisine validation
//
// // if (
// //   !Validator.matches(
// //     data.taille,
// //     'Trés petite',
// //     'Petite',
// //     'Normale',
// //     'Grande',
// //     'Trés grande'
// //   )
// // ) {
// //   errors.taille =
// //     "taille is required";
// // }
//
if(Validator.isEmpty(data.taille)){
  errors.taille = "La taille de la cuisine is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.equipement,
// //     'Inexistant',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.equipement =
// //     "equipement is required";
// // }
//
if(Validator.isEmpty(data.equipement)){
  errors.equipement = "L'equipement de la cuisine is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.etatGeneral,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatGeneral =
// //     "etatGeneral is required";
// // }
//
if(Validator.isEmpty(data.etatGeneral)){
  errors.etatGeneral = "L'etat général is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.agrement,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Agreable',
// //     'Trés agreable'
// //   )
// // ) {
// //   errors.agrement =
// //     "agrement is required";
// // }
//
if(Validator.isEmpty(data.agrement)){
  errors.agrement = "L'agrément is required";
}


//
// // end of caracteristiques cuisine validation
//
// // caracteristiques chambres validation
//
// // if (
// //   !Validator.matches(
// //     data.tailleDesPieces,
// //     'Trés petite',
// //     'Petite',
// //     'Normale',
// //     'Grande',
// //     'Trés grande'
// //   )
// // ) {
// //   errors.tailleDesPieces =
// //     "agrement is required";
// // }
//
if(Validator.isEmpty(data.tailleDesPieces)){
  errors.tailleDesPieces = "La taille des pièces is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.etatDesPieces,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatDesPieces =
// //     "etatDesPieces is required";
// // }
//
if(Validator.isEmpty(data.etatDesPieces)){
  errors.etatDesPieces = "L'etat des pièces is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.expositionAuxBruits,
// //     'Trés bruyante',
// //     'Bruyante',
// //     'Moyenne',
// //     'Faible',
// //     'Trés faible'
// //   )
// // ) {
// //   errors.expositionAuxBruits =
// //     "expositionAuxBruits is required";
// // }
//
if(Validator.isEmpty(data.expositionAuxBruits)){
  errors.expositionAuxBruits = "L'exposition aux bruits is required";
}


//
// // end of caracteristiques chambres validation
//
// // caracteristiques sanitaires validation
//
// // if (
// //   !Validator.matches(
// //     data.taillePiecesSanitaires,
// //     'Trés petite',
// //     'Petite',
// //     'Normale',
// //     'Grande',
// //     'Trés grande'
// //   )
// // ) {
// //   errors.taillePiecesSanitaires =
// //     "taille is required";
// // }
//
if(Validator.isEmpty(data.taillePiecesSanitaires)){
  errors.taillePiecesSanitaires = "La taille des pièces sanitaires is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.nombreDeSanitaires,
// //     'Inexistant',
// //     'Insuffisant',
// //     'Normal',
// //     'Elevé',
// //     'Trés elevé'
// //   )
// // ) {
// //   errors.nombreDeSanitaires =
// //     "nombre is required";
// // }
//
if(  Validator.isEmpty(data.nombreDeSanitaires)){
  errors.nombreDeSanitaires = "Le nombre des pièces sanitaires is required";
}


//
// // if (
// //   !Validator.matches(
// //     data.qualiteEtatSanitaires,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.qualiteEtatSanitaires =
// //     "qualite is required";
// // }
//
if(Validator.isEmpty(data.qualiteEtatSanitaires)){
  errors.qualiteEtatSanitaires = "La qualité des sanitaires is required";
}


//
// // end of caracteristiques sanitaires validation
//
// // caracteristiques energie validation
//
// // if (
// //   !Validator.matches(
// //     data.factureEnergetique,
// //     'Trés elevée',
// //     'Elevée',
// //     'Moyenne',
// //     'Faible',
// //     'Trés faible'
// //   )
// // ) {
// //   errors.factureEnergetique =
// //     "factureEnergetique is required";
// // }
//
if(Validator.isEmpty(data.factureEnergetique)){
  errors.factureEnergetique = "La facuture énérgitique is required";
}

//
// // if (
// //   !Validator.matches(
// //     data.installationElectrique,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.installationElectrique =
// //     "installation_electrique is required";
// // }
//
if(Validator.isEmpty(data.installationElectrique)){
  errors.installationElectrique = "L'installation éléctronique is reuqired";
}

//
// // if (
// //
// //   !Validator.matches(
// //     data.installationGaz,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.installationGaz =
// //     "installation_gaz is required";
// // }
//
if(Validator.isEmpty(data.installationGaz)){
  errors.installationGaz = "L'installation du gaz is required";
}


//
// // end of caracteristiques energie validation

if(Validator.isEmpty(data.balconLogiaTerasse)){
  errors.balconLogiaTerasse = " Balcon/Logia/Terasseis required";
}



if(Validator.isEmpty(data.caveSousSol)){
  errors.caveSousSol = "Cave/Sous-sol is required";
}



if(Validator.isEmpty(data.agrementJardin)){
  errors.agrementJardin = "L'agrément jardin is required";
}


if(Validator.isEmpty(data.garageOuParkingOuvert)){
  errors.garageOuParkingOuvert = "Garage/Parking ouvert is required";
}


if(Validator.isEmpty(data.combles)){
  errors.combles = "Combles is required";
}


if (Validator.isEmpty(data.renove)) {
  errors.renove =
    "renove is required";
}


if (Validator.isEmpty(data.valorisationTerrain)) {
  errors.valorisationTerrain =
    "La valorisation terrain is required";
}


if (Validator.isEmpty(data.decoteBienOccupe)) {
  errors.decoteBienOccupe =
    "decote Bien Occupe is required";
}


if (Validator.isEmpty(data.travauxARealiser)) {
  errors.travauxARealiser =
    "Travaux a réaliser  is required";
}


if (Validator.isEmpty(data.autresElements)) {
  errors.autresElements =
    "Autres élements  is required";
}



if(!data.methodeReferenceSelected
  && !data.methodeComparaisonSelected
  && !data.methodeCapitalisationSelected){
    errors.methodes =
    "Please make sure you choose at least one method before estimate";
  }


///////////////////////////// end of estimation validation ////////////////////////////////



// end of required fields validation

return {
  errors,
  isValid: isEmpty(errors)
};
};

