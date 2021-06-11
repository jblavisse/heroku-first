// Le fichier index.js dans le dossier models
// va servir à l'initialisation de l'ORM
// + à la liaison avec des modèles qui sont dans d'autres fichiers

// Récupérer le paquet de sequelize dans npm
const {DataTypes, Sequelize} = require('sequelize');

// const dotenv = require('dotenv');

// // Ca va envoyer dans la variable process.env, tous les paramètres
// // dans le fichier .env
// dotenv.config();

// Créer une instance de sequelize avec les paramètres de la BDD
const sequelize = new Sequelize(
    process.env.DATABASE_URL
);


const Customer = sequelize.define('Customer', {
    firstname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(14),
        allowNull: true
    }
}, {
        underscored: true,
        tableName: 'customer'
})

module.exports = sequelize;