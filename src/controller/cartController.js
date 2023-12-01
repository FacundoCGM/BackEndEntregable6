import * as cartServ from '../service/cartService.js'

export const newCart = async(req, res, next) => {
    try {
        const newCart = await cartServ.newCart()
        res.json(newCart)
    } catch(error) {
        next(error)
    }
}

export const saveToCart = async(req, res, next) => {
    try {
        const {cid, pid} = req.params
        const cartSaved = await cartServ.saveToCart(cid, pid)
        res.json(cartSaved)
    } catch(error) {
        next(error)
    }
}

export const cleanCart = async(req, res, next) => {
    try {
        const { cid } = req.params
        const cleanCart = await cartServ.cleanCart(cid)
        res.json(cleanCart)
    } catch(error) {
        next(error)
    }
}