import CreateRestaurantController from "./create-restaurant.controller";
import CreateRestaurantUseCase from "./create-restaurant.service";
import createRestaurantMiddleware from "./create-restaurant.middleware";
import RestaurantRepository from "../../restaurant.repository";
import ManagerRepository from "../../../Manager/manager.repository";

const createRestaurantUseCase = new CreateRestaurantUseCase(
	new RestaurantRepository,
	new ManagerRepository
)

const createRestaurantController = new CreateRestaurantController(createRestaurantUseCase)

export {
	createRestaurantController,
	createRestaurantMiddleware
}