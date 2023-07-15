import { Response, Request } from "express";
import { User } from "../models/user";
import { Op } from "sequelize";

export const home1 = async (req: Request, res: Response) => {


    res.render("./pages/home2")
}

export const home2 = async (req: Request, res: Response) => {
    const usuario3: string = req.body.nome as string

    let [usuario, create] = await User.findOrBuild({
        where: {nome: {
            [Op.like]: `%${usuario3}%`
        }},
        defaults: {
            nome:usuario3
        }
    })

    console.log(`create: ${create}`)

    res.render("./pages/home2",{
        usuario,
        create
    })
}
export const home = async (req: Request, res: Response) => {



    const usuarios = await User.findAll({
        where: {
            id: {
                [Op.gte]: 1
            }
        },
        order: [
            ["id", "DESC"]
        ]
    })


    res.render("./pages/home", {
        usuarios
    })

}

export const form = async (req: Request, res: Response) => {

    let nome: string = req.body.nome as string
    User.create({
        nome: nome
    })

    res.redirect("/")

}

export const modificar = async (req: Request, res: Response) => {

    let nome: string = req.body.nome as string

    let n: string = req.body.n as string

    User.update({ nome: n }, {
        where: {
            nome: {
                [Op.like]: `%${nome}%`
            }
        }
    }
    )

    res.redirect("/")


}

export const destruit = async (req: Request, res: Response) => {

    let id: String = req.params.id as string

    User.destroy({
        where: {
            id: id
        }
    })

    res.redirect("/")
}


