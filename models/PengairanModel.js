import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Lahan from "./LahanModel.js";

const Pengairan = db.define(
    "Pengairan",
    {
        id_Pengairan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tanggal_pengairan: {
            type: DataTypes.DATE,
            allowNull: false
        },
        jumlah_air: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "pengairan"
    }
)

Pengairan.hasMany(Lahan, {foreignKey: "LahanId"})
Lahan.belongsTo(Pengairan, {foreignKey: "LahanId"})

export default Pengairan