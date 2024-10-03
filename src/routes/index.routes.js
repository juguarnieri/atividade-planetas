import { Router } from "express"

import planetasRoutes from "./planetas.routes.js"

const routes = Router()

routes.get("/",(req, response) => {
    return response.status(200).send({ message: "Servidor rodando"})
})

routes.use("/planetas", planetasRoutes)

export default routes