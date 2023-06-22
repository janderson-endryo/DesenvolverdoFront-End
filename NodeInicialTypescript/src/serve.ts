import express ,{Response, Request} from "express"
import path from "path"
import mustache from "mustache-express"
import dotenv from "dotenv"

dotenv.config()

const server = express()
server.use(express.urlencoded({extended: true}))


server.set("view engine", "mustache");
server.set("views",path.join(__dirname,"views"));
server.engine("mustache", mustache());

import mainrouter from "./routes/index"
import painelrouter from "./routes/loja"


server.use(mainrouter)

server.use("/painel", painelrouter)

server.use(express.static(path.join(__dirname,"../public")))

server.use((req: Request, res: Response)=>{
    res.status(404).send("pagina nao encontrada")
})

server.listen(process.env.PORT)