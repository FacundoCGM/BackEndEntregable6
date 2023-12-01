import CartMongo from "../daos/mongodb/cartDao.js"
const cartMongo = new CartMongo()

export const newCart = async() => {
    try {
        return await cartMongo.newCart()
    } catch (error) {
        console.error(error)
    }
}

export const saveToCart = async(cid, pid) => {
    try{
        return await cartMongo.saveToCart(cid, pid)
    } catch (error) {
        console.error(error)
    }
}

export const cleanCart = async(cid) => {
    try {
        return await cartMongo.cleanCart(cid)
    } catch (error) {
        console.error(error)
    }
}