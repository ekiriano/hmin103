module.exports = {

  EstimationComparaison: Bien => {
    var json = require("../datasets/superBien.json");

    var nbr = 0;
    var estime = 0;
    var surfacemoy = 0;

    if(json.maisons[0].codePostal == Bien.codePostal){
      for (var bien = 0; bien < json.maisons.length; bien++) {
          estime =estime +json.maisons[bien].prix_comparaison;
          surfacemoy =surfacemoy + json.maisons[bien].surfaceHabitable;
          nbr++;
        
      }

      surfacemoy = surfacemoy / nbr;
      estime = estime / nbr;
      var a = surfacemoy;
      var b = Bien.surfaceHabitable;
      var c = estime;
      var estimmation = Math.round((b * c) / a);
      Bien.prix_comparaison = estimmation;
  //    Bien.prix_comparaison = Bien.prix_comparaison -(Bien.decoteBienOccupe +Bien.autresElements +
    //    Bien.travauxARealiser + Bien.valorisationTerrain + Bien.renove);
      console.log(Bien.prix_comparaison);
      return Bien;
  }

    else {

  	var estime=0;
  	var nbr=0;
  	for (var bien = 0; bien < json.maisons.length; bien++) {
  		estime =estime +json.maisons[bien].prix_comparaison;
        nbr++;
    }
    estime = estime / nbr;
    Bien.prix_comparaison=Math.round(estime);
    console.log(Bien.prix_comparaison);
    return Bien;
  }
},




	  EstimationReference : Bien => {
    var json = require("../datasets/superBien.json");

    var biensimilaire;

    if(json.maisons[0].codePostal == Bien.codePostal){
    for (var bien = 0; bien < json.maisons.length; bien++) {
      if (json.maisons[bien].surfaceHabitable - 5 <= Bien.surfaceHabitable || Bien.surfaceHabitable <= json.maisons[bien].surfaceHabitable + 5) {
          biensimilaire = json.maisons[bien];
      }
    }
  

  var a = biensimilaire.surfaceHabitable;
  var b = Bien.surfaceHabitable;
  var c = biensimilaire.prix_reference;
  Bien.prix_reference = (b * c) / a;

  if (biensimilaire.nombrePieces > Bien.nombrePieces) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000 * (biensimilaire.nombrePieces - Bien.nombrePieces);
    }
    if (Bien.nombrePieces > biensimilaire.nombrePieces) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000 * (Bien.nombrePieces - biensimilaire.nombrePieces);
    }

      if (biensimilaire.nombreChambres > Bien.nombreChambres) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000 * (biensimilaire.nombreChambres - Bien.nombreChambres);
    }
    if (Bien.nombreChambres > biensimilaire.nombreChambres) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000 * (Bien.nombreChambres - biensimilaire.nombreChambres);
    }

          if (biensimilaire.nombreNiveaux > Bien.nombreNiveaux) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000 * (biensimilaire.nombreNiveaux - Bien.nombreNiveaux);
    }
    if (Bien.nombreNiveaux > biensimilaire.nombreNiveaux) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000 * (Bien.nombreNiveaux - biensimilaire.nombreNiveaux);
    }


    if (biensimilaire.nombreNiveaux > Bien.nombreNiveaux) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000 * (biensimilaire.nombreNiveaux - Bien.nombreNiveaux);
    }
    if (Bien.nombreNiveaux > biensimilaire.nombreNiveaux) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000 * (Bien.nombreNiveaux - biensimilaire.nombreNiveaux);
    }



    if (biensimilaire.etatQualiteGrosOeuvre.localeCompare(Bien.etatQualiteGrosOeuvre)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.etatQualiteGrosOeuvre.localeCompare(biensimilaire.etatQualiteGrosOeuvre)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.epoqueConstruction.localeCompare(Bien.epoqueConstruction)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.epoqueConstruction.localeCompare(biensimilaire.epoqueConstruction)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.mitoyennete.localeCompare(Bien.mitoyennete)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.mitoyennete.localeCompare(biensimilaire.mitoyennete)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.agrementGeneral.localeCompare(Bien.agrementGeneral)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.agrementGeneral.localeCompare(biensimilaire.agrementGeneral)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.standing.localeCompare(Bien.standing)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.standing.localeCompare(biensimilaire.standing)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.accessibilite.localeCompare(Bien.accessibilite)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.accessibilite.localeCompare(biensimilaire.accessibilite)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.toutAEgout.localeCompare(Bien.toutAEgout)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.toutAEgout.localeCompare(biensimilaire.toutAEgout)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.qualiteArchitecturale.localeCompare(Bien.qualiteArchitecturale)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.qualiteArchitecturale.localeCompare(biensimilaire.qualiteArchitecturale)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.etatPortesEtFenetres.localeCompare(Bien.etatPortesEtFenetres)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.etatPortesEtFenetres.localeCompare(biensimilaire.etatPortesEtFenetres)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.etatDesToitures.localeCompare(Bien.etatDesToitures)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.etatDesToitures.localeCompare(biensimilaire.etatDesToitures)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.clotureTerrain.localeCompare(Bien.clotureTerrain)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.clotureTerrain.localeCompare(biensimilaire.clotureTerrain)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.nuissanceSonore.localeCompare(Bien.nuissanceSonore)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.nuissanceSonore.localeCompare(biensimilaire.nuissanceSonore)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.voisinageVisaVis.localeCompare(Bien.voisinageVisaVis)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.voisinageVisaVis.localeCompare(biensimilaire.voisinageVisaVis)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.qualiteEnvironnement.localeCompare(Bien.qualiteEnvironnement)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.qualiteEnvironnement.localeCompare(biensimilaire.qualiteEnvironnement)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.proximiteServicesPublics.localeCompare(Bien.proximiteServicesPublics)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.proximiteServicesPublics.localeCompare(biensimilaire.proximiteServicesPublics)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.qualiteDistribution.localeCompare(Bien.qualiteDistribution)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.qualiteDistribution.localeCompare(biensimilaire.qualiteDistribution)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.etatMursPlafonds.localeCompare(Bien.etatMursPlafonds)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.etatMursPlafonds.localeCompare(biensimilaire.etatMursPlafonds)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.solsEtRevetementSols.localeCompare(Bien.solsEtRevetementSols)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.solsEtRevetementSols.localeCompare(biensimilaire.solsEtRevetementSols)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.tailleSejour.localeCompare(Bien.tailleSejour)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.tailleSejour.localeCompare(biensimilaire.tailleSejour)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.expositionSejour.localeCompare(Bien.expositionSejour)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.expositionSejour.localeCompare(biensimilaire.expositionSejour)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.vueSejour.localeCompare(Bien.vueSejour)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.vueSejour.localeCompare(biensimilaire.vueSejour)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.luminosite.localeCompare(Bien.luminosite)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.luminosite.localeCompare(biensimilaire.luminosite)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.cheminee.localeCompare(Bien.cheminee)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.cheminee.localeCompare(biensimilaire.cheminee)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.taille.localeCompare(Bien.taille)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.taille.localeCompare(biensimilaire.taille)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.equipement.localeCompare(Bien.equipement)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.equipement.localeCompare(biensimilaire.equipement)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.etatGeneral.localeCompare(Bien.etatGeneral)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.etatGeneral.localeCompare(biensimilaire.etatGeneral)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.agrement.localeCompare(Bien.agrement)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.agrement.localeCompare(biensimilaire.agrement)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.tailleDesPieces.localeCompare(Bien.tailleDesPieces)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.tailleDesPieces.localeCompare(biensimilaire.tailleDesPieces)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }
    if (biensimilaire.etatDesPieces.localeCompare(Bien.etatDesPieces)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.etatDesPieces.localeCompare(biensimilaire.etatDesPieces)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.expositionAuxBruits.localeCompare(Bien.expositionAuxBruits)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.expositionAuxBruits.localeCompare(biensimilaire.expositionAuxBruits)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.taillePiecesSanitaires.localeCompare(Bien.taillePiecesSanitaires)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.taillePiecesSanitaires.localeCompare(biensimilaire.taillePiecesSanitaires)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.nombreDeSanitaires.localeCompare(Bien.nombreDeSanitaires)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.nombreDeSanitaires.localeCompare(biensimilaire.nombreDeSanitaires)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.qualiteEtatSanitaires.localeCompare(Bien.qualiteEtatSanitaires)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.qualiteEtatSanitaires.localeCompare(biensimilaire.qualiteEtatSanitaires)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.factureEnergetique.localeCompare(Bien.factureEnergetique)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.factureEnergetique.localeCompare(biensimilaire.factureEnergetique)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.installationElectrique.localeCompare(Bien.installationElectrique)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.installationElectrique.localeCompare(biensimilaire.installationElectrique)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.installationGaz.localeCompare(Bien.installationGaz)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.installationGaz.localeCompare(biensimilaire.installationGaz)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.balconLogiaTerasse.localeCompare(Bien.balconLogiaTerasse)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.balconLogiaTerasse.localeCompare(biensimilaire.balconLogiaTerasse)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.caveSousSol.localeCompare(Bien.caveSousSol)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.caveSousSol.localeCompare(biensimilaire.caveSousSol)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.agrementJardin.localeCompare(Bien.agrementJardin)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.agrementJardin.localeCompare(biensimilaire.agrementJardin)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.garageOuParkingOuvert.localeCompare(Bien.garageOuParkingOuvert)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.garageOuParkingOuvert.localeCompare(biensimilaire.garageOuParkingOuvert)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if (biensimilaire.combles.localeCompare(Bien.combles)==1) {
      Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }
    if (Bien.combles.localeCompare(biensimilaire.combles)==1) {
      Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }

    if(Bien.ascenseur.localeCompare("Oui")==1){
    	Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }

    if(Bien.balconOuTerrasse.localeCompare("Oui")==1){
    	Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }

    if(Bien.LibreALaVente.localeCompare("Oui")==1){
    	Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }

    if(typeof Bien.pointsForts !== "undefined"){
    	Bien.prix_reference =
        Bien.prix_reference +
        1000;
    }

    if(typeof Bien.pointsFaibles !== "undefined"){
    	Bien.prix_reference =
        Bien.prix_reference -
        1000;
    }



    Bien.prix_reference= Bien.prix_reference - Bien.chargesAnnuellesTotales;
    Bien.prix_reference= Bien.prix_reference - Bien.chargesDeCopropriete;
    Bien.prix_reference= Bien.prix_reference - Bien.impotsFonciers;
    Bien.prix_reference= Bien.prix_reference - Bien.decoteBienOccupe;
    Bien.prix_reference= Bien.prix_reference - Bien.autresElements;
    Bien.prix_reference= Bien.prix_reference - Bien.travauxARealiser;
    Bien.prix_reference= Bien.prix_reference - Bien.valorisationTerrain;
    Bien.prix_reference= Bien.prix_reference - Bien.renove;





    Bien.prix_reference=Math.round(Bien.prix_reference);
    console.log(Bien.prix_reference);
    return Bien;
  }
  else {

  	var estime=0;
  	var nbr=0;
  	for (var bien = 0; bien < json.maisons.length; bien++) {
  		estime =estime +json.maisons[bien].prix_reference;
        nbr++;
    }
    estime = estime / nbr;
    Bien.prix_reference=Math.round(estime);
    console.log(Bien.prix_reference);
    return Bien;
  }
},


  EstimationCapitalisation: Bien => {
    Bien.prix_capitalisation = (Bien.valeurLocative * 12) / (Bien.tauxCapitalisation / 100);
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.decoteBienOccupe;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.autresElements;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.travauxARealiser;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.valorisationTerrain;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.renove;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.chargesAnnuellesTotales;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.chargesDeCopropriete;
    Bien.prix_capitalisation= Bien.prix_capitalisation - Bien.impotsFonciers;
    Bien.prix_capitalisation=Math.round(Bien.prix_capitalisation);

    console.log(Bien.prix_capitalisation);
    return Bien;
  }




}; 

/*
module.exports.EstimationComparaison(test);
module.exports.EstimationReference(test);
module.exports.EstimationCapitalisation(test);*/
