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

export const updateProduct = async(pid, obj) => {
    try {
        return await productsMongo.updateProduct(pid, obj)
    } catch(error) {
        console.error(error)
    }
}

export const deleteProduct = async(pid) => {
    try {
        return await productsMongo.deleteProduct(pid)
    } catch(error) {
        console.error(error)
    }
}

export const newProduct = async(obj) => {
    try {
        return await productsMongo.newProduct(obj)
    } catch(error) {
        console.error(error)
    }
}