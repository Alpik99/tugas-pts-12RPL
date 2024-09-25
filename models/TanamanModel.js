import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Siklus from "./SiklusModel.js";
import Pupuk from "./PupukModel.js";

const Tanaman = db.define(
    "Tanaman",
    {
        id_tanaman: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_tanaman: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jenis_tanaman: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lama_tumbuh: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "info_tanaman"
    }
)


Pupuk.hasMany(Tanaman, {foreignKey: "PupukId"})
Tanaman.belongsTo(Pupuk, {foreignKey: "PupukId"})


Tanaman.belongsTo(Siklus, {foreignKey: "TanamanId"})
Siklus.belongsTo(Tanaman, {foreignKey: "TanamanId"})

export default Tanaman