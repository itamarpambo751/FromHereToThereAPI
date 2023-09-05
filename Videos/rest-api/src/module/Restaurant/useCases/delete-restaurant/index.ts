import RestaurantRepository from "../../restaurant.repository";
import DeleteRestaurantController from "./delete-restaurant.controller";
import DeleteRestaurantUseCase from "./delete-restaurant.service";
import deleteRestaurantMiddleware from "./delete-restaurant.middleware";

const restaurantRepository = new RestaurantRepository
const deleteRestaurantUseCase = new DeleteRestaurantUseCase(restaurantRepository)
const deleteRestaurantController = new DeleteRestaurantController(deleteRestaurantUseCase)

export {
	deleteRestaurantController,
	deleteRestaurantMiddleware
}