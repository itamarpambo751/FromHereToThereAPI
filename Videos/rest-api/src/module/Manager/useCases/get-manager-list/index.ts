import ManagerRepository from "../../manager.repository"
import GetManagerListController from "./get-manager-list.controller"
import getManagerListMiddleware from "./get-manager-list.middleware"
import GetManagerListUseCase from "./get-manager-list.service"

const getManagerListUseCase = new GetManagerListUseCase(
	new ManagerRepository
)
const getManagerListController = new GetManagerListController(getManagerListUseCase)

export {
	getManagerListController,
	getManagerListMiddleware
}