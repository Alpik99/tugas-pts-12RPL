import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Siklus from "./SiklusModel.js";

const Pemeliharaan = db.define(
    "Pemeliharaan",
    {
        id_Pemeliharaan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tanggal_pemeliharaan: {
            type: DataTypes.DATE,
            allowNull: false
        },
        jenis_pemeliharaan: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "pemeliharaan"
    }
)




export default Pemeliharaan