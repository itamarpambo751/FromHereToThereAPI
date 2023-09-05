import ProductRepository from "../../products.repository";
import PatchProductController from "./patch-product.controller";
import patchProductMiddleware from "./patch-product.middleware";
import PatchProductUseCase from "./patch-product.service";

const patchProductUseCase = new PatchProductUseCase(
	new ProductRepository
)
const patchProductController = new PatchProductController(patchProductUseCase)

export {
	patchProductController,
	patchProductMiddleware
}