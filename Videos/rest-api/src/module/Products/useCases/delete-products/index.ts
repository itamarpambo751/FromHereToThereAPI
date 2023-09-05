import ProductRepository from "../../products.repository";
import DeleteProductController from "./delete-products.controller";
import DeleteProductUseCase from "./delete-products.service";
import deleteProductMiddleware from "./delete-products.middleware";

const productRepository = new ProductRepository
const deleteProductUseCase = new DeleteProductUseCase(productRepository)
const deleteProductController = new DeleteProductController(deleteProductUseCase)

export {
	deleteProductController,
	deleteProductMiddleware
}