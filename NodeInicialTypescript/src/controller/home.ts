import {Request,Response} from "express";
import {produtor} from "../models/Produtos"

export const home = (req: Request, res: Response) => {

    let user = { nome: "janderson", idade: 22 }

    if (user.idade > 17) {
        var maio: string = "adultor"
    } else {
        maio = "adolecente"
    }

    const list = produtor.getALL

    res.render('./home', {
        user,
        condicional: true,
        maio,
        agenda: [],
        list
    })

}