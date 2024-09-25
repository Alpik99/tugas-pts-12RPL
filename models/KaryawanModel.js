import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Siklus from "./SiklusModel.js";


const Karyawan = db.define(
    "Karyawan",
    {
        id_Karyawan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_laryawan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jabatan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        noHP: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shift_kerja: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "karyawan"
    }
)

Karyawan.hasMany(Siklus, {foreignKey: "KaryawanId"})
Siklus.belongsTo(Karyawan, {foreignKey: "KaryawanId"})

export default Karyawan