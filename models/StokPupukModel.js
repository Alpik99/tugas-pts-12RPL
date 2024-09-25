import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pupuk from "./PupukModel.js";

const StokPupuk = db.define(
    "StokPupuk",
    {
        id_Stok: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_pupuk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jumlah_pupuk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jenis_pupuk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deskripsi :{
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "StokPupuk"
    }
)

// Pupuk.hasMany(StokPupuk, {foreignKey: "StokPupukId"})
// StokPupuk.belongsTo(Pupuk, {foreignKey: "StokPupukId"})

export default StokPupuk