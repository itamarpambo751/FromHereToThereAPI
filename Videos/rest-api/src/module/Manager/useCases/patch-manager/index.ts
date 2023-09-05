import ManagerRepository from "../../manager.repository"
import PatchManagerController from "./patch-manager.controller"
import patchManagerMiddleware from "./patch-manager.middleware"
import PatchManagerUseCase from "./patch-manager.service"

const patchManagerUseCase = new PatchManagerUseCase(
	new ManagerRepository
)
const patchManagerController = new PatchManagerController(patchManagerUseCase)

export {
	patchManagerController,
	patchManagerMiddleware
}