import { Response, Request } from "express";
import { User } from "../models/user";
import { Op } from "sequelize";


export const home = async (req: Request, res: Response) => {


    let usuarios = await User.findAll({
        where: {
            id: {
                [Op.gte]: 1
            }
        },
        order: [
            ["id", "ASC"]
        ],
        offset:6,
        limit: 2
    })

    res.render("./pages/home", {
        usuarios
    })


}