import {Request,Response} from 'express'

export const form = (req: Request, res: Response) => {
    res.render("./formulario")
}