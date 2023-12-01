import ProductsMongo from "../daos/mongodb/productsDao.js"
const productsMongo = new ProductsMongo()

export const getProducts = async(page, limit, category, sort) => {
    try {
        return await productsMongo.getProducts(page, limit, category, sort)
    } catch(error) {
        console.error(error)
    }
}

export const getProductsById = async(pid) => {
    try {
        const product = await productsMongo.getProductsById(pid)
        if (!product) return false
        else return product
    } catch(error) {
        console.error(error)
    }
}