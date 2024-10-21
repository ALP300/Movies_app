import { Router } from "express"
import { TraerPeliculas } from "../services/conexion.js"
const router= Router()

router.get('/', (req, res) => res.render('index',{title: 'Mi primer proyecto en NodeJS'}))
router.get('/about', (req, res) => res.render('about',{title:'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contáctanos'}))

router.get('/api/get-peliculas', async(req,res)=>{
    const peliculas= await TraerPeliculas()
    res.status(200).json(peliculas)
})
export default router