import express, {Request, Response} from "express"

const server = express()


server.get('/', (req: Request, res: Response) => {
    res.send("ola mundo")
})

server.get('/noticia/:slug',(req :Request, res: Response)=> {
    let slug: string = req.params.slug
    res.send(`noticia ${slug}`) 
})

server.get('/voo/:origem-:destino',(req: Request, res: Response) => {
    let {origem, destino} = req.params

    res.send(`procurando o voo de ${origem} ate ${destino}`)
})

server.listen(8090)