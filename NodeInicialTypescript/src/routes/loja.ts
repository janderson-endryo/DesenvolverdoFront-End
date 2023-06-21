import { Router,Response,Request } from "express";

const router = Router()

router.get("/",(req: Request, res:Response)=>{
    res.send("painel")
})

router.get("/:tt",(req:Request, res:Response)=>{
    let tt: string = req.params.tt
    res.send(`tt ${tt}`)
})

export default router