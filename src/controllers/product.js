// Charger les packages
var Product = require("./../models/product");
//var sequelize = require("../utilitaire/database").sequelize;
const { QueryTypes } = require('sequelize');


/* REQUETE GET : ALL PRODUCT */
exports.getAllProduct = function(req, res){
    try{
        console.log('Récupération de la table product !');
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