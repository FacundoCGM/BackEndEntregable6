import * as service from '../service/productsService.js'

export const getProducts = async(req, res, next) => {
    try {
        const {page, limit, category, sort} = req.query
        const products = await service.getProducts(page, limit, category, sort)
        res.json(products)
    } catch(error) {
        next(error)
    }
}

export const getProductsById = async(req, res, next) => {
    try {
        const { pid } = req.params
        const product = await service.getProductsById(pid)
        if(!product) res.status(400).json({ msg: "Producto no encontrado." })
        else res.json(product)
    } catch(error) {
        next(error)
    }
}