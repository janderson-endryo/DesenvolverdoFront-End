import { Router } from "express";

import { home, form, modificar, destruit, home2, home1} from "../controllers/HomeController";
const router = Router()

router.get("/", home)

router.post("/formulario",form)

router.post("/modificar", modificar)

router.get("/usuarios/:id/excluir",destruit)

router.post("/des",destruit)

router.get("/home1",home1)

router.post("/home2",home2)





export default router