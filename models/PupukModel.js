import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import Tanaman from "./TanamanModel.js";
import StokPupuk from "./StokPupukModel.js";

const Pupuk = db.define(
    "Pupuk",
    {
        id_Pupuk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tanggal_penggunaan: {
            type: DataTypes.DATE,
            allowNull: false
        },
        jenis_pupuk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jumlah_pupuk: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    },
    {
        tableName: "pupuk"
    }
)


Pupuk.hasMany(StokPupuk, {foreignKey: "PupukId"})
StokPupuk.belongsTo(Pupuk, {foreignKey: "PupukId"})



export default Pupuk