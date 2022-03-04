// Charger les packages
//const { findByPk } = require("../models/agent");
var Agent = require("../models/product");
//var sequelize = require("../utilitaire/database").sequelize;
const { QueryTypes } = require('sequelize');


// Création d'un point de terminaison GET /api/agents
// Lister les agents
exports.getAllProduct = function(req, res){
    try{
        console.log('Connecté à la base de données MySQL!');
        Product.findAll().then((results, err) => {
            if(err){
                console.error("Erreur lecture", 1);
                res.status(500).send('Erreur lecture!');
            }else{
                console.log(results);
            }
          });
    } catch (error) {
        console.error('Impossible de se connecter, erreur suivante :', error);
        res.status(500).send('Erreur serveur!');
    }
}