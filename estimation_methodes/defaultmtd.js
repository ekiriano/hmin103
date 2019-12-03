module.exports = {
  
  defaultEstimationAppartment : DefaultAppartment => {
    var json = require("../datasets/AppartementData.json");

    var biensimilaire;

    if(json.maisons[0].code_postal.localeCompare(DefaultAppartment.code_postal)==0){
    for (var bien = 0; bien < json.maisons.length; bien++) {
      if (
        json.maisons[bien].surface - 5 <=
          DefaultAppartment.surface ||
        DefaultAppartment.surface <=
          json.maisons[bien].surface + 5) {
          biensimilaire = json.maisons[bien];
      }
    }
  

  var a = biensimilaire.surface;
  var b = DefaultAppartment.surface;
  var c = biensimilaire.prix_estimation;
  DefaultAppartment.prix_estimation = (b * c) / a;

  if (biensimilaire.nombre_pieces > DefaultAppartment.nombre_pieces) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000 * (biensimilaire.nombre_pieces - DefaultAppartment.nombre_pieces);
    }
    if (DefaultAppartment.nombre_pieces > biensimilaire.nombre_pieces) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000 * (DefaultAppartment.nombre_pieces - biensimilaire.nombre_pieces);
    }


    if (biensimilaire.nombre_salle_bain > DefaultAppartment.nombre_salle_bain) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000 * (biensimilaire.nombre_salle_bain - DefaultAppartment.nombre_salle_bain);
    }
    if (DefaultAppartment.nombre_salle_bain > biensimilaire.nombre_salle_bain) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000 * (DefaultAppartment.nombre_salle_bain - biensimilaire.nombre_salle_bain);
    }



    if (biensimilaire.etage > DefaultAppartment.etage) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000 * (biensimilaire.etage - DefaultAppartment.etage);
    }
    if (DefaultAppartment.etage > biensimilaire.etage) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000 * (DefaultAppartment.etage - biensimilaire.etage);
    }



    if (biensimilaire.nombre_etage_total > DefaultAppartment.nombre_etage_total) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000 * (biensimilaire.nombre_etage_total - DefaultAppartment.nombre_etage_total);
    }
    if (DefaultAppartment.nombre_etage_total > biensimilaire.nombre_etage_total) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000 * (DefaultAppartment.nombre_etage_total - biensimilaire.nombre_etage_total);
    }



    if (biensimilaire.diagnostic_performance_energetique.localeCompare(DefaultAppartment.diagnostic_performance_energetique)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000;
    }
    if (DefaultAppartment.diagnostic_performance_energetique.localeCompare(biensimilaire.diagnostic_performance_energetique)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000;
    }

    if (biensimilaire.qualite_appartement.localeCompare(DefaultAppartment.qualite_appartement)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000;
    }
    if (DefaultAppartment.qualite_appartement.localeCompare(biensimilaire.qualite_appartement)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000;
    }


    if (biensimilaire.etat_bien.localeCompare(DefaultAppartment.etat_bien)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000;
    }
    if (DefaultAppartment.etat_bien.localeCompare(biensimilaire.etat_bien)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000;
    }

    if (biensimilaire.luminosite.localeCompare(DefaultAppartment.luminosite)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000;
    }
    if (DefaultAppartment.luminosite.localeCompare(biensimilaire.luminosite)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000;
    }

    if (biensimilaire.calme.localeCompare(DefaultAppartment.calme)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000;
    }
    if (DefaultAppartment.calme.localeCompare(biensimilaire.calme)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000;
    }


    if (biensimilaire.proximite_transports.localeCompare(DefaultAppartment.proximite_transports)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation +
        1000;
    }
    if (DefaultAppartment.proximite_transports.localeCompare(biensimilaire.proximite_transports)==1) {
      DefaultAppartment.prix_estimation =
        DefaultAppartment.prix_estimation -
        1000;
    }




    DefaultAppartment.prix_estimation=Math.round(DefaultAppartment.prix_estimation);
    console.log(DefaultAppartment.prix_estimation);
    return DefaultAppartment;
  }

  else {
    var nbr=0;
    var estime=0;
    var surfacemoy=0;
    var estimmation=0;

    for(var bien=0;bien<json.maisons.length;bien++){
      estime=estime+json.maisons[bien].prix_estimation;
      surfacemoy=surfacemoy + json.maisons[bien].surface;
      nbr++;
    }
    surfacemoy=surfacemoy/nbr;
    estime=estime/nbr;
    var a= surfacemoy;
    var b= DefaultAppartment.surface;
    var c = estime;
    estimmation = Math.round( (b*c)/a) ;
    DefaultAppartment.prix_estimation = estimmation;
    return DefaultAppartment;
  }
},

  defaultEstimationHouse: DefaultHouse => {
    var json = require("../datasets/HouseData.json");

    var biensimilaire;

    if(json.maisons[0].code_postal.localeCompare(DefaultHouse.code_postal)==0){
    for (var bien = 0; bien < json.maisons.length; bien++) {
      if (
        json.maisons[bien].surface_habitable - 5 <=
          DefaultHouse.surface_habitable ||
        DefaultHouse.surface_habitable <=
          json.maisons[bien].surface_habitable + 5) {
          biensimilaire = json.maisons[bien];
      }
    }
  

  var a = biensimilaire.surface_habitable;
  var b = DefaultHouse.surface_habitable;
  var c = biensimilaire.prix_estimation;
  DefaultHouse.prix_estimation = (b * c) / a;

  if (biensimilaire.nombre_niveaux > DefaultHouse.nombre_niveaux) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000 * (biensimilaire.nombre_niveaux - DefaultHouse.nombre_niveaux);
    }
    if (DefaultHouse.nombre_niveaux > biensimilaire.nombre_niveaux) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000 * (DefaultHouse.nombre_niveaux - biensimilaire.nombre_niveaux);
    }

      if (biensimilaire.nombre_pieces > DefaultHouse.nombre_pieces) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000 * (biensimilaire.nombre_pieces - DefaultHouse.nombre_pieces);
    }
    if (DefaultHouse.nombre_pieces > biensimilaire.nombre_pieces) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000 * (DefaultHouse.nombre_pieces - biensimilaire.nombre_pieces);
    }


    if (biensimilaire.nombre_salle_bain > DefaultHouse.nombre_salle_bain) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000 * (biensimilaire.nombre_salle_bain - DefaultHouse.nombre_salle_bain);
    }
    if (DefaultHouse.nombre_salle_bain > biensimilaire.nombre_salle_bain) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000 * (DefaultHouse.nombre_salle_bain - biensimilaire.nombre_salle_bain);
    }



    if (biensimilaire.nombre_etage_total > DefaultHouse.nombre_etage_total) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000 * (biensimilaire.nombre_etage_total - DefaultHouse.nombre_etage_total);
    }
    if (DefaultHouse.nombre_etage_total > biensimilaire.nombre_etage_total) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000 * (DefaultHouse.nombre_etage_total - biensimilaire.nombre_etage_total);
    }



    if (biensimilaire.diagnostic_performance_energetique.localeCompare(DefaultHouse.diagnostic_performance_energetique)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.diagnostic_performance_energetique.localeCompare(biensimilaire.diagnostic_performance_energetique)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }

    if (biensimilaire.qualite_maison.localeCompare(DefaultHouse.qualite_maison)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.qualite_maison.localeCompare(biensimilaire.qualite_maison)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }

        if (biensimilaire.qualite_toiture.localeCompare(DefaultHouse.qualite_toiture)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.qualite_toiture.localeCompare(biensimilaire.qualite_toiture)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }


    if (biensimilaire.etat_bien.localeCompare(DefaultHouse.etat_bien)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.etat_bien.localeCompare(biensimilaire.etat_bien)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }

    if (biensimilaire.luminosite.localeCompare(DefaultHouse.luminosite)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.luminosite.localeCompare(biensimilaire.luminosite)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }

    if (biensimilaire.calme.localeCompare(DefaultHouse.calme)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.calme.localeCompare(biensimilaire.calme)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }


    if (biensimilaire.proximite_transports.localeCompare(DefaultHouse.proximite_transports)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation +
        1000;
    }
    if (DefaultHouse.proximite_transports.localeCompare(biensimilaire.proximite_transports)==1) {
      DefaultHouse.prix_estimation =
        DefaultHouse.prix_estimation -
        1000;
    }




    DefaultHouse.prix_estimation=Math.round(DefaultHouse.prix_estimation);
    console.log(DefaultHouse.prix_estimation);
    return DefaultHouse;
  }

  else {
        var nbr=0;
    var estime=0;
    var surfacemoy=0;
    var estimmation=0;

    for(var bien=0;bien<json.maisons.length;bien++){
      estime=estime+json.maisons[bien].prix_estimation;
      surfacemoy=surfacemoy + json.maisons[bien].surface_habitable;
      nbr++;
    
  }

  surfacemoy=surfacemoy/nbr;
  estime=estime/nbr;

  var a= surfacemoy;
  var b= DefaultHouse.surface_habitable;
  var c = estime;
  estimmation = Math.round( (b*c)/a) ;
  DefaultHouse.prix_estimation = estimmation;
  return DefaultHouse;
}
}
};



/*module.exports.defaultEstimationHouse(test1);
module.exports.defaultEstimationAppartment(test);*/
