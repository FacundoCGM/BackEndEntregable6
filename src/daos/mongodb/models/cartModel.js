import {Schema, model} from 'mongoose'

const CartSchema = new Schema ({
    products: [{
        product: {
            prod: {
                type: Schema.Types.ObjectId,
                ref: 'product',
                default: []
            },
            quantity: Number
        },
    }]
})

CartSchema.pre('find', function(){
    this.populate('products')
})

export const CartModel = model(
    'cart',
    CartSchema
)