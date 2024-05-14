import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const catSchema = db.define("cats", {
  cat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  breed: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
