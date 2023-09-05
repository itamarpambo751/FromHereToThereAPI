import RestaurantRepository from "../../../Restaurant/restaurant.repository";
import ManagerRepository from "../../manager.repository";
import CreateManagerController from "./create-manager.controller";
import createManagerMiddleware from "./create-manager.middleware";
import CreateManagerUseCase from "./create-manager.service";

const createManagerUseCase = new CreateManagerUseCase(
	new ManagerRepository,
	new RestaurantRepository
)
const createManagerController = new CreateManagerController(createManagerUseCase)

export {
	createManagerController,
	createManagerMiddleware
}