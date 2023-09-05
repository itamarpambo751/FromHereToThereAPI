import OrdersRepository from "../../Orders.repository";
import PatchOrderController from "./patch-order.controller";
import patchOrderMiddleware from "./patch-order.middleware";
import PatchOrderUseCase from "./patch-order.service";

const patchOrderUseCase = new PatchOrderUseCase(
	new OrdersRepository
)
const patchOrderController = new PatchOrderController(patchOrderUseCase)

export {
	patchOrderController,
	patchOrderMiddleware
}