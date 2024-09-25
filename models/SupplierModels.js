import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pupuk from "./PupukModel.js";


const Supplier = db.define(
    "Supplier",
    {
        id_Supplier: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        jumlah_pupuk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_telepon: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    },
    {
        tableName: "supplier"
    }
)


Supplier.hasMany(Pupuk, {foreignKey: "SupplierId"});
Pupuk.belongsTo(Supplier, {foreignKey: "SupplierId"});



export default Supplier