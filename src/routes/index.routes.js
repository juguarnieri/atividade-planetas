import { Router } from "express"

const routes = Router()

routes.get("/",(req, response) => {
    return response.status(200).send({ message: "Servidor rodando"})
})

routes.use("/doces", docesRoutes)
routes.use("/filmes", filmesRoutes)

export default routes