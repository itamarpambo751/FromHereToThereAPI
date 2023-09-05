import RestaurantRepository from "../../restaurant.repository";
import PatchRestaurantController from "./patch-restaurant.controller";
import PatchRestaurantUseCase from "./patch-restaurant.service";
import patchRestaurantMiddleware from "./patch-restaurant.middleware";

const patchRestaurantUseCase = new PatchRestaurantUseCase(
	new RestaurantRepository
)
const patchRestaurantController = new PatchRestaurantController(patchRestaurantUseCase)

export {
	patchRestaurantController,
	patchRestaurantMiddleware
}