import DeleteManagerController from "./delete-manager.controller";
import DeleteManagerUseCase from "./delete-manager.service";
import deleteManagerMiddleware from "./delete-manager.middleware";
import ManagerRepository from "../../manager.repository";

const restaurantRepository = new ManagerRepository
const deleteManagerUseCase = new DeleteManagerUseCase(restaurantRepository)
const deleteManagerController = new DeleteManagerController(deleteManagerUseCase)

export {
	deleteManagerController,
	deleteManagerMiddleware
}