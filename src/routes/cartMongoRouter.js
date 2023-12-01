import { Router } from "express"
import * as cartController from "../controller/cartController.js"

const routerCartMongo = Router()

routerCartMongo.post('/', cartController.newCart)

routerCartMongo.post('/:cid/product/:pid', cartController.saveToCart)

routerCartMongo.delete('/cart/cid', cartController.cleanCart)

export default routerCartMongo