import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg"

export interface userbd extends Model {
    id: number,
    nome: string
}

export const User = sequelize.define<userbd>("user", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING
    }

}, {
    tableName: "users",
    timestamps:false
})