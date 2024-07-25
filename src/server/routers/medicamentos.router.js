import { Router } from 'express'
import * as medicamentosController from '../controllers/medicamentos.controller.js'
import { authToken } from '../middlewares/medicamentos.middleware.js' //Segurizacion 

const router = Router()

//Este codigo esta segurizado, como se sabe, por que en la linea 3 esta el authtoken usando el JWT
router.get('/medicamentos', authToken, medicamentosController.findAll)
router.get('/medicamentos/:id', authToken, medicamentosController.findById)
router.post('/medicamentos', authToken, medicamentosController.create)
router.put('/medicamentos/:id', authToken, medicamentosController.updateById)
router.delete('/medicamentos/:id', authToken,medicamentosController.deleteById)

export default router
