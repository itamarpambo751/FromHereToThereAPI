import RestaurantRepository from "../../restaurant.repository"
import GetRestaurantListController from "./get-restaurant-list.controller"
import getRestaurantListMiddleware from "./get-restaurant-list.middleware"
import GetRestaurantListUseCase from "./get-restaurant-list.service"

const getRestaurantListUseCase = new GetRestaurantListUseCase(
	new RestaurantRepository
)
const getRestaurantListController = new GetRestaurantListController(getRestaurantListUseCase)

export {
	getRestaurantListController,
	getRestaurantListMiddleware
}