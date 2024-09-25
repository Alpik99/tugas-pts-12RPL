import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Tanaman from "./TanamanModel.js";

const Lahan = db.define(
    "Lahan",
    {
        id_lahan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_lahan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lokasi: {
            type: DataTypes.STRING,
            allowNull: false
        },
        luas_lahan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jenis_lahan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_lahan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },
    {
        tableName: "lahan"
    }
)

Lahan.hasMany(Tanaman, {foreignKey: "LahanId"})
Tanaman.belongsTo(Tanaman, {foreignKey: "LahanId"})



export default Lahan