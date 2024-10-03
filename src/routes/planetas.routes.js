import { Router } from "express"

const planetasRoutes = Router()

let planetas = [
    {
        id: Number(Math.floor(Math.random() * 999999) + 1),
        nome: "Dev",
        temperatura: 14.0,
        água: false,  //Indicação de existencia de água
        atm:["JS", "NODE", "VS", "Code"]
    },
]

//Rota para buscar todos os elementos do array planetas
planetasRoutes.get("/",(req, res) => {
    return res.status(200).send(planetas)
})

//Rota para adicionar um novo planeta
planetasRoutes.post("/",(req, res) => {
    const {titulo, genero, emCartaz} = req.body


    const novoFilme = {
        id:Number(Math.floor(Math.random() * 99) + 1),
        titulo,
        genero,
        emCartaz,
    }

    planetas.push(novoFilme);
    return res.status(201).send(planetas)
})

//Rota para buscar um elemento específico do array planetas
planetasRoutes.get("/:id", (req, res) => {
    const { id } = req.params
    
    //console.log(id)
    
    const filme = planetas.find((movie) =>  movie.id === Number (id))
    
    //console.log(filme)
    
        if(!filme) {
            return res.status(404).send({message: "filme não encontrada!" })
        }
    
        return res.status(200).send(filme)
    })

//Rota para editar um filme
planetasRoutes.put("/:id", (req, res) => {
    const { id } = req.params
    
    const filme = planetas.find((movie) =>  movie.id === Number(id))
        //console.log(filme)
    
        if(!filme) {
            return res.status(404).send({message: "Filme não encontrado!" })
        }
    
        const { titulo, genero, emCartaz } = req.body
        //console.log(titulo)
    
        filme.titulo = titulo
        filme.genero = genero
        filme.emCartaz = emCartaz
    
        return res.status(200).send({message:"Filme atualizado!",
            filme,
        })
    })
    //Rota para deletar um filme marcante
planetasRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const filme = planetas.find((movie) =>  movie.id === Number(id))

    if(!filme) {
        return res.status(404).send({message: "Filme não encontrado!" }

        )}
        planetas = planetas.filter((movie) => movie.id !== Number(id))

    return res.status(200).send({
        message: "Filme deletado!",
        filme,
    })
})
export default planetasRoutes;

    