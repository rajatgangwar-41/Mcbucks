import express from "express";
import { getProductController } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/getproducts", getProductController);

export default productRouter;