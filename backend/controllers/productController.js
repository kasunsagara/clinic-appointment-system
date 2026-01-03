import Product from "../models/product.js";

export async function createProduct(req, res) {
    try {
        const product = new Product(req.body)

        await product.save()

        res.json({
            message: "Product created"
        })
    } catch(error) {
        res.json({
            message: "Not product created"
        })
    }
}

export async function getProducts(req, res) {
    try {
        const productList = await Product.find()

        res.json({
            list: productList
        })
    } catch(error) {
        res.json({
            error: error.message
        })
    }
}

export async function getProductByName(req, res) {
    try {
        const product = await Product.findOne({productName: req.params.productName})

        res.json({
            product: product
        })
    } catch(error) {
        res.json({
            error: error.message
        })
    }
}

export async function deleteProduct(req, res) {
    try {
        await Product.deleteOne({productName: req.params.productName})

        res.json({
            message: "Product deleted"
        })
    } catch(error) {
        res.json({
            message: "Not product deleted"
        })
    }
}

