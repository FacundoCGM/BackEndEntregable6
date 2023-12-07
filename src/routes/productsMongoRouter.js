import { Router } from "express"
import * as controller from '../controller/productsController.js'

const routerMongo = Router()

routerMongo.get('/', controller.getProducts)

routerMongo.get('/:pid', controller.getProductsById)

routerMongo.put('/:pid', controller.updateProduct)

routerMongo.delete('/:pid', controller.deleteProduct)

routerMongo.post('/', controller.newProduct)

export default routerMongo