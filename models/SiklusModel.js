import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Tanaman from "./TanamanModel.js";
import Pupuk from "./PupukModel.js";
import Pemeliharaan from "./PemeliharaanModel.js";
// import Lahan from "./LahanModel.js";

const Siklus = db.define(
    "Siklus",
    {
        id_Siklus: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tanggal_tanam: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tanggal_panen: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status_siklus: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    },
    {
        tableName: "siklus_tanam"
    }
)


Siklus.hasMany(Pupuk, {foreignKey: "PupukId"})
Pupuk.belongsTo(Siklus, {foreignKey: "PupukId"})



// Siklus.hasMany(Pemeliharaan, {foreignKey: "PemeliharaanId"})
// Pemeliharaan.belongsTo(Siklus, {foreignKey :"PemeliharaanId"})

export default Siklus