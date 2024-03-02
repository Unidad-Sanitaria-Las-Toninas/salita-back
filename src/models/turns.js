import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database.js";

export class Turns extends Model {}
Turns.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paciente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profesion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
    sequelize,
    modelName: "turnos"
});

export default Turns