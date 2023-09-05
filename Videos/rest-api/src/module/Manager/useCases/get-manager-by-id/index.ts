import ManagerRepository from "../../manager.repository";
import GetManagerByIdController from "./get-manager-by-id.controller";
import getManagerByIdMiddleware from "./get-manager-by-id.middleware";
import GetManagerByIdUseCase from "./get-manager-by-id.service";

const getManagerByIdUseCase = new GetManagerByIdUseCase(
	new ManagerRepository
)

const getManagerByIdController = new GetManagerByIdController(
	getManagerByIdUseCase
)

export {
	getManagerByIdController,
	getManagerByIdMiddleware
}