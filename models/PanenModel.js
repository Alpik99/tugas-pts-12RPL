import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Tanaman from "./TanamanModel.js";

const Panen = db.define(
    "Panen",
    {
        id_Panen: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tanggal_panen: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hasil_panen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kualitas_panen: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    },
    {
        tableName: "panen"
    }
)


Tanaman.hasMany(Panen, {foreignKey: "TanamanId"})
Panen.hasMany(Tanaman, {foreignKey: "TanamanId"})


export default Panen