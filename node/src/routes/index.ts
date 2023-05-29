import { Router, Request, Response } from "express";

import * as homerController from "../controller/home" 
import * as formcontroller from "../controller/form"

const router = Router()

router.get("/",homerController.home )

router.get("/formulario",formcontroller.form)

router.get("/cc/:teste", (req: Request, res: Response) => {

    let teste: string = req.params.teste
    res.render(`./cc/:${teste}`)
})

router.get("/nome", (req: Request, res: Response) => {

    console.log(req.query)

    let nome: string = req.query.nome as string
    let idade: string = req.query.idade as string
    res.render("./nome", {
        nome,
        idade
    })
})

router.get("/ano", (req: Request, res: Response) => {

    res.render("./ano")
})

router.post("/ano", (req: Request, res: Response) => {

    let idade: number = 0
    if (req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
    }
    res.render("./ano", {
        idade
    })
})

export default router