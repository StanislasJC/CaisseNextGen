const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './utilities/soburun.sqlite'
  });

try {
    sequelize.authenticate();
    console.log("Connected to the database !");
} catch (error) {
    console.log("Error due to th connection to the database" + error);
}

