import { ProductsModel } from "./models/productsModel.js"

export default class ProductsMongo {
    async getProducts(page = 1, limit = 2, category, sort = 'desc') {
        try {
            const filter = category ? { category } : {}
            const howSort = sort

            const resp = await ProductsModel.paginate(filter, {page, limit, sort: {price: howSort}})

            const resProds = resp.docs.map(doc => doc.toObject())

            const prevLink = resp.hasPrevPage ? `http://localhost:8080/mongo/products?page=${resp.prevPage}` : null
            const nextLink = resp.hasNextPage ? `http://localhost:8080/mongo/products?page=${resp.nextPage}` : null

            return {
                status: 'success',
                payload: {
                    products: resProds,
                    info: {
                        count: resp.docs.lenght,
                        pages: resp.totalPages,
                        page: resp.page,
                        hasPrevPage: resp.hasPrevPage,
                        hasNextPage: resp.hasNextPage,
                        prevLink,
                        nextLink
                    }
                }
            }

        } catch (error) {
            console.error(error)
        }
    } 

    async getProductsById(pid) {
        try {
            const product = await ProductsModel.findById(pid)
            return product
        } catch (error) {
            console.error(error)
        }
    }

    async updateProduct(pid, obj) {
        try {
            const productToUpdate = await ProductsModel.findByIdAndUpdate(pid, obj, { new: true})
            return productToUpdate
        } catch (error) {
            console.error(error)
        }
    }

    async deleteProduct(pid) {
        try {
            const productToDelete = await ProductsModel.findByIdAndDelete(pid)
            return productToDelete
        } catch (error) {
            console.error(error)
        }
    }

    async newProduct(obj) {
        try {
            const product = await ProductsModel.create(obj)
            return product
        } catch (error) {
            console.error(error)
        }
    }
}