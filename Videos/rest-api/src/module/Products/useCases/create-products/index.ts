import CreateProductsController from "./create-products.controller";
import CreateProductsUseCase from "./create-products.service";
import createProductsMiddleware from "./create-products.middleware";
import ProductsRepository from "../../products.repository"
import RestaurantRepository from "../../../Restaurant/restaurant.repository";

const createProductsUseCase = new CreateProductsUseCase(
	new RestaurantRepository,
	new ProductsRepository
)

const createProductsController = new CreateProductsController(createProductsUseCase)

export {
	createProductsController,
	createProductsMiddleware
}