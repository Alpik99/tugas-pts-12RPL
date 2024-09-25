import db from "../utils/connection.js";
import Lahan from "./LahanModel.js";
import Tanaman from "./TanamanModel.js";
import Siklus from "./SiklusModel.js";
import Panen from "./PanenModel.js";
import Karyawan from "./KaryawanModel.js";
import Pupuk from "./PupukModel.js";
import Pengairan from "./PengairanModel.js";
import Pemeliharaan from "./PemeliharaanModel.js";
import Supplier from "./SupplierModels.js";
import StokPupuk from "./StokPupukModel.js";

await db.sync({ alter: true });