import { Router } from "express"
import * as controller from '../controller/productsController.js'

const routerMongo = Router()

routerMongo.get('/', controller.getProducts)

routerMongo.get('/:pid', controller.getProductsById)

export default routerMongo