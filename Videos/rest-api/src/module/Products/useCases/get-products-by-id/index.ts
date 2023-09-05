import ProductRepository from "../../products.repository";
import GetProductByIdController from "./get-product-by-id.controller";
import getProductByIdMiddleware from "./get-product-by-id.middleware";
import GetProductByIdUseCase from "./get-product-by-id.service";


const getProductByIdUseCase = new GetProductByIdUseCase(
	new ProductRepository
)
const getProductByIdController = new GetProductByIdController(getProductByIdUseCase)

export {
	getProductByIdController,
	getProductByIdMiddleware
}