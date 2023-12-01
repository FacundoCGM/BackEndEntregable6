import { ProductsModel } from "./models/productsModel.js"
import { CartModel } from "./models/cartModel.js"

export default class CartMongo {

    async newCart() {
        try {
            const newCart = new CartModel ({
                products: []
            })
            await newCart.save()
            return newCart
        } catch (error) {
            console.error(error)
        }
    }

    async saveToCart(cid, pid) {
        try {
            const productToSave = await ProductsModel.findById(pid)
            const cart = await CartModel.findById(cid)

            const productExists = cart.products.findIndex((allProducts) => allProducts.product.prod === pid)
            if (productExists !== -1) {
                cart.products.product[productExists].quantity += 1
            } else {
                cart.products.push({
                    product: pid,
                    quantity: 1
                })
            }
            cart = await cart.save()
            return cart
        } catch (error) {
            console.error(error)
        }
    }

    async cleanCart(cid) {
        try {
            const cart = await CartModel.findById(cid)
            cart.products = []
            const cleanCart = await cart.save()
            return cleanCart
        } catch (error) {
            console.error(error)
        }
    } 
}

