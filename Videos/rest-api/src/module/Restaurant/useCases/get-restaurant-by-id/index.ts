import RestaurantRepository from "../../restaurant.repository";
import GetRestaurantByIdController from "./get-restaurant-by-id.controller";
import GetRestaurantByIdUseCase from "./get-restaurant-by-id.service";
import getRestaurantByIdMiddleware from "./get-restaurant-by-id.middleware";

const getRestaurantByIdUseCase = new GetRestaurantByIdUseCase(
	new RestaurantRepository
)
const getRestaurantByIdController = new GetRestaurantByIdController(getRestaurantByIdUseCase)

export {
	getRestaurantByIdController,
	getRestaurantByIdMiddleware
}