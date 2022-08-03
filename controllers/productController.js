import Product from "../models/productModel.js";

//for add or fetch
export const getProductController = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).send(products);

    } catch(error) {
        console.log(error);
    }
}