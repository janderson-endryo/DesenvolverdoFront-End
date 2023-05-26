import { Router, Request, Response } from "express";

const router = Router()

router.get("/", (req: Request, res: Response) => {

    let user = { nome: "janderson", idade: 22 }

    if (user.idade > 17) {
        var maio: string = "adultor"
    } else {
        maio = "adolecente"
    }

    var produtor = [
        { title: "produtor x", preco: 10 },
        { title: "produtor y", preco: 20 },
        { title: "produtor z", preco: 30 }]


    res.render('./home', {
        user,
        condicional: true,
        maio,
        produtor,
        agenda: []


    })
})

router.get("/formulario", (req: Request, res: Response) => {

    res.render("./formulario")
})

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