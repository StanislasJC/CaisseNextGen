const {Sequelize} = require('sequelize');

// Variable sequelize 
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './utilities/soburun.sqlite'
  });

//Connexion à la base de données
sequelize.authenticate().then(()=> {
  console.log("Connected to the database !");
}).catch((error) => {
  console.log("Error due to th connection to the database" + error);
})

exports.sequelize = sequelize;
