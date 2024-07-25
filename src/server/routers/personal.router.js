
//Parte 2: Parte 1 esta en medicamentos.middlewere.js
//Al codigo le falta el la segurizacion del authtoken.
//Y al mismo tiempo le falta el middlewere para personal para evitar inyecciones en el codigo. 
//Como un ejemplo es el middlewere de medicamentos, y tambien el authtoken que evita ver, ingresar, modificar o eliminar un dato.
//A menos que tenga el token proporcionado y asi poder hacer lo que se dijo anteriormente.

import { Router } from 'express'
import * as personalController from '../controllers/personal.controller.js'
//Falta de middlewere 

const router = Router()

router.get('/personal', personalController.findAll) //Falta de authtoken
router.get('/personal/:id', personalController.findById) //Falta de authtoken
router.post('/personal', personalController.create) //Falta de authtoken
router.put('/personal/:id', personalController.updateById) //Falta de authtoken
router.delete('/personal/:id', personalController.deleteById) //Falta de authtoken

export default router
