import ProductRepository from "../../products.repository"
import GetProductListController from "./get-product-list.controller"
import getProductListMiddleware from "./get-product-list.middleware"
import GetProductListUseCase from "./get-product-list.service"

const getProductListUseCase = new GetProductListUseCase(
	new ProductRepository
)
const getProductListController = new GetProductListController(getProductListUseCase)

export {
	getProductListController,
	getProductListMiddleware
}