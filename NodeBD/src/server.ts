import  express  from "express";
import dotenv from "dotenv"
import path from "path"

dotenv.config()
const server = express()

import mustache from "mustache-express"

server.set("view engine", "mustache");
server.set("views",path.join(__dirname,"views"))
server.engine("mustache", mustache())

import router from "./routes/index";

server.use(router)

server.listen(process.env.PORT)