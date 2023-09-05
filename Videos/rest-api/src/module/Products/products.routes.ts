import { Router } from "express";
import { createProductsController } from "./useCases/create-products";
import { deleteProductController, deleteProductMiddleware } from "./useCases/delete-products";
import { getProductByIdController, getProductByIdMiddleware } from "./useCases/get-products-by-id";
import { patchProductController, patchProductMiddleware } from "./useCases/patch-products";
import { getProductListController, getProductListMiddleware } from "./useCases/get-products-list";
import createProductMiddleware from "./useCases/create-products/create-products.middleware";

const ProductRoutes = Router()

.post('/product/', createProductMiddleware,
	(req, res) => createProductsController.handle(req, res)
)
.get('/product/:id', getProductByIdMiddleware,
	(req, res) => getProductByIdController.handle(req, res)
)
.get('/product/list/all', getProductListMiddleware,
	(req, res) => getProductListController.handle(req, res)
)
.patch('/product/:id', patchProductMiddleware,
	(req, res) => patchProductController.handle(req, res)
)
.delete('/product/:id', deleteProductMiddleware,
	(req, res) => deleteProductController.handle(req, res)
)

export default ProductRoutes