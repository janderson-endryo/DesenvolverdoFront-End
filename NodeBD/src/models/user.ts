import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg"

export interface userbd extends Model {
    id: number,
    nome: string
}

export const User = sequelize.define<userbd>("user", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
    },

    nome: {
        type: DataTypes.STRING,
        get() {
            let raw = this.getDataValue("nome")
            return raw.toUpperCase()
        },

        set(val:string) {
            if (val != "janderson") {
                val = "erro"
            }
            this.setDataValue("nome",val)
        },
    },

    virtualName: {
        type: DataTypes.VIRTUAL,
        get() {
            let name: string = this.getDataValue("nome")
            return name.charAt(0)

        }
    }

}, {
    tableName: "users",
    timestamps:false
})