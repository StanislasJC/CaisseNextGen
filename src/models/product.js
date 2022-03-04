const {Sequelize, DataTypes} = require('sequelize');
const { sequelize } = require('./../../utilities/database');

//Définition du modèle Produit
const Product = sequelize.define('Product',
    {
        IdProduct: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ReferenceProduct: {
            type: DataTypes.CHAR(50),
            allowNull: true
        },
        RefExtProduct: {
            type: DataTypes.CHAR(100),
            allowNull: true
        },
        NameProduct: {
            type: DataTypes.CHAR(200),
            allowNull: true
        },
        DesignationProduct: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        DescriptionProduct: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        TvaProduct: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        PriceHTProduct: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        PriceTTCProduct: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        PumpProduct:
        {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        StockRealProduct:
        {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        UniteProduct: {
            type: DataTypes.BIGINT(11),
            allowNull: true
        },
        ToSellProduct: {
            type: DataTypes.CHAR(1),
            defaultValue: '0'
        },
        ToBuyProduct: {
            type: DataTypes.CHAR(1),
            defaultValue: '0'
        },
        BrandProduct: {
            type: DataTypes.BIGINT(11),
            defaultValue: 0
        },
        SizeProduct: {
            type: DataTypes.CHAR(100),
            allowNull: true
        },
        TypeProduct: {
            type: DataTypes.BIGINT(11),
            defaultValue: 0
        },
        ModeProduct: {
            type: DataTypes.BIGINT(11),
            defaultValue: 1
        },
        BarCodeProduct: {
            type: DataTypes.CHAR(50),
            allowNull: true
        },
        SellCodeProduct: {
            type: DataTypes.CHAR(10),
            allowNull: true
        },
        BuyCodeProduct: {
            type: DataTypes.CHAR(10),
            allowNull: true
        },
        CreatedProduct: {
            type: DataTypes.DATE(6),
            allowNull: true
        },
        UpdatedProduct: {
            type: DataTypes.DATE(6),
            allowNull: true
        },
        DeletedProduct: {
            type: DataTypes.DATE(6),
            allowNull: true
        },
        ClasseProduct: {
            type: DataTypes.BIGINT(11),
            defaultValue: 0
        },
        DateProduct: {
            type: DataTypes.DATE(6),
            allowNull: true
        },
        DateUpdateProduct: {
            type: DataTypes.DATE(6),
            allowNull: true
        },
        transfert: {
            type: DataTypes.CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        GroupProductPrice: {
            type: DataTypes.BIGINT(11),
            allowNull: true
        }
    }
);

module.exports = Product