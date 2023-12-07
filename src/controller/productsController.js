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

export const updateProduct = async(req, res, next) => {
    try {
        const { pid } = req.params
        const { obj } = req.body
        const updatedProduct = await service.updateProduct(pid, obj)
        res.json({msg: `Producto actualizado: ${updatedProduct}`})
    } catch(error) {
        next(error)
    }
}

export const deleteProduct = async(req, res, next) => {
    try {
        const { pid } = req.params
        const deletedProduct = await service.deleteProduct(pid)
        res.json({msg: `Producto eliminado: ${deletedProduct}`})
    } catch(error) {
        next(error)
    }
}

export const newProduct = async(req, res, next) => {
    try {
        const { obj } = req.body 
        const product = await service.newProduct(obj)
        res.json(product)
        console.log(req.body)
    } catch(error) {
        next(error)
    }
}